## 36 — Triangle

- New id / title / slug: 36 / Cheapest Pyramid Path / `cheapest-pyramid-path`
- Old → new API: `minimumTotal` → `cheapestPath` (go `cheapestPath`, rust `cheapest_path`, ts `cheapestPath`); parameter `triangle` → `rows`
- Core algorithm / difficulty: rolling-row DP, bottom-up and top-down / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — the dp figure draws a 4-row pyramid, and example 1 keeps 4 rows of lengths 1,2,3,4)
  - `[[7],[-2,9],[3,-5,4],[6,2,-1,8]]` → -1 (negatives, path through the middle), `[[3],[8,1]]` → 4 (two descents), `[[-4]]` → -4 (single row)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-triangle-dp.svg` — all 20 value nodes across both pyramids, the row-arithmetic caption, the path caption, and the path-highlight box moved one column right)
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **The word "triangle" could not stay anywhere.** The source's slug is
  `triangle` and its title is `Triangle`; once the title is renamed, the stale
  gate treats both spellings as stale identifiers — capital-T "Triangle"
  (distinctive) anywhere in prose, and lowercase `"triangle"` as an exact JSON
  value, which is exactly what the parameter name is. So the parameter became
  `rows` and the whole bundle speaks of a pyramid. Lesson: when the source
  title is a single common noun, that noun is burned for the adapted bundle's
  title, prose and parameter names alike.
- The top-down guide's worked numbers were recomputed for the new example
  (`best` last row `14, 2, -1, 28`, min `-1`) rather than trusted from the
  source's walk-through.
- Multi-solution bundle: variant ids `bottom_up` and `top_down` kept, headings
  unchanged.
- Figure edit went beyond labels in one place: the cheapest-path highlight on
  the bottom row moved from column 1 to column 2 (one `x` attribute). Same
  drawn structure, so it still counts as a label edit, not a redraw.
