## 451 — Course Schedule IV

- New id / title / slug: 451 / Course Prerequisite Queries / `course-prerequisite-queries`
- Old → new API: `checkIfPrerequisite` → `coursePrerequisiteQueries` (go `coursePrerequisiteQueries`, rust `course_prerequisite_queries`, ts `coursePrerequisiteQueries`); parameter `numCourses` → `courseCount`
- Core algorithm / difficulty: transitive closure over a DAG by Kahn peeling with per-course bitsets / H2 (unchanged)
- Statement rewritten from spec: yes — it names the transitive rule as a *chain* and states acyclicity as "no course ends up needing itself" rather than as a graph property
- Examples newly constructed: yes (structure-preserving: **yes** — a two-node graph and a three-node graph with the same arrow layout, so both figures needed only label edits)
  - `2, [[0,1]], [[0,1],[1,0]] → [true,false]`, `4, [], [[0,3],[2,1],[3,0]] → [false,false,false]`, `3, [[2,1],[2,0],[0,1]], [[2,1],[1,0],[0,1]] → [true,false,true]`
- Constraints: domain unchanged, presentation rewritten (`10⁴` written as `10^4`, uniqueness and acyclicity stated as prose bullets)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — node texts renumbered, the annotation and caption rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family direction conflict.** The pinned family titles come from
  `0077_course-feasibility` / `0078_course-order`, whose statements read
  `[a, b]` as "*b* before *a*" — LeetCode's convention for Course Schedule I/II.
  This problem's data uses the opposite convention: `[a, b]` means *a* before
  *b*. Hidden cases are untouchable, so the adapted statement must state the
  direction this problem actually uses, even though its siblings say the
  reverse. `courseCount` is still shared with the siblings, which is the part
  of the family kinship that matters.
- **The stale gate catches the Output line, not just the Input line.** The
  first draft's `Output: [false,true]` and `Output: [false,false]` were flagged
  as source example literals — `false`/`true` spell more than two distinct
  characters, so boolean result arrays are "identifying" in a way that
  `[[1,0]]` is not. When a problem returns booleans, the *answer shapes* have
  to differ from the source's too, not only the inputs; the cheapest fix is a
  differently sized query list.
