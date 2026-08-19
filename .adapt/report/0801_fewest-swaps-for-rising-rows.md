## 0801 — Minimum Swaps To Make Sequences Increasing

- New id / title / slug: 801 / Fewest Swaps For Rising Rows / `fewest-swaps-for-rising-rows`
- Old → new API: `minSwap` → `fewestSwapsForRisingRows` (go `fewestSwapsForRisingRows`, rust `fewest_swaps_for_rising_rows`, ts `fewestSwapsForRisingRows`); parameters `nums1` → `top`, `nums2` → `bottom`
- Core algorithm / difficulty: two-state keep/swap DP over columns / H3 (unchanged)
- Statement rewritten from spec: yes — recast as a two-row grid where a move exchanges one column, which makes the pairing constraint visible without the source's "operation on index i" phrasing
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `[1,2,7,6,9] / [2,4,4,8,10] → 1` (single mid-array exchange), `[3,4,8,9,12] / [4,5,5,6,11] → 2` (a repeated value the top row cannot fix alone), `[1,4,6] / [2,3,9] → 0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `top` / `bottom` were checked against every source solution before the rename;
  the source's locals are `keep`, `swap`, `nkeep`, `nswap`, `a1`, `b1`, `a2`, `b2`,
  so there was no collision. Worth noting that the compatibility gate cannot apply
  parameter renames anyway (it reads them from `ledger.json`, which is frozen), but
  it does not need to: parameters are positional at the call boundary.
- Examples with an answer of 2 are hard to construct by eye here; a brute force over
  all `2^n` exchange masks on random small inputs found clean ones in seconds, and
  it also yields the witness mask for the explanation text.
