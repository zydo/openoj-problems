## 205 — Brick Wall

- New id / title / slug: 205 / Fewest Bricks Split / `fewest-bricks-split`
- Old → new API: `leastBricks` → `fewestBricksSplit` (go `fewestBricksSplit`, rust `fewest_bricks_split`, ts `fewestBricksSplit`); parameter `wall` kept — it is the conventional name for the input and reads as domain vocabulary, not as the source's API
- Core algorithm / difficulty: complement counting over per-row prefix sums in a hash map / H2 (unchanged)
- Statement rewritten from spec: yes — the cut is described as landing on a joint rather than "the edge of a brick", and the outer-face exclusion is stated as a property of the cut instead of as an aside
- Examples newly constructed: yes (structure-preserving: n-a — a wall figure's geometry *is* its data, so the drawing was rebuilt instead)
  - 5 rows of total width 8 → 2; a wall where one offset is a joint in every row → 0; four solid rows → 4 (the empty-map degenerate case)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — both `example-1.svg` and the solution figure redrawn from the new wall by a throwaway generator; the solution figure was renamed off the source slug (`solution-brick-wall.svg` → `solution-fewest-bricks-split.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n-a compatibility ✓ stale ✓ overlap ✓

### Notes

- **A brick-wall figure is trivially regenerable even though its geometry encodes
  the data.** Every rect is `x = unit * prefix`, `width = unit * brick`, so a
  20-line script emits the whole picture for any wall. The "geometry encodes the
  data → drop it" rule is about *shapes you cannot compute* (hand-placed trees,
  free-form diagrams); a figure that is a pure function of the example data is
  worth regenerating, and the script costs less than the report paragraph
  explaining why the figure is missing.
- The regenerated figure sizes its canvas to the footnote text
  (`width = max(wall width, x0 + 6.7 * chars)`). The live 0053 figure had the
  same footnote-overflow defect, so it is a general hazard: SVGs in this bank
  are hand-sized and text does not wrap.
- The stale gate reads *file bodies*, not file names — but a solution figure
  named after the source slug will still fail it, because `solutions.md` has to
  link to that name. Rename the figure with the slug.
