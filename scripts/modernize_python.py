#!/usr/bin/env python3
"""Rewrite a bundle's Python to modern annotations (PEP 585/604).

    modernize_python.py <bundle>... [--check]

Applies only under problems-adapt/ — the live LeetCode-derived tree keeps
its legacy style by choice (see openoj/TODO.md's history). The rewrite:

  List[X] -> list[X]        Dict[K, V] -> dict[K, V]
  Set[X]  -> set[X]         Tuple[...]  -> tuple[...]
  Optional[X] -> X | None   (innermost first, nesting-safe)

and the ``from typing import ...`` line afterwards keeps only names that
still matter (Callable and friends); it disappears entirely when nothing
needs it. Annotations are not semantics: the judge and the compatibility
gate are unaffected. --check reports what would change without writing.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

MODERNIZED = {"List": "list", "Dict": "dict", "Set": "set", "Tuple": "tuple"}
IMPORT_LINE = re.compile(r"^from typing import ([\w, ]+)$", re.M)


def _optional_spans(text: str):
    """Spans of `Optional[...]` with its matching bracket (nesting-safe)."""
    spans = []
    i = 0
    while True:
        start = text.find("Optional[", i)
        if start < 0:
            break
        if start > 0 and (text[start - 1].isalnum() or text[start - 1] == "_"):
            i = start + 1
            continue
        depth = 0
        j = start + len("Optional") 
        end = -1
        while j < len(text):
            if text[j] == "[":
                depth += 1
            elif text[j] == "]":
                depth -= 1
                if depth == 0:
                    end = j
                    break
            j += 1
        if end < 0:
            break
        spans.append((start, end))
        i = end + 1
    return spans


def rewrite(text: str) -> str:
    for old, new in MODERNIZED.items():
        text = re.sub(rf"\b{old}\[", f"{new}[", text)
    # innermost-last so inner Optional[...] are already rewritten when the
    # outer span's inner text is lifted out
    for start, end in reversed(_optional_spans(text)):
        inner = text[start + len("Optional[") : end]
        # `|` binds tighter than `,` in every annotation position these
        # appear in (parameters, returns, subscript args), so no parens
        text = f"{text[:start]}{inner} | None{text[end + 1 :]}"
    match = IMPORT_LINE.search(text)
    if match:
        keep = [
            name.strip()
            for name in match.group(1).split(",")
            if name.strip() not in MODERNIZED and name.strip() != "Optional"
        ]
        if keep:
            text = text[: match.start()] + f"from typing import {', '.join(keep)}" + text[match.end() :]
        else:
            # nothing needs typing any more: drop the import and the blank
            # lines that separated it from the code
            text = text[: match.start()] + text[match.end() :].lstrip("\n")
    return text


def main() -> int:
    arguments = sys.argv[1:]
    check_only = "--check" in arguments
    targets = [Path(argument) for argument in arguments if not argument.startswith("--")]
    if not targets:
        raise SystemExit("usage: modernize_python.py <bundle-or-file>... [--check]")
    changed = 0
    for target in targets:
        if "problems-adapt" not in target.resolve().parts:
            raise SystemExit(f"refusing {target}: only the adapted tree is modernized")
        files = [target] if target.is_file() else sorted(target.glob("solution*.py"))
        for path in files:
            original = path.read_text(encoding="utf-8")
            modern = rewrite(original)
            if modern != original:
                changed += 1
                where = path.relative_to(target.parent) if target.is_file() else path.relative_to(target)
                if check_only:
                    print(f"WOULD REWRITE {where}")
                else:
                    path.write_text(modern, encoding="utf-8")
                    print(f"rewrote {where}")
    print(f"{changed} file(s) {'would change' if check_only else 'modernized'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
