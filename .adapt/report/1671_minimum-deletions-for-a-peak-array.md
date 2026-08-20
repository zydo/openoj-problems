## 1671 — Minimum Number of Removals to Make Mountain Array

- New id / title / slug: 1671 / Minimum Deletions for a Peak Array / `minimum-deletions-for-a-peak-array`
- Old → new API: `minimumMountainRemovals` → `minimumPeakDeletions` (go `minimumPeakDeletions`, rust `minimum_peak_deletions`, ts `minimumPeakDeletions`); parameter `nums` kept
- Core algorithm / difficulty: longest bitonic subsequence via `up`/`down` DP tables, answer `n − best` / H3 (unchanged)
- Statement rewritten from spec: yes ("mountain array" becomes "peak array", consistent with the bank's existing peak-* vocabulary)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,5,9,4,1]` → 0 (already a peak), `[4,3,7,8,2,6,1]` → 2 (delete 3 and 2, keep `[4,7,8,6,1]`), `[2,2,3,3,2,2]` → 3 (plateaus ride neither slope)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The guide's worked example reuses example 2's data: `up = [1,1,2,3,1,2,1]`,
  `down = [4,3,3,3,2,2,1]`; `down[0] = 4` doubles as the illustration that the
  globally longest falling chain still makes no summit (`up[0] = 1`).
- "Peak" was chosen over "mountain" after checking the adapted tree: `peak`
  already names several adapted problems, and only 3296 (a literal
  mountain-height problem) kept the word mountain.
