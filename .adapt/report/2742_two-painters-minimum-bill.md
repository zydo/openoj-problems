## 2742 — Painting the Walls

- New id / title / slug: 2742 / Two Painters, Minimum Bill / `two-painters-minimum-bill`
- Old → new API: `paintWalls` → `leastPaintCost` (go `leastPaintCost`, rust `least_paint_cost`, ts `leastPaintCost`); parameters `cost`, `time` kept (conventional)
- Core algorithm / difficulty: knapsack over coverage — paying wall i covers time[i]+1 walls; dp[j] cheapest selection covering j, descending update / H4 (unchanged)
- Statement rewritten from spec: yes — painter scenario kept (the computation genuinely is a two-painter scheduling task) but restated from the spec; "occupied" → "busy"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,2,8],[2,1,1] → 6` (one long paid job covers all), `[5,2,6,9],[2,2,1,1] → 7` (two paid jobs), `[4,2,7,1,5,3], six 1s → 6` (unit times force half the walls paid)
- Constraints: domain unchanged (1 ≤ n ≤ 500, cost ≤ 10⁶, time ≤ 500), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- One hidden case carries ~500-element arrays; copying hidden data untouched
  keeps that intact.
