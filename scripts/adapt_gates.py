#!/usr/bin/env python3
"""Gates 4-6 for the adaptation program (see openoj/ADAPT.md).

An adapted bundle has to prove three things beyond the ordinary checks:

  compatibility  a correct solution to the source problem still passes
                 the adapted problem once its entry point is renamed —
                 the mechanical proof that the rewrite preserved the task
  stale          no identifier or example value from the source survives
  overlap        the statement was rewritten, not paraphrased

Usage:
    adapt_gates.py <adapted-key> [--source <source-key>] [--gate ...]

The source key defaults to the ledger's record for this bundle.
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LIVE = ROOT / "problems"
ADAPTED = ROOT / "problems-adapt"
LEDGER = ROOT / ".adapt" / "ledger.json"
VERIFY = ROOT.parent / "openoj" / ".localonly" / "verify_solution.py"

# A rewritten statement still shares ordinary technical phrasing with the
# source ("return the indices", "in any order"). Overlap is measured on
# 7-word shingles, where incidental agreement is rare and paraphrase is
# obvious.
SHINGLE = 7
OVERLAP_LIMIT = 0.06


def ledger_entry(key: str) -> dict | None:
    if not LEDGER.is_file():
        return None
    for entry in json.loads(LEDGER.read_text())["entries"]:
        if entry.get("adapted") == key:
            return entry
    return None


def words(text: str) -> list[str]:
    # Compare prose, not formatting: fenced blocks carry examples, which
    # are checked by the stale gate instead.
    text = re.sub(r"```.*?```", " ", text, flags=re.S)
    text = re.sub(r"`[^`]*`", " ", text)
    return re.findall(r"[a-z]+", text.lower())


def shingles(text: str) -> set[tuple[str, ...]]:
    tokens = words(text)
    return {tuple(tokens[i : i + SHINGLE]) for i in range(len(tokens) - SHINGLE + 1)}


def gate_overlap(source: Path, adapted: Path) -> list[str]:
    before = shingles((source / "statement.md").read_text(encoding="utf-8"))
    after = shingles((adapted / "statement.md").read_text(encoding="utf-8"))
    if not after:
        return ["adapted statement has no prose to compare"]
    shared = before & after
    ratio = len(shared) / len(after)
    if ratio <= OVERLAP_LIMIT:
        return []
    sample = ["  " + " ".join(s) for s in sorted(shared)[:5]]
    return [
        f"statement shares {ratio:.0%} of its 7-word phrases with the source "
        f"(limit {OVERLAP_LIMIT:.0%}) — this reads as paraphrase, not rewrite:",
        *sample,
    ]


def identifiers(bundle: Path) -> tuple[set[str], set[str]]:
    """(names, parameters) — the two travel under different rules.

    A name like `twoSum` or `Two Sum` is stale wherever it appears. A
    parameter name is often an ordinary English word (`height`, `target`,
    `k`), so it only counts where it appears *as an identifier*.
    """
    problem = json.loads((bundle / "problem.json").read_text(encoding="utf-8"))
    invocation = problem["invocation"]
    names = {problem["title"], problem["slug"]}
    for field in ("method", "class_name", "oracle"):
        if invocation.get(field):
            names.add(invocation[field])
    names.update((invocation.get("entrypoints") or {}).values())
    names.update(method["name"] for method in invocation.get("methods", []))
    parameters = {parameter["name"] for parameter in invocation.get("parameters", [])}
    for method in invocation.get("methods", []):
        parameters.update(parameter["name"] for parameter in method.get("parameters", []))
    return {name for name in names if name}, {name for name in parameters if name}


def source_identifiers(source: Path, adapted: Path) -> dict[str, list[str]]:
    # Only a *renamed* identifier can be stale. Names the adaptation
    # legitimately kept — the framework's `Solution` wrapper, or a title
    # too generic to rename — are shared by both bundles and mean nothing.
    source_names, source_parameters = identifiers(source)
    adapted_names, adapted_parameters = identifiers(adapted)
    names = source_names - adapted_names
    parameters = source_parameters - adapted_parameters
    # Example values are as identifying as names: a new statement beside
    # the source's numbers has not been rewritten.
    statement = (source / "statement.md").read_text(encoding="utf-8")
    literals = set()
    for block in re.findall(r"```text\n(.*?)```", statement, flags=re.S):
        for array in re.findall(r"\[[^\[\]\n]{4,}\]", block):
            literals.add(array.replace(" ", ""))
    return {
        "names": sorted(names),
        "parameters": sorted(parameters),
        "literals": sorted(literals),
    }


def distinctive(name: str) -> bool:
    """A name that could only be an identifier, never English prose.

    `twoSum`, `max_area`, `two-sum` and `Two Sum` are distinctive; `search`,
    `get`, `put` are common words that appear in any technical discussion
    ("binary search"). Distinctive names are stale wherever they appear;
    bare lowercase words only count as identifiers.
    """
    return bool(re.search(r"[A-Z_\- ]", name))


def gate_stale(source: Path, adapted: Path) -> list[str]:
    wanted = source_identifiers(source, adapted)
    failures = []
    for path in sorted(adapted.rglob("*")):
        if not path.is_file() or path.suffix in {".json"} and path.name == "cases.json":
            continue
        try:
            body = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        squashed = body.replace(" ", "")
        # Where an identifier may legitimately appear, per file kind:
        # markdown refers to code in backticks; code files carry the real
        # identifiers; SVG never carries solution identifiers at all.
        if path.suffix == ".md":
            code_spans = re.findall(r"`[^`]*`", body) + re.findall(r"```.*?```", body, flags=re.S)
        elif path.suffix == ".svg":
            code_spans = []
        else:
            code_spans = [body]
        for name in wanted["names"]:
            if distinctive(name):
                if re.search(rf"\b{re.escape(name)}\b", body):
                    failures.append(f"{path.name}: source identifier {name!r}")
            elif path.suffix == ".json":
                # A bare word is stale in JSON only as an exact value, never
                # as a fragment of a longer slug.
                if re.search(rf'"{name}"', body):
                    failures.append(f"{path.name}: source identifier {name!r}")
            elif any(re.search(rf"\b{re.escape(name)}\s*\(", span) for span in code_spans):
                # In code, a bare-word identifier appears at a call or
                # declaration site — `name(`. Prose in comments ("binary
                # search") never does.
                failures.append(f"{path.name}: source identifier {name!r}")
        for name in wanted["parameters"]:
            pattern = re.compile(rf"\b{re.escape(name)}\b")
            if any(pattern.search(haystack) for haystack in haystacks):
                failures.append(f"{path.name}: source parameter {name!r}")
        for literal in wanted["literals"]:
            if literal in squashed:
                failures.append(f"{path.name}: source example {literal}")
    return sorted(set(failures))


def gate_compatibility(source: Path, adapted: Path) -> list[str]:
    """Run the source's reference solutions against the adapted cases.

    Only the entry point is renamed — class name, method name, and the
    per-language entrypoints — so a pass means the task, the data shapes
    and the judged semantics all survived the rewrite.
    """
    before = json.loads((source / "problem.json").read_text(encoding="utf-8"))["invocation"]
    after = json.loads((adapted / "problem.json").read_text(encoding="utf-8"))["invocation"]
    renames: list[tuple[str, str]] = []
    for field in ("class_name", "method", "oracle"):
        if before.get(field) and after.get(field) and before[field] != after[field]:
            renames.append((before[field], after[field]))
    for language, name in (before.get("entrypoints") or {}).items():
        target = (after.get("entrypoints") or {}).get(language)
        if target and name != target:
            renames.append((name, target))
    for old, new in zip(before.get("methods", []), after.get("methods", [])):
        if old["name"] != new["name"]:
            renames.append((old["name"], new["name"]))

    staged = adapted / ".compat"
    staged.mkdir(exist_ok=True)
    failures = []
    try:
        for solution in sorted(source.glob("solution*")):
            if solution.suffix in {".md"}:
                continue
            body = solution.read_text(encoding="utf-8")
            for old, new in renames:
                body = re.sub(rf"\b{re.escape(old)}\b", new, body)
            target = staged / solution.name
            target.write_text(body, encoding="utf-8")
            result = subprocess.run(
                [
                    sys.executable, str(VERIFY),
                    f"problems-adapt/{adapted.name}",
                    "--solution", str(target),
                ],
                capture_output=True,
                text=True,
            )
            if result.returncode != 0:
                failures.append(f"{solution.name}: {result.stdout.strip().splitlines()[-1] if result.stdout.strip() else result.stderr.strip()[:200]}")
            target.unlink()
    finally:
        for leftover in staged.glob("*"):
            leftover.unlink()
        staged.rmdir()
    return failures


GATES = {
    "compatibility": gate_compatibility,
    "stale": gate_stale,
    "overlap": gate_overlap,
}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("key", help="adapted bundle key, e.g. 0001_pair-sum")
    parser.add_argument("--source", help="source bundle key; defaults to the ledger entry")
    parser.add_argument("--gate", action="append", choices=sorted(GATES), help="run only these gates")
    arguments = parser.parse_args()

    adapted = ADAPTED / arguments.key
    if not adapted.is_dir():
        print(f"no adapted bundle at {adapted}")
        return 2
    source_key = arguments.source or (ledger_entry(arguments.key) or {}).get("source")
    if not source_key:
        print(f"no source recorded for {arguments.key}; pass --source")
        return 2
    source = LIVE / source_key
    if not source.is_dir():
        print(f"no source bundle at {source}")
        return 2

    failed = 0
    for name in arguments.gate or sorted(GATES):
        problems = GATES[name](source, adapted)
        if problems:
            failed += 1
            print(f"FAIL {name}")
            for line in problems[:12]:
                print(f"  {line}")
        else:
            print(f"OK   {name}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
