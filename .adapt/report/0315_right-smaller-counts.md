## 0315 — Count of Smaller Numbers After Self

- New id / title / slug: 315 / Right Smaller Counts / `right-smaller-counts`
- Old → new API: `countSmaller` → `rightSmallerCounts` (go `rightSmallerCounts`, rust `right_smaller_counts`, ts `rightSmallerCounts`)
- Core algorithm / difficulty: Fenwick tree over the bounded value range, right-to-left scan / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,8,4,1,6]` (mixed order), `[-2,-2,7,-5,0]` (negatives + equal-is-not-smaller), `[9]` (length 1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- Single-solution bundle; the Fenwick exposition was rewritten around the new
  example including the duplicate-values argument.
- `verify_solution.py` reports 16/16 per language (3 public + 13 hidden).
