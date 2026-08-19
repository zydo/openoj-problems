## 3281 — Maximize Score of Numbers in Ranges

- New id / title / slug: 3281 / Widest Gap Choosing One Point Per Interval / `widest-gap-choosing-one-point-per-interval`
- Old → new API: `maxPossibleScore` → `widestGap` (go `widestGap`, rust `widest_gap`, ts `widestGap`); parameters `start`, `d` kept
- Core algorithm / difficulty: binary search on the tightest distance, greedy leftmost feasibility sweep on intervals sorted by left endpoint / H3 (unchanged)
- Statement rewritten from spec: yes (score-of-chosen-integers reframed as spread of the selection)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `start=[1,4,9], d=3` → 5 (chained intervals pushed right), `start=[0,5,5], d=0` → 0 (zero-width collision), `start=[10,10], d=8` → 8 (twin intervals, one pick per end)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The three examples deliberately cover the three regimes the guide calls
  out: chained pushes, `d = 0` fixed points with a collision, and twin
  intervals whose answer is exactly `d`.
