## 0084 — Largest Rectangle in Histogram

- New id / title / slug: 84 / Largest Skyline Rectangle / `largest-skyline-rectangle`
- Old → new API: `largestRectangleArea` → `largestSkylineRectangle` (go `largestSkylineRectangle`, rust `largest_skyline_rectangle`, ts `largestSkylineRectangle`); parameter `heights` kept
- Core algorithm / difficulty: monotonic stack of rising column indices, sentinel flush / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[3,1,4,2,2,5]` → 8 (winner is an interior height-2 spread), `[7]` → 7 (single column), `[4,4,4]` → 12 (equal run)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — all three (`example-1.svg`, `example-2.svg`, `solution-monotonic-stack.svg`). Bar heights *are* the geometry, the family has no renderer, and the solution figure additionally walks the old example's pop sequence.
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓

### Notes — the figure-drop judgement for phase 2

This is the batch's designated figure-DROP exemplar, so a real call on
whether a redraw would earn its keep:

- **The two example figures genuinely helped in the source.** "Largest
  rectangle under a skyline" is a geometric idea; seeing the winning block
  shaded inside the bars saves the reader a minute of squinting at digit
  lists, and no amount of prose replaces that. My Example 1 explanation had
  to work hard ("at height 5 or 4 only a single column qualifies…") to do
  verbally what the source did with a shaded rect. **Verdict: redraw is
  worth it for example 1.** A small renderer is trivial — six rects on an
  axis plus a highlight, the same visual language `adapt_figures.py` already
  uses for `container-lines` — and could be shared with 0085's row-histogram
  figure and 0120/0174's grid work if those also drop.
- Example 2's figure (two bars) added little; a sentence covers it.
- The solution figure (stack timeline + pop arrows) is the most informative
  of the three but also the most coupled to one example's pop sequence.
  If a renderer lands, a *generic* stack-timeline diagram (arbitrary short
  array) would outlast any per-example redraw.
- Recommendation to phase 2: redraw example 1 only, via a `histogram-bars`
  renderer next to `container-lines`; drop the rest for good.
