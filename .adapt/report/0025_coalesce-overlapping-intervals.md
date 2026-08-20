## 25 — Merge Intervals

- New id / title / slug: 25 / Coalesce Overlapping Intervals / `coalesce-overlapping-intervals`
- Old → new API: `merge` → `coalesce` (go `coalesce`, rust `coalesce`, ts `coalesce`)
- Core algorithm / difficulty: sort by start, sweep carrying one span / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[[9,12],[3,5],[4,7]]` → `[[3,7],[9,12]]` (unsorted input, one join), `[[2,6],[6,9]]` → `[[2,9]]` (touching), `[[0,10],[3,4],[8,9]]` → `[[0,10]]` (swallowed ranges)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`solution-merge-sweep.svg`)
- Gates: check ✓ (full adapted tree, 88 bundles, 0 failures) verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The method is the single word `coalesce` — same all-languages-lowercase
  shape as the source's `merge`, which sidesteps the compatibility-gate
  entrypoint trap documented at 0033 (source `method` == rust entrypoint
  means a camelCase new name breaks the rust compatibility run).
- Figure dropped for the standard reason: the number-line drawing positions
  and widths every bar at `24px` per unit against labelled ticks 1..19, so
  the geometry *is* the interval data. A renderer for this family would be
  cheap (bars are a pure function of the values) and would also serve
  0056-style figures elsewhere in the bank — phase 2 candidate.
- The statement now defines the join rule ("one starts at or before the other
  ends") in one sentence and puts the closed-range reading ("covers every
  point from its start to its end inclusive") up front — the source left
  closedness implicit and revealed it only through example 2.
