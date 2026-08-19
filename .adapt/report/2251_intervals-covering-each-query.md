## 2251 — Number of Flowers in Full Bloom

- New id / title / slug: 2251 / Intervals Covering Each Query / `intervals-covering-each-query`
- Old → new API: `fullBloomFlowers` → `countCovering` (go `countCovering`, rust `count_covering`, ts `countCovering`); parameters `flowers` → `intervals`, `people` → `queries`
- Core algorithm / difficulty: sort starts and ends separately; per query `bisect_right(starts, t) - bisect_left(ends, t)` / H2 (unchanged)
- Statement rewritten from spec: yes (flower scenario dropped for windows; inclusive-both-ends phrasing kept exact)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[2,7],[4,9],[10,13],[5,14]] queries [3,6,9,12]` → `[1,3,2,2]`, `[[1,8],[3,3]] queries [3,2,8]` → `[2,1,1]` (unit window + closing instant), `[[6,12]] queries [5,6,12,13]` → `[0,1,1,0]` (boundary semantics)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — all three (two examples + solution timeline) encode the intervals as flower-stack columns / bar geometry across a time axis, and no renderer exists for the family (`adapt_figures.py` has only container-lines and kadane-walk). Phase 2 candidates.
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- A timeline figure pins the count-per-moment profile; any genuinely new
  example changes the profile, which changes the stacks/bars — geometry, not
  labels. Dropped rather than redrawn.
- Boundary-heavy third example (`[5,6,12,13]` around `[6,12]`) deliberately
  covers the inclusive-open/inclusive-close asymmetry that the two bisects
  encode — worth keeping when someone redraws a timeline.
- Renaming `people` → `queries` collided with nothing anywhere; `fullBloom`
  appears in no comment after the sweep.
