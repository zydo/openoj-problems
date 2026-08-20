## 77 — Course Schedule

- New id / title / slug: 77 / Course Feasibility / `course-feasibility`
- Old → new API: `canFinish` → `coursesFeasible` (go `coursesFeasible`, rust `courses_feasible`, ts `coursesFeasible`); parameter `numCourses` → `courseCount`, `prerequisites` kept
- Core algorithm / difficulty: loop detection on the prerequisite graph — Kahn's peel and a three-state walk / H3 (unchanged)
- Statement rewritten from spec: yes — courses are a programme with numbered courses and ordering rules; a loop is described as courses "each waiting on another", not as a graph cycle, until the hints introduce the vocabulary
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `5, [[1,0],[2,0],[3,1],[4,3]] → true` (branch then chain), `4, [[1,0],[2,1],[3,2],[1,3]] → false` (three-course loop plus a feeder), `3, [] → true` (no rules)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Variants: `kahn`, `dfs_cycle` kept as variant ids (decision 4); guide headings `## kahn` / `## dfs_cycle` unchanged so the section matcher still resolves them
- Gates: check ✓ verify ✓ (14/14 variant files, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `course`; sibling `0078_course-order` follows.** Framing fixed
  here: the programme lists `courseCount` courses numbered `0` to
  `courseCount - 1`; each entry `[a, b]` is an ordering rule, restated as an
  arrow `b -> a`; the failure mode is a **loop** of courses each waiting on
  another. `0210` reuses this vocabulary verbatim and asks for the sequence.
- The course scenario is kept rather than abstracted away — topological
  ordering over prerequisites genuinely *is* course scheduling, which is what
  `ADAPT.md` §Statement style allows ("unless the computation genuinely is
  one"). What changed is every sentence and the example data.
- `numCourses → courseCount` is the only parameter rename; it costs nothing at
  the gate (positional binding) but must reach all fourteen solution files and
  the regenerated starters, which the scaffold plus one rust snake-case pass
  covered.
- The `dfs_cycle` guide's stack-overflow note (explicit frames because Python's
  default recursion limit is 1000 and `courseCount` reaches 2000) is
  load-bearing and was rewritten from the code, not the source prose — it is
  the reason the port is iterative at all.
