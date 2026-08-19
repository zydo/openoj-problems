## 2813 — Maximum Elegance of a K-Length Subsequence

- New id / title / slug: 2813 / Best k Picks for Profit and Variety / `best-k-picks-for-profit-and-variety`
- Old → new API: `findMaximumElegance` → `bestPickScore` (go `bestPickScore`, rust `best_pick_score`, ts `bestPickScore`); parameters `items`, `k` kept (conventional)
- Core algorithm / difficulty: sort by profit, take top k, exchange fresh-category leftovers for cheapest duplicate-category victims / H3 (unchanged)
- Statement rewritten from spec: yes — "elegance" → "score" with the formula stated plainly
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[7,2],[8,1],[11,1]], k=2 → 22` (variety beats profit), `[[6,1],[6,1],[3,2],[9,3]], k=3 → 27` (skip a duplicate for a third category), `[[2,1],[5,1],[8,1]], k=3 → 16` (single category, k = n)
- Constraints: domain unchanged, presentation rewritten (category bound phrased against items.length)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None beyond the routine.
