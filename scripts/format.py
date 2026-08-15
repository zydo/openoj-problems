#!/usr/bin/env python3
"""Format (or --check) every problem-repo file with the pinned toolchain.

The toolchain mirrors the VS Code formatter settings documented in
FORMAT.md, using each engine's CLI so editor, generation, and CI all agree:

  extension      formatter                pin (see package.json / CI)
  ------------   -----------------------  -----------------------------
  .py            ruff format              ruff==0.16.3 (pip)
  .go            gofmt                    Go 1.24 toolchain
  .rust          rustfmt --edition 2021   rust 1.85 toolchain
  .cpp           clang-format             clang-format==22.1.8 (pip)
  .js            prettier                 prettier==3.9.6 (npm)
  .ts            prettier                 prettier==3.9.6 (npm)
  .java          prettier + plugin        prettier-plugin-java==2.10.3
  .sql           sql-formatter            sql-formatter==15.8.2 (npm)
  .json          canonical JSON           2-space indent + trailing newline
  .md            prettier                 proseWrap: preserve

Usage:
  format.py [--check] [--tolerant] [<bundle-or-file> ...]   # default: all
--check  lists files that are not formatted and exits 1 (CI mode).
--tolerant skips a language when its tool is missing instead of failing.
"""
from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PRETTIER_CONFIG = ["--config", str(ROOT / ".prettierrc.json")]

_missing: set[str] = set()


def _resolve(executable: str) -> str | None:
    found = shutil.which(executable)
    if found:
        return found
    # documented fallback location for pip --user installs
    candidate = Path.home() / f"Library/Python/{sys.version_info.major}.{sys.version_info.minor}/bin" / executable
    if candidate.is_file():
        return str(candidate)
    return None


def _run(command: list[str], content: str, tool: str) -> str:
    resolved = _resolve(command[0])
    if resolved is None:
        raise FileNotFoundError(command[0])
    completed = subprocess.run(
        [resolved, *command[1:]], input=content, capture_output=True, text=True, timeout=60
    )
    if completed.returncode != 0:
        raise RuntimeError(f"{tool} failed: {completed.stderr.strip()[:400]}")
    return completed.stdout


def _node(script: str, content: str, tool: str) -> str:
    if shutil.which("node") is None:
        raise FileNotFoundError("node")
    completed = subprocess.run(
        ["node", "-e", script], input=content, capture_output=True, text=True, timeout=60, cwd=ROOT
    )
    if completed.returncode != 0:
        raise RuntimeError(f"{tool} failed: {completed.stderr.strip()[:400]}")
    return completed.stdout


def _format_sql(content: str) -> str:
    script = (
        "const { format } = require('sql-formatter');"
        "process.stdout.write(format(require('fs').readFileSync(0, 'utf8'), { language: 'sqlite' }))"
    )
    return _node(script, content, "sql-formatter")


def _formatter(extension: str):
    if extension == "py":
        return lambda c: _run(["ruff", "format", "--line-length", "88", "-"], c, "ruff")
    if extension == "go":
        return lambda c: _run(["gofmt"], c, "gofmt")
    if extension == "rust":
        return lambda c: _run(["rustfmt", "--edition", "2021", "--emit", "stdout"], c, "rustfmt")
    if extension == "cpp":
        return lambda c: _run(["clang-format", "--style=file", "--assume-filename=x.cpp"], c, "clang-format")
    if extension in ("js", "ts", "java", "md"):
        parser = {"js": "babel", "ts": "typescript", "java": "java", "md": "markdown"}[extension]
        return lambda c, parser=parser: _run(
            ["npx", "--no-install", "prettier", *PRETTIER_CONFIG, "--parser", parser], c, "prettier"
        )
    if extension == "sql":
        return _format_sql
    if extension == "json":
        return lambda c: json.dumps(json.loads(c), indent=2, ensure_ascii=False) + "\n"
    return None


def format_content(extension: str, content: str, tolerant: bool = True) -> str:
    """Format one file's content; returns it unchanged when the tool for its
    language is unavailable and tolerant is set (generation-time behavior)."""
    formatter = _formatter(extension)
    if formatter is None:
        return content
    try:
        formatted = formatter(content)
    except (FileNotFoundError, RuntimeError) as error:
        if not tolerant:
            raise
        if extension not in _missing:
            _missing.add(extension)
            print(f"warning: {error} — leaving .{extension} files unformatted", file=sys.stderr)
        return content
    return formatted


def _targets(arguments: list[str]) -> list[Path]:
    if arguments:
        return [Path(argument).resolve() for argument in arguments]
    problems = ROOT / "problems"
    files = [problems / "FORMAT.md"]
    files += sorted(problems.rglob("*"))
    return [path for path in files if path.is_file()]


FORMATTABLE = {"py", "go", "rust", "cpp", "js", "ts", "java", "sql", "json", "md"}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="report unformatted files, change nothing")
    parser.add_argument("--tolerant", action="store_true", help="skip missing tools instead of failing")
    parser.add_argument("targets", nargs="*", help="bundles or files (default: everything)")
    arguments = parser.parse_args()

    unformatted = []
    formatted_count = 0
    for target in _targets(arguments.targets):
        files = sorted(target.rglob("*")) if target.is_dir() else [target]
        for path in files:
            if not path.is_file():
                continue
            extension = path.suffix.lstrip(".")
            if extension not in FORMATTABLE:
                continue
            content = path.read_text(encoding="utf-8")
            new_content = format_content(extension, content, tolerant=arguments.tolerant)
            if new_content != content:
                if arguments.check:
                    unformatted.append(path.relative_to(ROOT))
                else:
                    path.write_text(new_content, encoding="utf-8")
                    formatted_count += 1

    if arguments.check:
        for path in unformatted:
            print(f"UNFORMATTED {path}")
        print(f"format check: {len(unformatted)} unformatted files")
        raise SystemExit(1 if unformatted else 0)
    print(f"formatted {formatted_count} files" + (f" (skipped: {sorted(_missing)})" if _missing else ""))


if __name__ == "__main__":
    main()
