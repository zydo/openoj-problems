#!/usr/bin/env python3
"""Merge ledger fragments into the ledger.

Adapting agents work in parallel and never touch the ledger; each writes
one fragment per finished bundle. This is the only writer of the ledger.

The remaining work is split between two independent main agents (see
.adapt/PARTITION.md). Each owns a separate inbox and a separate ledger
shard, so the two never write the same file and their commits never
conflict. ledger.json is the frozen base both shards extend.

    adapt_merge.py [--check]              # the base ledger (historical)
    adapt_merge.py --part a [--check]     # .adapt/incoming/   -> ledger-a.json
    adapt_merge.py --part b [--check]     # .adapt/incoming-b/ -> ledger-b.json
    adapt_merge.py --part e [--check]     # .adapt/incoming-e/ -> ledger-e.json
    adapt_merge.py --part f [--check]     # .adapt/incoming-f/ -> ledger-f.json
    adapt_merge.py --part g [--check]     # .adapt/incoming-g/ -> ledger-g.json
    adapt_merge.py --part h [--check]     # .adapt/incoming-h/ -> ledger-h.json
    adapt_merge.py --part c [--check]     # .adapt/incoming-c/ -> ledger-c.json
    adapt_merge.py --part d [--check]     # .adapt/incoming-d/ -> ledger-d.json
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ADAPT = ROOT / ".adapt"
LEDGER = ADAPT / "ledger.json"

# Part A keeps the original inbox: its agents were already dispatched
# against that path and renaming it underneath them would strand fragments.
PARTS = {
    "a": (ADAPT / "incoming", ADAPT / "ledger-a.json"),
    "b": (ADAPT / "incoming-b", ADAPT / "ledger-b.json"),
    "c": (ADAPT / "incoming-c", ADAPT / "ledger-c.json"),
    "d": (ADAPT / "incoming-d", ADAPT / "ledger-d.json"),
    "e": (ADAPT / "incoming-e", ADAPT / "ledger-e.json"),
    "f": (ADAPT / "incoming-f", ADAPT / "ledger-f.json"),
    "g": (ADAPT / "incoming-g", ADAPT / "ledger-g.json"),
    "h": (ADAPT / "incoming-h", ADAPT / "ledger-h.json"),
}


def _part() -> str | None:
    if "--part" not in sys.argv:
        return None
    part = sys.argv[sys.argv.index("--part") + 1].lower()
    if part not in PARTS:
        raise SystemExit(f"unknown part {part!r}; expected one of {sorted(PARTS)}")
    return part


def _load(path: Path) -> list[dict]:
    if not path.exists():
        return []
    return json.loads(path.read_text(encoding="utf-8"))["entries"]


def main() -> int:
    check = "--check" in sys.argv
    part = _part()
    if part is None:
        incoming, ledger = ADAPT / "incoming", LEDGER
        entries = _load(ledger)
    else:
        incoming, ledger = PARTS[part]
        entries = _load(ledger)

    # Base plus every shard: a bundle already recorded anywhere is not new,
    # whichever part recorded it.
    known = {e["adapted"]: e for e in _load(LEDGER)}
    for _, shard in PARTS.values():
        known.update({e["adapted"]: e for e in _load(shard)})
    by_adapted = known

    fragments = sorted(incoming.glob("*.json")) if incoming.is_dir() else []
    label = f"part {part}" if part else "base"
    if check:
        print(f"{len(fragments)} fragments pending merge, {len(by_adapted)} adapted overall ({label}: {len(entries)})")
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
        ledger.write_text(json.dumps({"entries": entries}, indent=2) + "\n", encoding="utf-8")
    print(f"merged {merged}, conflicts {skipped}, {label} now {len(entries)}, {len(by_adapted)} adapted overall")
    return 1 if skipped else 0


if __name__ == "__main__":
    raise SystemExit(main())
