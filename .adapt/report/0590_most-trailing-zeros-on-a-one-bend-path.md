## 590 — Maximum Trailing Zeros in a Cornered Path

- New id / title / slug: 590 / Most Trailing Zeros on a One-Bend Path / `most-trailing-zeros-on-a-one-bend-path`
- Old → new API: `maxTrailingZeros` → `mostTrailingZeros` (go `mostTrailingZeros`, rust `most_trailing_zeros`, ts `mostTrailingZeros`); parameter `grid` kept
- Core algorithm / difficulty: per-cell v2/v5 factorization, row+column prefix sums of both counts, every cell as bend with four arm pairings / H4 (unchanged)
- Statement rewritten from spec: yes ("cornered path" renamed "one-bend path" and defined from scratch)
- Examples newly constructed: yes (structure-preserving: yes)
  - same 5x5 shape and same highlighted bend, new values `[3,7,25,11,13]…` → 4 (whole grid holds exactly four 5-factors; path collects all), 3x3 with no multiple of 5 → 0, single row `[5,2,4,25]` → 3 (no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — all 75 cell texts across the three grid copies, captions and comments reworded to "one-bend path"; example-2 grid relabeled
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The example grid repeats three times inside one SVG (valid path + two
  counterexamples); a per-line label index silently rewrites every row to row
  0's values. Use a global counter across all text lines and assert the total
  (75 here) before writing.
- Choosing off-path cells coprime to 10 pins the expected value provably
  (path collects every 5-factor in the grid), so the figure's "maximum"
  caption stays honest without brute force.
- check.py's static tier currently fails 18 checks in other agents' bundles
  (0203_count-matrix-components, 0773_fewest-tile-slides, 0881_fewest-lift-trips,
  1000_cheapest-sequence-collapse); none touch this chunk's keys.
