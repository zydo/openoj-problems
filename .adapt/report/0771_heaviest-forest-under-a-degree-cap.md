## 771 — Maximize Sum of Weights after Edge Removals

- New id / title / slug: 771 / Heaviest Forest Under a Degree Cap / `heaviest-forest-under-a-degree-cap`
- Old → new API: `maximizeSumOfWeights` → `heaviestForest` (go `heaviestForest`, rust `heaviest_forest`, ts `heaviestForest`); parameters `edges`, `k` kept
- Core algorithm / difficulty: rooted tree DP with keep/drop values per child edge, greedy top gains under per-node budgets k and k-1, iterative postorder / H4 (unchanged)
- Statement rewritten from spec: yes (delete-until-degree-fits framing; note `n` never appears as an input — it is implied by the edge list, restated that way)
- Examples newly constructed: yes (structure-preserving: yes for the figure)
  - `[[0,1,3],[0,2,1],[2,3,9],[2,4,5]] k=2` → 17 (same drawn tree as the source figure: root 0, children 1 and 2, node 2 fanning to 3 and 4, cheapest edge at the over-degree node deleted), path `[[0,1,6],[1,2,8],[2,3,4]] k=2` → 18 (cap never binds), star `[[0,1,2],[0,2,9],[0,3,4],[0,4,7]] k=2` → 16 (keep the two heaviest)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `example-1.svg` label-edited (weights 4/2/12/6 → 3/1/9/5, caption recomputed and reworded, node ids and geometry untouched)
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Label-editing an SVG by blanket `s/>2</>1</` clobbers node-id texts
  that happen to equal a weight (caught on the first try here). Match on
  the full `<text x=... y=...>` prefix, not on the bare digit.
- The statement alt text and the SVG caption were both reworded from
  scratch — per wave-f-05's lesson, alt text counts as prose to the
  shingler.
