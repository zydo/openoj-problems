## 1658 — Minimum Operations to Reduce X to Zero

- New id / title / slug: 1658 / Fewest End Removals to Reach a Sum / `fewest-end-removals-to-reach-a-sum`
- Old → new API: `minOperations` → `fewestRemovals` (go `fewestRemovals`, rust `fewest_removals`, ts `fewestRemovals`); parameters `nums`, `x` kept (conventional)
- Core algorithm / difficulty: invert to the longest middle subarray summing to `total - x`, positive-only sliding window, answer `n - best` / H2 (unchanged)
- Statement rewritten from spec: yes — a move peels one end of the array off and subtracts it from `x`; fewest moves to land exactly on 0, else -1
- Examples newly constructed: yes (structure-preserving: yes for Example 1 — a five-cell array whose window story keeps the figure's three-row rhythm: grow, shrink-to-hit, final mapping)
  - `[2,3,1,4,2], x = 4 → 2` (peel the leading and trailing 2), `[4,6,7,8,5], x = 3 → -1` (nothing lands exactly), `[1,4,18,2,1,5], x = 13 → 5` (keep only the 18; two off the left, three off the right)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — `solution-middle-window.svg` re-emitted by `.localonly/wave-e-05/fig_1658.py` for the new data (target 8 = 12 − 4); cell fills and L/R markers verified directly from the emitted SVG after the vision readout miscounted cells
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source hidden set reuses the source example array `[1,1,4,2,3]` with other `x` values; those hidden cases are untouched, so no collision with my public `[2,3,1,4,2]`.
- End-of-wave: vision readouts at ~800px thumbnails keep miscounting small grids (cells, node edges); when a figure's correctness is checkable from its markup — window fills, marker indices, per-rank colors — parse the SVG and assert, and use the render only for layout/overlap eyeballing.
