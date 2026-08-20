## 1685 — Sum of Absolute Differences in a Sorted Array

- New id / title / slug: 1685 / Distance Sums in a Sorted Array / `distance-sums-in-a-sorted-array`
- Old → new API: `getSumAbsoluteDifferences` → `distanceSums` (go `distanceSums`, rust `distance_sums`, ts `distanceSums`); parameter `nums` kept
- Core algorithm / difficulty: running prefix sum + grand total, absolute values dissolved by sortedness / H2 (unchanged)
- Statement rewritten from spec: yes ("absolute difference" becomes "distance", the formula stated once as a sum over all positions)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,6,7]` → `[7,4,5]` (expanded per entry), `[1,3,3,8,10]` → `[20,14,14,19,25]` (five entries, no expansion), `[2,4,4,9]` → `[11,7,7,17]` (ties; reused in the guide)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The formula in the description sums over all positions including `i`
  itself (the zero distance), matching the judge exactly; the source stated
  it as `j != i`, which is equivalent but invites an off-by-one in a naive
  port.
- The stale gate also extracts the source's *output* literals (`[4,3,5]`,
  `[24,15,13,15,21]`), so chosen outputs must dodge those too, not just
  the inputs.
