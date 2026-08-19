## 3413 — Maximum Coins From K Consecutive Bags

- New id / title / slug: 3413 / Most Value in K Consecutive Cells / `most-value-in-k-consecutive-cells`
- Old → new API: `maximumCoins` → `mostValueInKCells` (go `mostValueInKCells`, rust `most_value_in_k_cells`, ts `mostValueInKCells`); parameter `coins` → `runs` (`k` kept)
- Core algorithm / difficulty: sort runs, prefix-sum run totals, evaluate 2n candidate blocks (left-aligned at `li`, right-aligned at `ri`) with two binary searches each / H3 (unchanged)
- Statement rewritten from spec: yes (infinite cell row, valued non-overlapping runs, k-cell block restated from scratch; the coin/bag scenario replaced by abstract value-in-cells)
- Examples newly constructed: yes (structure-preserving: yes — example 1 keeps three runs over coordinates 1..10 with k = 4 so the figure regenerates on the source layout)
  - `[[6,7,5],[1,4,3],[9,10,2]], k=4` → 13 (winner bridges a gap; right-alignment beats left), `[[2,9,4]], k=3` → 12, `[[3,4,6],[10,12,1]], k=5` → 12 (block longer than any run)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `solution-segment-windows.svg` **regenerated** from the source's documented mapping (`coord -> x = 60 + 44*coord`, bar height `20*ci`, bars bottom at y = 170); new example 1 drawn, alt text updated
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values from `.localonly/wave-g-02/cases_3413.py`: source algorithm
  cross-checked against an all-positions scan on every compact case
  (coordinate span ≤ 2000); wide cases checked against the source's own
  expected values only, since a position scan is infeasible there.
- The figure family had no renderer in `scripts/adapt_figures.py`, but the
  SVG carries its coordinate mapping in a comment, so the drawing was
  re-emitted by hand from the same formulas (renderer logic inline in the
  report, not worth a family entry for one figure). Rendered via
  `qlmanage` and eyeballed; every coordinate also re-derived arithmetically
  against the mapping.
- Terminology sweep beyond the API renames: "coins" in Go/Java/Python
  comments became "value", so no coin/bag wording survives.
