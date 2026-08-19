#!/usr/bin/env python3
"""Rewrite a part's remaining-work list after every merged batch.

    adapt_remaining.py <part>

Remaining = the part's assigned sources (.adapt/part-<p>.json) minus
everything recorded in its shard (.adapt/ledger-<p>.json) minus fragments
still pending in its inbox minus anything in .adapt/blocked.json (sources
with live-tree defects that cannot be adapted yet). The result lands in
.adapt/part-<p>-remaining.json so every session can see, on disk and at
all times, what a part still owes.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ADAPT = ROOT / ".adapt"


def _load(path: Path, default):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else default


def main() -> int:
    if len(sys.argv) != 2 or sys.argv[1] not in {"a", "b", "c", "d", "e"}:
        raise SystemExit("usage: adapt_remaining.py <a|b|c|d|e>")
    part = sys.argv[1]
    assigned = _load(ADAPT / f"part-{part}.json", [])
    shard = _load(ADAPT / f"ledger-{part}.json", {"entries": []})["entries"]
    inbox = (
        ADAPT / "incoming" if part == "a" else ADAPT / f"incoming-{part}"
    )
    pending = [
        json.loads(f.read_text(encoding="utf-8")) for f in sorted(inbox.glob("*.json"))
    ] if inbox.is_dir() else []
    blocked = set(_load(ADAPT / "blocked.json", []))

    done = {e["source"] for e in shard} | {e["source"] for e in pending}
    # A part's territory can shrink when another part is carved out of it
    # (E was carved from B's original assignment), so anything assigned to
    # a different part is not this part's to do either.
    others: set[str] = set()
    for p in ("a", "b", "c", "d", "e"):
        if p != part:
            others |= set(_load(ADAPT / f"part-{p}.json", []))
    remaining = [k for k in assigned if k not in done and k not in blocked and k not in others]

    out = ADAPT / f"part-{part}-remaining.json"
    out.write_text(json.dumps(remaining, indent=2) + "\n", encoding="utf-8")
    print(
        f"part {part}: {len(assigned)} assigned, {len(done)} done "
        f"({len(shard)} merged + {len(pending)} pending), "
        f"{len(blocked & set(assigned))} blocked, {len(remaining)} remaining"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
