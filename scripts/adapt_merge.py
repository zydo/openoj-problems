#!/usr/bin/env python3
"""Merge ledger fragments from .adapt/incoming/ into .adapt/ledger.json.

Adapting agents work in parallel and never touch the ledger; each writes
one fragment per finished bundle. This is the only writer of ledger.json.

    adapt_merge.py [--check]     # --check: report pending, merge nothing
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INCOMING = ROOT / ".adapt" / "incoming"
LEDGER = ROOT / ".adapt" / "ledger.json"


def main() -> int:
    check = "--check" in sys.argv
    entries = json.loads(LEDGER.read_text(encoding="utf-8"))["entries"]
    by_adapted = {entry["adapted"]: entry for entry in entries}

    fragments = sorted(INCOMING.glob("*.json")) if INCOMING.is_dir() else []
    if check:
        print(f"{len(fragments)} fragments pending merge, {len(entries)} entries in ledger")
        for fragment in fragments:
            print(f"  {fragment.name}")
        return 0

    merged, skipped = 0, 0
    for fragment in fragments:
        entry = json.loads(fragment.read_text(encoding="utf-8"))
        key = entry["adapted"]
        if key in by_adapted:
            if by_adapted[key] != entry:
                print(f"CONFLICT {key}: ledger and fragment differ; fragment kept in place")
                skipped += 1
                continue
        else:
            entries.append(entry)
            by_adapted[key] = entry
            merged += 1
        fragment.unlink()

    if merged or skipped:
        LEDGER.write_text(json.dumps({"entries": entries}, indent=2) + "\n", encoding="utf-8")
    print(f"merged {merged}, conflicts {skipped}, ledger now {len(entries)} entries")
    return 1 if skipped else 0


if __name__ == "__main__":
    raise SystemExit(main())
