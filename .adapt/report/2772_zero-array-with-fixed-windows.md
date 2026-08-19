## 2772 — Apply Operations to Make All Array Elements Equal to Zero

- New id / title / slug: 2772 / Zero the Array with Fixed Windows / `zero-array-with-fixed-windows`
- Old → new API: `checkArray` → `canZeroArray` (go `canZeroArray`, rust `can_zero_array`, ts `canZeroArray`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: left-to-right replay with a difference array of window coverage, feasibility of residuals / H3 (unchanged)
- Statement rewritten from spec: yes — the operation restated as subtracting 1 from any k consecutive cells, question posed as driving the array to all zeros
- Examples newly constructed: yes (structure-preserving: yes for the solution figure)
  - `[1,1,3,2,2,0], k=3 → true` (one window at 0, two at 2; same window starts as the drawn sweep), `[3,1,2], k=3 → false` (k = n, single window), `[5,0,3], k=1 → true` (cells act alone)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (solution-difference-sweep — array row, window annotations, coverage row; the two bracket geometries were already correct for the new window starts)
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source explanation's third step printed the all-zero array, which is a
  stale literal by gate definition; the adapted explanation describes the last
  step in prose instead.
