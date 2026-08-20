## 7 — Container With Most Water

- New id / title / slug: 7 / Largest Water Container / `largest-water-container`
- Old → new API: `maxArea` → `largestWaterArea` (go `largestWaterArea`, rust `largest_water_area`, ts `largestWaterArea`); parameter `height` → `heights`
- Core algorithm / difficulty: two pointers from the ends, always advancing the shorter wall / H2 (unchanged)
- Statement rewritten from spec: yes — and it now states the volume formula outright, which the source left implicit
- Examples newly constructed: yes (structure-preserving: **n/a — regenerated instead**)
  - `[3,7,2,9,4,6,1,8,5] → 42` (the tallest wall is in no optimal pair), `[3,3] → 3`, `[1,2,4,3] → 4` (widest pair loses)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** from the new data by `scripts/adapt_figures.py container-lines`
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes for the pilot review

- **ADAPT.md's figure rule needs a third branch.** It splits figures into
  "labels editable" and "geometry encodes the data — drop it". This one is
  geometry-encoded but a *deterministic function* of the example, so it can be
  redrawn rather than dropped. `scripts/adapt_figures.py` does it, and was
  validated by re-rendering the source's own data and comparing against the
  original image before being used on the new data.
- The renderer had to be taught to place the area label where no line crosses
  it; the geometric centre collided with a wall. Generated figures still need
  looking at.
- **The stale gate needed refining here.** Parameter names are frequently
  ordinary English (`height`) and collide with SVG's attribute vocabulary
  (`height=`, `width=`). It now checks parameter names only where they are
  identifiers: inside backticks in Markdown, word-bounded in source files, and
  never in SVG. Names (title, slug, method, class, oracle) are still checked
  everywhere.
- Choosing the example deliberately made the problem teach better than the
  source: the tallest wall belongs to no optimal pair, which is exactly the
  intuition the two-pointer argument overturns.
