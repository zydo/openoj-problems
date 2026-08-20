## 459 — Parallel Courses II

- New id / title / slug: 459 / Fewest Capped Course Rounds / `fewest-capped-course-rounds`
- Old → new API: `minNumberOfSemesters` → `fewestCappedCourseRounds` (go `fewestCappedCourseRounds`, rust `fewest_capped_course_rounds`, ts `fewestCappedCourseRounds`); parameter `relations` → `precedence`
- Core algorithm / difficulty: bitmask DP over finished sets, `k`-subset transitions / H4 (unchanged)
- Statement rewritten from spec: yes — the "at most k per round" cap is stated as the branching rule it is, and the guarantee that a schedule exists is stated once rather than as a testcase remark
- Examples newly constructed: yes (structure-preserving: **yes** for both figures)
  - `n=4, [[1,4],[3,4],[4,2]], k=3 → 3` (cap deliberately slack, so the chain is what costs); `n=5, [[1,3],[2,3],[5,3],[3,4]], k=2 → 4` (cap binding, one free course spills into its own round); `n=6, [[1,6],[2,6],[3,6]], k=2 → 3` (no figure — the cap alone forces the floor)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — both schedule diagrams kept their boxes, arrows and node positions; only the circle labels, the band captions (`Semester n` → `Round n`), the `k` annotation and the caption line changed
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- A round-schedule figure pins each course to a band, so the only freedom a
  new example has is *which* label sits in which band — the drawing is an
  isomorphism class, not a data set. What can be varied honestly is the
  annotation: example 1 now runs with `k = 3` against the same drawn shape,
  which turns it into an illustration of the cap *not* binding, a case the
  source's two examples never showed.
- `semester` was a variable name as well as prose in the source solutions
  (`semesters`, `Semester n` in the figures). The rename to `round` runs
  through comments, locals and figure captions together.
