## 3287 — Find the Maximum Sequence Value of Array

- New id / title / slug: 3287 / Largest XOR of Two OR Halves / `largest-xor-of-two-or-halves`
- Old → new API: `maxValue` → `largestXor` (go `largestXor`, rust `largest_xor`, ts `largestXor`); parameters `nums`, `k` kept
- Core algorithm / difficulty: prefix/suffix reachable-OR-set knapsack around each boundary, then max XOR over all left-right set pairs / H3 (unchanged)
- Statement rewritten from spec: yes (half/boundary framing stated from scratch; no "sequence value" phrasing)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,5,9] k=1` → 12 (k=1 degenerates to best pairwise XOR), `[1,2,4,8,3] k=2` → 15 (OR interplay, hits the 4-bit ceiling), `[7,1,1,7] k=2` → 0 (n=2k forces equal halves)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- BSD `sed` has no `\b` — renames via `sed -E 's/\b…\b/'` silently no-op on
  this machine. Use `perl -pe 's/\b…\b/…/g'` for every word-boundary rename.
- Example 3 (`answer 0`) doubles as coverage the source's public cases lacked.
