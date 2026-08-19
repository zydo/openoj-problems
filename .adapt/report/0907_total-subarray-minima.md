## 0907 — Sum of Subarray Minimums

- New id / title / slug: 907 / Total Subarray Minima / `total-subarray-minima`
- Old → new API: `sumSubarrayMins` → `totalSubarrayMinima` (go
  `totalSubarrayMinima`, rust `total_subarray_minima`, ts `totalSubarrayMinima`);
  parameter `arr` → `nums`
- Core algorithm / difficulty: per-entry dominance span via two monotonic-stack
  passes / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same four-element
  shape the solution figure draws)
  - `[4,2,5,3]` → 27 with every block listed, `[7,7,4,9,4]` → 74 exercising the
    tie between equal minima
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — `figures/solution-min-spans.svg` redrawn for
  `[4,2,5,3]`. The drawing is a deterministic function of the array (boxes on a
  84px pitch, one bracket per index spanning `left[i]+1 .. right[i]`), so the
  layout formulas were recovered from the original and re-run on the new data;
  the render was checked visually.
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Choosing a four-element first example was deliberate: it keeps the figure's
  drawn structure, so the picture survives the adaptation instead of being
  dropped. Any bundle whose figure is a regular layout over the example data can
  be handled the same way without a renderer in `adapt_figures.py` — derive the
  coordinate formula from the existing SVG, then re-emit it.
- The title follows the sibling convention already in the tree
  (`2104_total-subarray-spread`).
