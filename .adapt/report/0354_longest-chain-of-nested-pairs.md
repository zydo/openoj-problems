## 0354 — Russian Doll Envelopes

- New id / title / slug: 354 / Longest Chain of Nested Pairs / `longest-chain-of-nested-pairs`
- Old → new API: `maxEnvelopes` → `longestNestedChain` (go `longestNestedChain`, rust `longest_nested_chain`, ts `longestNestedChain`); parameter `envelopes` → `pairs`
- Core algorithm / difficulty: width-ascending / height-descending sort, then strict LIS on heights via patience sorting with `bisect_left` / H3 (unchanged)
- Statement rewritten from spec: yes — envelope/Russian-doll scenario reduced to the computation (pairs of coordinates, nesting = strictly smaller on both)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[4,9],[1,3],[5,8],[2,7]] → 3` (a pair must be skipped; [4,9] vs [5,8] incomparable), `[[6,6],[6,6],[6,6]] → 1` (equal pairs), `[[2,4],[2,9],[3,5]] → 2` (width tie)
- Constraints: domain unchanged (1–10^5 pairs, coordinates 1–10^5), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter rename `envelopes` → `pairs` is recorded in the fragment's api
  map, so the compatibility gate renames it in the source solutions too —
  all clean.
- Solution comments said "at most one envelope per width fits"; reworded to
  pair vocabulary.
