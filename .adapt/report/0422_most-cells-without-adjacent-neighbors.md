## 422 — Maximum Students Taking Exam

- New id / title / slug: 422 / Most Cells Without Adjacent Neighbors / `most-cells-without-adjacent-neighbors`
- Old → new API: `maxStudents` → `maxCells` (go `maxCells`, rust `max_cells`, ts `maxCells`); `seats` → `cells`
- Core algorithm / difficulty: row-by-row bitmask DP, per-row admissible masks + conflict with previous row / H4 (unchanged)
- Statement rewritten from spec: yes (classroom/cheating → usable/blocked cells with a horizontal + diagonal restriction)
- Examples newly constructed: yes (structure-preserving: yes — figure kept the 3x6 cell grid, legend, and person glyphs; fills/labels re-emitted)
  - 3x6 answer 4 (middle row's lone usable cell barred diagonally), 4x2 answer 3 (vertical stacking is legal), 5x4 answer 8 (14 usable)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — example-1.svg re-emitted from the recovered layout rule (56 px cells from (36,28), legend at x=404) for the new grid and pick set; pattern re-parsed back out of the SVG and verified
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The `#`/`.` two-symbol alphabet means the stale gate's example-literal
  scan exempts this problem entirely — no source grid can be flagged — so
  example freshness was enforced by hand (rows chosen to differ from every
  source row).
- Self-inflicted failure worth noting for the next 800: with a
  single-parameter invocation the public case `input` must still be
  **[grid]**, not the bare grid — an unwrapped grid made the harness read
  three arguments ("Expected 1 arguments, received 3"), which first looked
  like a compatibility-gate bug.
- Example answers cross-checked with an independent recursive MIS search.
