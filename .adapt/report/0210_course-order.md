## 0210 — Course Schedule II

- New id / title / slug: 210 / Course Order / `course-order`
- Old → new API: `findOrder` → `courseOrder` (go `courseOrder`, rust `course_order`, ts `courseOrder`); parameter `numCourses` → `courseCount`, `prerequisites` kept
- Core algorithm / difficulty: topological order by Kahn's peel or by reverse finishing order of a three-state walk / H3 (unchanged)
- Statement rewritten from spec: yes — first paragraph identical to `0207_course-feasibility`'s, so the pair reads as one programme; the ask is a sequence, "any sequence that respects the rules is accepted"
- Examples newly constructed: yes (structure-preserving: **yes** for example 2 — four courses in the diamond shape `solution-kahn-peeling.svg` draws)
  - `3, [[2,1],[1,0]] → [0,1,2]` (forced chain), `4, [[2,0],[3,0],[1,2],[1,3]] → [0,2,3,1]` (diamond, two legal orders), `4, [[2,0],[1,2],[3,1],[2,3]] → []` (three-course loop)
- Constraints: domain unchanged, presentation rewritten (including the source's `a_i != b_i`, which `0207` lacks — the two sources genuinely differ)
- Skeletons regenerated: all 7
- Figures: **labels updated** — `solution-kahn-peeling.svg`: four node labels (relabeled 0/2/3/1 so the *shape* is preserved but no number sits where the source put it), four peeling-step captions, the order line, the closing note, and the graph comment. Also corrected one indegree caption: the source figure labels the right middle node "in 2" though its own graph gives it indegree 1.
- Variants: `kahn`, `dfs_cycle` kept as variant ids (decision 4); guide headings unchanged so the section matcher still resolves them
- Gates: check ✓ verify ✓ (14/14 variant files, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `course`, written straight after `0207_course-feasibility`.** The
  description's opening two paragraphs are shared verbatim with the sibling;
  only the final ask differs (decide versus produce). Same hints vocabulary
  (arrows, counts, queue), and the peeling figure is the sibling's algorithm
  made concrete.
- **`comparison` is `sorted` here but `exact` in `0207`** — that is what lets
  the statement promise "any sequence that respects the rules is accepted"
  honestly, and it is why the example may show `[0,2,3,1]` while naming
  `[0,3,2,1]` as equally legal. Worth checking the field before writing that
  sentence, exactly as in `0001`/`0167`.
- **Sequential `str.replace` on figure text can self-collide.** Renaming
  step 3's caption (`queue = [3] → take 3; …`) after having *created* that
  substring in step 3 while renaming step 4 produced a mangled line. The fix
  was one more targeted edit; the lesson is to make each replacement anchored
  (include the `y=` coordinate or the whole line) rather than a bare
  substring, and to re-read the whole figure afterwards. Same class of mistake
  as the over-long header in `0142`.
- The source figure's "in 2" on a node whose indegree is 1 is a live-figure
  defect caught for free by re-deriving the labels from the new example
  instead of copying them. Related to the overflow defects found in the
  `0053` redraw.
