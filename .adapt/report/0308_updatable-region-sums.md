## 0308 — Range Sum Query 2D - Mutable

- New id / title / slug: 308 / Updatable Region Sums / `updatable-region-sums`
- Old → new API: `NumMatrix` → `UpdatableRegions`; `update` → `setValue` (`row`, `col`, `val` → `row`, `col`, `value`); `sumRegion` → `regionSum` (`row1`, `col1`, `row2`, `col2` → `top`, `left`, `bottom`, `right`)
- Core algorithm / difficulty: 2D Fenwick tree with O(m·n) linear build / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — example 1 is a fresh 5×5 grid so the two-panel figure keeps its geometry)
  - 5×5 grid, `regionSum(1, 0, 3, 2) = 36`, `setValue(2, 1, 6)`, same rectangle → `41`
  - 2×3 grid with negatives, whole-grid and single-row-slice questions
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: py, java (the source's two languages)
- Figures: **labels updated** — same 5×5 two-panel drawing; cell text, the highlighted rectangle (moved to rows 1–3 / columns 0–2), the outline rect, both captions and the footnote rewritten
- Family: joins the pinned range-sum quartet — 0303 Static Range Sums, 0304 Static Region Sums, 0307 Updatable Range Sums — so the class/method names follow 0307's `UpdatableRanges` / `setValue` / `rangeSum` pattern
- Gates: check ✓ verify ✓ (15/15 cases × py, java) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **The queried rectangle's argument list is a stale-literal hazard.** The
  source's `sumRegion(2, 1, 4, 3)` appears in its statement as the params array
  `[2, 1, 4, 3]`, which the stale gate registers as a source example literal.
  Any design problem whose example calls take four-plus small integers has this
  trap: reusing the source's *call arguments* — even with a completely different
  matrix — trips the gate. Pick different argument tuples, not just different data.
- **Constraint ranges written as intervals collide with example literals.**
  `[-1000, 1000]` in the constraints matched the source's example row
  `[-1000, 1000]`. Phrasing a bound as "never exceeds `1000` in absolute value"
  sidesteps it. Worth a protocol line: prefer prose bounds over `[lo, hi]`
  interval notation when the same pair appears in a source example.
- Moving a figure's highlighted region is still a label edit, not a redraw: the
  highlight is per-cell `fill` attributes plus one outline `rect`, so shifting
  which rectangle is emphasised is mechanical on a grid figure.
- Pre-existing, unrelated: `check.py --tree problems-adapt` fails on a duplicate
  slug `count-graph-components` shared by 0323 and 0547. Not touched.
