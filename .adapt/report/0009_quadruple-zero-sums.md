## 9 — 4Sum II

- New id / title / slug: 9 / Quadruple Zero Sums / `quadruple-zero-sums`
- Old → new API: `fourSumCount` → `countQuadrupleZeroSums`
  (go `countQuadrupleZeroSums`, rust `count_quadruple_zero_sums`, ts `countQuadrupleZeroSums`);
  parameters `nums1..nums4` → `first`, `second`, `third`, `fourth`
- Core algorithm / difficulty: meet in the middle over pair sums with multiplicities / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,1] [-3,0] [1,-1] [0,2] → 3` (several scattered hits), `[5] [-2] [-4] [1] → 1` (n = 1), `[1,-1]×3 [-1,1] → 6` (multiplicity counting, C(4,2) ways)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- Family: named to sit beside `0008_triple-zero-sum` (Triple Zero Sum) —
  the count-quadruples-over-four-arrays task reads naturally as "Quadruple
  Zero Sums", and a later 0018_4sum adaptation (quadruples within one
  array) stays distinguishable.
