## 0049 — Group Anagrams

- New id / title / slug: 49 / Group Words By Letters / `group-words-by-letters`
- Old → new API: `groupAnagrams` → `groupByLetters` (go `groupByLetters`, rust `group_by_letters`, ts `groupByLetters`); parameter `strs` → `words`
- Core algorithm / difficulty: sorted-string hash key, one pass / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["stone","tones","cider","notes","cried","dog"]` (three classes, five-letter words), `["","sun",""]` (empty string, duplicates), `["pot","top","opt","pot"]` (single class with repeats)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- "Anagram" is dropped from the title and the method; the statement defines
  the relation from scratch ("one is a rearrangement of the other") instead of
  leaning on the borrowed word. That is stricter than ADAPT.md requires —
  "anagram" predates LeetCode and could have been kept on the Happy-Number
  precedent — but "Group Words By Letters" describes the task to someone who
  has never met the word, which reads better here.
- `comparison` is `exact`, so the promised output order (groups by first
  appearance, members in arrival order) has to match the reference's emission
  — it does, because the ports use insertion-ordered maps. The statement now
  states that order explicitly instead of "any order", which the source's own
  `exact` comparison never actually permitted.
- Port comments said "anagrams produce byte-identical keys"; reworded to
  "rearrangements produce…" — old terminology in comments, not identifiers,
  but ADAPT.md asks for it and the stale gate would not have caught it.
- The parameter rename `strs` → `words` is a clarity rename; it travels through
  statement, starters, judge and all seven ports, and the stale gate checks it
  in identifier positions.
