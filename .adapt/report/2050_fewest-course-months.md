## 2050 — Parallel Courses III

- New id / title / slug: 2050 / Fewest Course Months / `fewest-course-months`
- Old → new API: `minimumTime` → `fewestCourseMonths` (go `fewestCourseMonths`, rust `fewest_course_months`, ts `fewestCourseMonths`); parameter `relations` → `precedence` (matches the 1136/1494 family convention); `n`, `time` kept
- Core algorithm / difficulty: longest weighted chain over the prerequisite DAG via Kahn's order / H3 (unchanged)
- Statement rewritten from spec: yes — title follows the family pattern (Fewest Course Rounds / Fewest Capped Course Rounds / Fewest Course Months)
- Examples newly constructed: yes (structure-preserving: yes)
  - both figures kept their nodes and arrow geometry; course labels were permuted so no source example pair survives (`[[3,1],[2,1]]`, `[[5,1],[4,1],[3,1],[3,2],[2,1]]`) and only the durations changed
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — circle labels, duration captions, and the comment line; arrow endpoints untouched because the label permutation maps every drawn edge onto a new edge with the same direction
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First draft reused the source's figure alt-text sentence shapes ("X and
  Y both lead into course Z"), which alone pushed the overlap gate to 9%.
  Alt text counts as statement prose; write it from scratch.
- Keeping a drawn graph structure while avoiding stale example pairs is a
  label-permutation puzzle: the permutation must leave no edge pair of the
  source example intact (a swap of two labels usually fails; a 5-cycle
  worked here).
