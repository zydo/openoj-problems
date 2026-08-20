## 364 — Parallel Courses

- New id / title / slug: 364 / Fewest Course Rounds / `fewest-course-rounds`
- Old → new API: `minimumSemesters` → `fewestCourseRounds` (go `fewestCourseRounds`, rust `fewest_course_rounds`, ts `fewestCourseRounds`); parameter `relations` → `precedence`
- Core algorithm / difficulty: layered topological sort (Kahn), longest chain in a DAG / H3 (unchanged)
- Statement rewritten from spec: yes — "rounds" replaces the semester framing throughout, including in the reference solutions' comments and their `semesters` counter
- Examples newly constructed: yes (structure-preserving: **yes** for both figures)
  - `n=3, [[2,1],[3,1]] → 2`; `n=3, [[1,3],[3,2],[2,1]] → -1`; `n=6, [[1,2],[1,3],[2,4],[3,4],[4,5],[4,6]] → 4` (third example, no figure, shows a widening catalogue that still costs only its longest chain)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — figure 1 kept its two round bands and three nodes with the circle labels permuted to the new data; figure 2 kept its triangle and had each arrow reversed by swapping the two endpoints of its `<line>` (marker stays on the new end), which turns the cycle around without moving a single node
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Parameter collision check paid off.** `prerequisites` would match the
  adapted-bank convention (0207/0210/1462 all use it), but the 1136 and 2050
  source solutions declare a local `prerequisites`, which is exactly the trap
  the protocol warns about. `precedence` appears in no source solution of any
  of the three parallel-courses bundles, so the family uses it instead.
- A three-node deadlock has essentially one shape, so the "impossible" figure
  cannot be given genuinely new geometry. Reversing the ring is the honest
  minimum: new literal, new footnote, new alt text, same drawing.
- Family: this is the first of `parallel-courses` I/II/III, none of which had a
  pinned title in `families.json`. Titles chosen together — see the 1494 and
  2050 reports.
