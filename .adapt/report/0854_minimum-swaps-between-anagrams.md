## 0854 — K-Similar Strings

- New id / title / slug: 854 / Minimum Swaps Between Anagrams /
  `minimum-swaps-between-anagrams`
- Old → new API: `kSimilarity` → `minimumAnagramSwaps` (Go and TypeScript
  `minimumAnagramSwaps`, Rust `k_similarity` → `minimum_anagram_swaps`)
- Core algorithm / difficulty: breadth-first search fixing the first mismatch
  / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh anagram pairs exercise repeated letters and a six-character cycle
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 14/14 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Unpruned exhaustive swap-state BFS independently confirms public minima `3`
  and `5`.
- The 12 hidden cases are data-identical to the source corpus.
