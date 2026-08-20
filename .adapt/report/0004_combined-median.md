## 4 — Median of Two Sorted Arrays

- New id / title / slug: 4 / Combined Median / `combined-median`
- Old → new API: `findMedianSortedArrays` → `combinedMedian` (go `combinedMedian`, rust `combined_median`, ts `combinedMedian`); parameters `nums1`, `nums2` → `first`, `second`
- Core algorithm / difficulty: binary search on the partition of the shorter array / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — example 1 keeps a 2+1 split with the same cut i=1, j=0)
  - `[2,6] + [9] → 6` (odd), `[-3,0] + [4,11] → 2` (even, negatives), `[7] + [] → 7` (empty array, shown publicly where the source hid it)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — `solution-partition-cut.svg` walks example 1; the new
  example was picked so the cut geometry (i=1, j=0, odd total) is identical and only
  11 text nodes changed (row labels `first`/`second`, three digits, flank labels,
  verdict lines).
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The structure-preserving pick doubles as the guide's walkthrough: the cut
  (i=1, j=0) and the sentinel case `b_left = -inf` survive unchanged, so the
  figure and the prose stay in step.
- Expected values computed with a local port of the partition search,
  cross-checked against an independent `sorted(a + b)` merge.
