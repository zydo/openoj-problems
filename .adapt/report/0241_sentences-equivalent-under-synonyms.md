## 241 — Sentence Similarity II

- New id / title / slug: 241 / Sentences Equivalent Under Synonyms /
  `sentences-equivalent-under-synonyms`
- Old → new API: `areSentencesSimilarTwo` → `sentencesEquivalent` (go
  `sentencesEquivalent`, rust `sentences_equivalent`, ts `sentencesEquivalent`);
  parameters `sentence1` → `wordsA`, `sentence2` → `wordsB`, `similarPairs` →
  `synonyms`
- Core algorithm / difficulty: disjoint-set forest keyed by word strings, merge
  the declared pairs then compare representatives position by position / H3
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["quick","car","noise"]` vs `["fast","auto","din"]` with a four-pair list →
    true (one position needs a two-hop chain), `["cold","room"]` vs
    `["chilly","hall"]` → false (a declared pair exists but not the one needed),
    `["one","two"]` vs `["one"]` with no pairs → false (length rule)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter naming trap avoided deliberately: the obvious pair `first`/`second`
  is unusable here because `solution.cpp` iterates a map and writes `it->second`.
  A word-boundary rename of `second` would corrupt the staged source solution
  once this fragment is merged into the ledger and the compatibility gate starts
  applying the `api` map. `wordsA`/`wordsB` occur nowhere in any source
  solution.
- The source has no sibling in the bank (there is no `0734` bundle), so no
  family naming constraint applied.
