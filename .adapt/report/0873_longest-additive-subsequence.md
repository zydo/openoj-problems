## 0873 — Length of Longest Fibonacci Subsequence

- New id / title / slug: 873 / Longest Additive Subsequence / `longest-additive-subsequence`
- Old → new API: `lenLongestFibSubseq` → `longestAdditiveSubseq` (go
  `longestAdditiveSubseq`, rust `longest_additive_subseq`, ts
  `longestAdditiveSubseq`); parameter `arr` → `nums`
- Core algorithm / difficulty: DP keyed by the pair of trailing indices, with a
  value→index map / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,6,7,10,13,20,23,33]` → 5, `[2,3,4,5,7,9,11,12]` → 4 (two different picks
    of the same length), `[2,4,8,16,32]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- `nums` was verified absent from all seven source solutions before renaming
  `arr`, and the adapted solutions rename every internal use, since the stale
  gate treats a renamed parameter as forbidden anywhere in the bundle's code.
- The statement defines the property from scratch ("every entry from the third
  onwards is the sum of the two before it") and never names Fibonacci; the
  solution comments were retitled to "additive subsequence" for the same reason.
