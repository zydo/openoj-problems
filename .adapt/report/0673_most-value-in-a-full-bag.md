## 673 — Maximum Price to Fill a Bag

- New id / title / slug: 673 / Most Value in a Full Bag / `most-value-in-a-full-bag`
- Old → new API: `maxPrice` → `mostValue` (go `mostValue`, rust `most_value`, ts `mostValue`); parameters `items`, `capacity` kept
- Core algorithm / difficulty: fractional knapsack — sort by value per unit weight, pour greedily, cut the last object; `-1` when total weight < capacity / H2 (unchanged)
- Statement rewritten from spec: yes (divisibility framed as cutting an object into proportional pieces)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[3,2],[9,1],[30,4]] capacity 6` → `40.5` (split on the last object), `[[20,5],[12,3],[7,2]] capacity 10` → `39.0` (exact total, everything taken), `[[40,4],[15,3]] capacity 9` → `-1.0` (too light to fill)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `comparison` is `close`, so example outputs use the house `.00000` float
  format (as in `0004_combined-median`).
- The only floating-point step is the final cut; the public-case script
  cross-checks the greedy with random feasible perturbations (exchange
  argument) and the `-1` feasibility rule.
