## 27 — Edit Distance

- New id / title / slug: 27 / Edit Distance / `edit-distance` — **title kept**
- Old → new API: `minDistance` kept; parameters `word1` → `source`, `word2` → `target` (go/ts/rust entrypoints unchanged)
- Core algorithm / difficulty: Wagner–Fischer DP over two rolling rows / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `"brisk"` → `"click"` = 3 (three replacements, two free alignments), `"packet"` → `"pocket"` = 1 (single edit), `""` → `"grain"` = 5 (all insertions)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`solution-dp-table.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Why the name stays.** "Edit distance" is the standard name for the
  Levenshtein measure (1965), used in every algorithms text; renaming it would
  mean inventing a synonym for a concept with a canonical one. Same clause as
  wave 1's "Happy Number"/"H-Index" and this wave's 0051 "N-Queens", so the
  method `minDistance` stays with the title per that precedent. Everything
  else is fresh: statement, examples, guide, public cases, parameter names.
- The parameters *were* renamed — `word1`/`word2` are LeetCode's names and
  `source`/`target` read better in the recurrence — which is exactly the
  split ADAPT.md draws: keep the term of art, improve the conventional
  identifiers. The rename travels through the ports, starters and guide.
- Figure dropped: the DP-table drawing carries the source's strings in its
  row/column headers, its shaded match cells, and every table entry (all
  forced by `horse`→`ros`). Any other example is a different table. A
  dp-table renderer would rescue this family too (same note as 0062).
- The canonical textbook pair `kitten`/`sitting` was available and
  uncontaminated by the source, but constructing examples rather than
  borrowing the famous ones is the spirit of the exercise, so all three are
  homemade and verified by running the reference.
