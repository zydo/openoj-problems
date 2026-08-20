## 354 — Path With Maximum Minimum Value

- New id / title / slug: 354 / Widest Grid Path / `widest-grid-path`
- Old → new API: `maximumMinimumPath` → `widestGridPath` (go `widestGridPath`, rust `widest_grid_path`, ts `widestGridPath`); parameter `grid` kept
- Core algorithm / difficulty: max-heap best-first search, running-minimum bottleneck / H3 (unchanged)
- Statement rewritten from spec: yes ("score of a path" reframed as the walk's width — the standard bottleneck-path vocabulary)
- Examples newly constructed: yes (structure-preserving: yes — all three example figures keep their grid dimensions and drawn routes, values only)
  - `[[8,6,7],[2,3,9],[9,4,9]]` → 6; `[[7,7,4,7,7,7],[4,7,7,7,4,7]]` → 7; 6x5 long-way-round grid → 3
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (all four — `example-1/2/3.svg` and `solution-best-first-grid.svg`, which walks example 1's data; route geometry untouched)
- Gates: check ✓ (bundle shape; central tree run pending) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Figure alt text counts as prose for the overlap gate.** My first draft
  reused the source's alt-text phrasing ("a 3 x 3 grid with the top row
  and right column tinted…") and the gate flagged 24% — the fenced examples
  were clean, the markdown image lines were not. Reword alt texts like any
  other sentence.
- Value swaps in figure SVGs were done by replacing pure-digit `<text>`
  nodes in row-major order (captions/comments are not pure-digit, so a
  `\d+`-only matcher cannot touch them); assert on the substitution count
  so a mis-sized value list fails loudly instead of silently skewing cells.
- The example-3 redesign keeps the source's property that the start cell
  itself is the bottleneck (3), which the figure caption leans on.
