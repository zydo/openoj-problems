## 621 — Minimum Replacements to Sort the Array

- New id / title / slug: 621 / Minimum Splits to Sort the Array / `minimum-splits-to-sort-the-array`
- Old → new API: `minimumReplacement` → `minimumSplits` (go `minimumSplits`, rust `minimum_splits`, ts `minimumSplits`)
- Core algorithm / difficulty: right-to-left greedy, k = ceil(x/bound) pieces per overflow, bound = floor(x/k) / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,7,4] → 1`, `[4,5,5,9] → 0`, `[11,3,9,6] → 4` (two-round split with cascading cap)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The statement names the operation "split into two positive integers"; the
  source said only "any two elements that sum to it". Pieces are positive in
  every reference construction, and allowing 0 pieces could never lower the
  count anyway (a 0 piece only shrinks the next bound).
