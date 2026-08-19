## 2355 — Maximum Number of Books You Can Take

- New id / title / slug: 2355 / Maximum Books With Strictly Rising Takes / `maximum-books-with-strictly-rising-takes`
- Old → new API: `maximumBooks` → `maxRisingTake` (go `maxRisingTake`, rust `max_rising_take`, ts `maxRisingTake`)
- Core algorithm / difficulty: DP on strictly rising runs spliced at barrier shelves, nearest barrier via monotonic stack, arithmetic-sum totals / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[4,2,6,9] → 18`, `[3,0,5,6] → 11` (empty shelf), `[5,5,5] → 12` (identical shelves)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — the solution figure's bar heights and highlighted takes encode the source example structurally; no renderer for the family
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
