## 1292 — Maximum Side Length of a Square with Sum Less than or Equal to Threshold

- New id / title / slug: 1292 / Largest Square Within a Sum Budget / `largest-square-within-a-sum-budget`
- Old → new API: `maxSideLength` → `largestSquareSide` (go `largestSquareSide`, rust `largest_square_side`, ts `largestSquareSide`); `mat` → `grid`, `threshold` → `budget`
- Core algorithm / difficulty: prefix-sum table + single sweep with a growing best side / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - 3×7 `[[2,3,9,8,9,8,7],[3,2,9,8,9,8,7],[9,9,9,8,9,8,7]]` budget 10 → 2 (2×2 lands exactly on 10); `[[4,4],[4,4]]` budget 3 → 0 (no cell fits); 3×3 of 2s budget 17 → 2 (3×3 misses by one)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `example-1.svg` kept: same 3×7 geometry and top-left 2×2 highlight/outline; 21 value nodes, the sum line, and the caption's "every 3 × 3 sums to 15" claim rewritten for the new data
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The source figure's caption made a claim specific to its repeated-row data
  ("every 3 × 3 square sums to 15"); with varied rows the honest restatement
  is about the *cheapest* 3 × 3 — worth re-deriving, not rewording.
