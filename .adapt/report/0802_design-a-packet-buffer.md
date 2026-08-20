## 802 — Implement Router

- New id / title / slug: 802 / Design a Packet Buffer / `design-a-packet-buffer`
- Old → new API: class `Router` → `PacketBuffer`; constructor `memoryLimit` →
  `capacity`; methods `addPacket` → `receive`, `forwardPacket` → `dispatch`,
  `getCount` → `countInWindow`; method parameters kept as conventional
  identifiers
- Core algorithm / difficulty: FIFO queue + stored-triple set + per-destination
  sorted timestamp logs with a head index instead of deletion / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - Ex1: duplicate refused, capacity eviction, dispatch, and three window counts
    including an emptied destination
  - Ex2: dispatch on empty, count on empty, and a re-receive that succeeds
    because the earlier copy left
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: py, java (the two languages the bundle carries)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending (batch run — design kind)
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Hidden-case `actions` strings renamed in place (`Router` → `PacketBuffer`,
  method names likewise); every parameter payload byte-identical.
- Design compatibility is positional (the harness constructs and dispatches by
  `problem.json` fields and positional args), so the constructor-parameter
  rename needs no ledger entry to stage the source solutions — the gate passed
  mechanically, unlike SQL.
- Public expected values produced by executing the adapted `solution.py`
  through the exact action/params sequences.
