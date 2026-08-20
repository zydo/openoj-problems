## 218 — Design Search Autocomplete System

- New id / title / slug: 218 / Ranked Prefix Suggestions /
  `ranked-prefix-suggestions`
- Old → new API: `AutocompleteSystem` → `PrefixSuggester`; `input` →
  `typeCharacter`
- Core algorithm / difficulty: trie with terminal frequencies and a live
  prefix cursor / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - ranking with an ASCII tie; a newly recorded sentence appearing in the next
    session
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: Java, Python
- Figures: none
- Gates: check ✓; verify ✓ (2/2 languages, 16/16 cases); sandbox pending
  (central design batch); compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Hidden cases differ only in their class and method action strings.
- An initial broad text replacement also touched testcase object keys named
  `input`; the schema assertion caught it before judging, and the keys were
  restored before all gates were rerun.
