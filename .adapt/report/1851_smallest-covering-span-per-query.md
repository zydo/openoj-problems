## 1851 — Minimum Interval to Include Each Query

- New id / title / slug: 1851 / Smallest Covering Span per Query / `smallest-covering-span-per-query`
- Old → new API: `minInterval` → `smallestCoveringSpan` (go `smallestCoveringSpan`, rust `smallest_covering_span`, ts `smallestCoveringSpan`); parameters `intervals`, `queries` kept (conventional)
- Core algorithm / difficulty: queries swept ascending, live intervals in a length-keyed min-heap with lazy deletion / H3 (unchanged)
- Statement rewritten from spec: yes — "size of interval" restated as "length = number of integers covered"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - single-point winner, nested choice, sole coverage, and a miss between intervals; then right-nested winner, mid-sweep, endpoint-of-long, left-tail-of-long
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 12/12 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None beyond the routine.
