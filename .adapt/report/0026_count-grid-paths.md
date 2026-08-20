## 26 — Unique Paths

- New id / title / slug: 26 / Count Grid Paths / `count-grid-paths`
- Old → new API: `uniquePaths` → `countGridPaths` (go `countGridPaths`, rust `count_grid_paths`, ts `countGridPaths`); parameters `m`, `n` kept
- Core algorithm / difficulty: rolling-row DP, or one binomial coefficient / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — both figures dropped)
  - `m = 4, n = 4` → 20 (square), `m = 2, n = 9` → 9 (thin and wide), `m = 1, n = 5` → 1 (single row)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (both `example-1.svg` and `solution-dp-grid.svg`)
- Gates: check ✓ (full tree, 0 failures) verify ✓ (7/7 languages × 2 variants, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Multi-solution bundle: variant ids `dp` and `combinatorics` kept, both
  `solutions.md` headings unchanged so the Solutions tab still pairs them.
- The robot framing is gone: the statement counts monotone cell paths on a
  grid, which is the whole of the task. The explanations in the examples lean
  on the multiset-of-moves view (RRRDDD) rather than on a walker's choices.
- **Both figures dropped, one instructively.** `example-1.svg` is a 3×7 grid
  drawing — no data in it beyond the dimensions — and `solution-dp-grid.svg`
  is the 3×7 path-count table whose entries are forced by the math. Keeping
  either would have meant keeping the source's `m = 3, n = 7` example, which
  the no-reuse rule forbids; and for any other shape both need redrawing. A
  "dp-table" renderer keyed on (m, n) would be trivial and would serve every
  grid-DP bundle in the bank — worth queuing for phase 2 alongside the
  number-line renderer noted at 0056.
- Kinship: no `unique-paths-ii` exists in this 838-bundle bank, so
  "Count Grid Paths" has no near-twin to stay recognizably related to; the
  title follows the `countGridIslands` precedent from wave 1 instead.
