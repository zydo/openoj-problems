## 176 — Minimum Number of Arrows to Burst Balloons

- New id / title / slug: 176 / Fewest Positions To Cover Intervals / `fewest-positions-to-cover-intervals`
- Old → new API: `findMinArrowShots` → `minCoveringPositions`
  (go `minCoveringPositions`, rust `min_covering_positions`, ts `minCoveringPositions`);
  parameter `points` → `intervals`
- Core algorithm / difficulty: greedy, sort by right endpoint / H2 (unchanged)
- Statement rewritten from spec: yes — the balloon story dropped for plain
  interval-cover language; endpoints-inclusive semantics stated explicitly
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[[3,9],[1,4],[6,11],[2,5]] → 2` (clustered + one stranger), `[[2,5],[7,9],[12,14],[18,20]] → 4` (all disjoint), `[[-6,-2],[-3,1],[0,4]] → 2` (negative coordinates, touching endpoints)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — `solution-arrows.svg` drew the source example as
  axis geometry (bar x/width encode the interval endpoints at 36 px/unit),
  so a label edit cannot carry new data and no renderer exists for the
  family. Candidate for a phase-2 redraw.
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate checks source parameter names with plain word boundaries in
  JSON, so a slug containing the *old* parameter as a bare word trips it —
  first draft used "…-points-to-cover-…" while renaming `points` →
  `intervals`. Renamed the whole identity to "positions" instead; if a
  renamed parameter is a common word, keep that word out of the new slug.
- Solution internals were renamed past the API (`arrows` → `chosen`,
  `lastArrow` → `lastPosition`): ADAPT's "update comments naming old
  terminology" extends naturally to locals that carry the story's
  vocabulary.
