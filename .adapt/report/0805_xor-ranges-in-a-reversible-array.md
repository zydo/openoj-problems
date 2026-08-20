## 805 — Range XOR Queries with Subarray Reversals

- New id / title / slug: 805 / XOR Ranges in a Reversible Array / `xor-ranges-in-a-reversible-array`
- Old → new API: `getResults` → `xorResults` (go `xorResults`, rust `xor_results`, ts `xorResults`); parameters `nums`, `queries` kept as conventional identifiers
- Core algorithm / difficulty: implicit treap with split/merge, subtree XOR augmentation, lazy reversal flags / H4 (unchanged)
- Statement rewritten from spec: yes (query kinds renamed Set / Ask / Reverse)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,3,9,2,8]` — all three query kinds in sequence; `[5,1,4,2]` — the same
    segment asked before and after reversal, both answers 6 (XOR symmetry)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- The source method name was the oddly generic `getResults` (unrelated to the
  task); renamed to `xorResults`, which also reads better.
- Query triples are stale-prone: my first draft used `[3,1,2]`, identical to a
  source example literal, and the stale gate caught it. Adjusted to `[3,1,3]`
  and re-verified against the brute force.
- Expected values computed with the adapted `solution.py` and cross-checked
  against a direct array simulation (all matched).
