## 1696 — Jump Game VI

- New id / title / slug: 1696 / Richest Leap Route / `richest-leap-route`
- Old → new API: `maxResult` → `richestLeapRoute` (go `richestLeapRoute`, rust `richest_leap_route`, ts `richestLeapRoute`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: sliding-window-maximum DP with a monotonic deque / H3 (unchanged)
- Statement rewritten from spec: yes — the leap range is given as "between 1 and k positions forward, still inside the array", and the score as what standing on an index adds
- Examples newly constructed: yes (structure-preserving: **yes** — Example 1 keeps the figure's six cells, `k = 2`, and its exact deque history)
  - `[2,-3,-4,5,-6,1], k = 2 → 5` (the figure's walk), `[6,-2,-8,3,-1,2], k = 3 → 11` (a wider k hops both dips), `[-4,-9,-2], k = 2 → -6` (all-negative: the two ends are unavoidable)
- Constraints: domain unchanged, presentation rewritten; the source's `O(n)` follow-up is kept, reworded
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — `figures/solution-monotonic-deque.svg` keeps every rect and takes new array, dp, deque-snapshot and annotation labels
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- This figure hardcodes the *number* of deque boxes per row, so preserving it
  constrains the example far more than a value swap: the six values must satisfy
  `nums[1] < 0`, `nums[2] < nums[1]`, `nums[3] >= 0`, `nums[4] < 0`,
  `nums[5] >= 0` for the same pops and expiries to happen. Deriving those
  inequalities from the drawn snapshots first, then picking values, took a few
  minutes and made the label edit mechanical. Worth doing for any figure that
  draws an algorithm's *trace* rather than its input — the sign pattern of the
  example is part of the geometry.
