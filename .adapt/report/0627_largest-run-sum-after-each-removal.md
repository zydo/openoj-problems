## 627 — Maximum Segment Sum After Removals

- New id / title / slug: 627 / Largest Run Sum After Each Removal / `largest-run-sum-after-each-removal`
- Old → new API: `maximumSegmentSum` → `largestRunSumAfterEachRemoval` (go `largestRunSumAfterEachRemoval`, rust `largest_run_sum_after_each_removal`, ts `largestRunSumAfterEachRemoval`)
- Core algorithm / difficulty: reversed timeline, union-find activations with component sums, running max / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,1,7,2,9]` remove `[2,4,1,0,3]` → `[11,5,4,2,0]` (strictly shrinking maxima); `[6,6,6,6]` remove `[1,2,0,3]` → `[12,6,6,0]` (equal values, repeated max); `[8,3]` remove `[1,0]` → `[8,0]` (n=2)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
