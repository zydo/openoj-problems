## 754 — Minimum Cost for Cutting Cake I

- New id / title / slug: 754 / Cheapest Cuts to Unit Cells / `cheapest-cuts-to-unit-cells`
- Old → new API: `minimumCost` → `cheapestTotalCost` (go `cheapestTotalCost`, rust `cheapest_total_cost`, ts `cheapestTotalCost`); parameters `m`, `n`, `horizontalCut`, `verticalCut` kept
- Core algorithm / difficulty: two-pointer merge over both cut lists sorted descending, price × (opposite cuts made + 1), exchange-argument optimality / H3 (unchanged)
- Statement rewritten from spec: yes (cake framing kept — the task genuinely is cutting a priced grid)
- Examples newly constructed: yes (structure-preserving: yes — both figures keep the 3x2 geometry, values only)
  - `m=3,n=2,h=[4,2],v=[6]` → 18 (vertical first, horizontals doubled), `m=2,n=2,h=[3],v=[8]` → 14 (vertical first on a 2x2), `m=1,n=4,h=[],v=[5,2,1]` → 8 (no multiplier ever applies)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: both `example-1.svg` and `solution-cut-order.svg` labels updated
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- No sibling 3224 ("...Cake II") exists in this bank, so no family-title
  coordination was needed.
- The source `solution-cut-order.svg` panel 2 labeled the top horizontal line
  `H1` and the bottom `H0`, contradicting panel 1 (where H0 is the top line).
  The regenerated labels are consistent with panel 1 (H0 top); with the new
  data H0 is also the pricier line, so the "expensive first" reading is
  unchanged.
- First overlap run failed at 7% entirely because the figure alt text copied
  the source alt's sentence shape with new numbers — the gate caught exactly
  what it is for. Alt texts need as fresh a rewrite as the prose.
