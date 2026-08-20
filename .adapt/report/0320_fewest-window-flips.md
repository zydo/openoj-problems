## 320 — Minimum Number of K Consecutive Bit Flips

- New id / title / slug: 320 / Fewest Window Flips / `fewest-window-flips`
- Old → new API: `minKBitFlips` → `fewestWindowFlips` (go `fewestWindowFlips`,
  rust `fewest_window_flips`, ts `fewestWindowFlips`); parameters `nums`, `k`
  kept (conventional)
- Core algorithm / difficulty: forced greedy sweep with an XOR difference array
  / H3 (unchanged)
- Statement rewritten from spec: yes — the source's coined term "k-bit flip" is
  replaced by "window flip", defined in the first paragraph rather than in a
  bolded aside
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[1,0,1,1,0], k=1 → 2` (the degenerate window), `[0,1,1,1], k=3 → -1`,
    `[0,1,1,0,1,0,0,0], k=3 → 3` (two windows that overlap, then one flush with
    the right end)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The third example was chosen by brute force over all 8-bit arrays with
  `k = 3`, filtered to answer 3, then hand-picked for a trace that exercises
  both interesting mechanics: two overlapping windows whose expiries cancel,
  and a final window ending exactly on the last index (the `i + k < n` branch
  that skips the expiry write). Picking examples by search rather than by
  invention is cheap here and makes the guide's walkthrough worth printing.
- Watch the impossible example: `[0,1,1,1]` with `k = 3` only fails on the
  *third* forced window, so the explanation has to show two successful flips
  first. A shorter `-1` example would not show why the greedy sweep cannot back
  out.
