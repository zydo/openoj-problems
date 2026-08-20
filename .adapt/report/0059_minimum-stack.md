## 59 — Min Stack

- New id / title / slug: 59 / Minimum Stack / `minimum-stack`
- Old → new API: class `MinStack` → `MinimumStack`; `getMin` → `minimum`; `push`/`pop`/`top` kept (universal stack vocabulary, as `get`/`put` were in 0146)
- Core algorithm / difficulty: stack of (value, running-minimum) pairs / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `3, 8, 1` showing the minimum recovering after a pop; `6, 6` duplicates surviving one pop, then `9, 2` dropping and restoring the minimum
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- `adapt_gates.py` needs `--source 0155_min-stack` until the incoming fragment
  is merged into the ledger (the ledger lookup is what supplies `--source`
  by default). Same will apply to every bundle in this chunk.
- `getMin` → `minimum`: the method reads as a noun accessor, matching how the
  statement words the query. Word-boundary rename reached the solution files'
  comments too, which the stale gate would otherwise have caught.
