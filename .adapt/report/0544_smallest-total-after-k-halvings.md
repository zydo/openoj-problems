## 544 — Remove Stones to Minimize the Total

- New id / title / slug: 544 / Smallest Total After K Halvings / `smallest-total-after-k-halvings`
- Old → new API: `minStoneSum` → `smallestTotalAfterKHalvings` (go `smallestTotalAfterKHalvings`, rust `smallest_total_after_k_halvings`, ts `smallestTotalAfterKHalvings`); parameter `piles` → `values`
- Core algorithm / difficulty: greedy max-heap with all-ones early exit, O(n + k log n) / H2 (unchanged)
- Statement rewritten from spec: yes (stone-pile scenario dropped for a plain array)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[9,2,6], k=2` → 10, `[6,6], k=3` → 5 (equal values), `[3,2,2], k=5` → 3 (floor no-op on 1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter rename applied by hand after scaffolding (`adapt_scaffold.py`
  has no --param flag): problem.json fields plus `\bpiles\b` → `values` in
  every solution file; the compat gate needs no parameter mapping since it
  stages source solutions positionally.
- Grep for `values` as an identifier in the source solutions first — only
  prose occurrences ("negated values"), so no 0587-style collision.
- Singular "pile" survives in ported comments; not an identifier, gate-clean.
