## 0438 — Find All Anagrams in a String

- New id / title / slug: 438 / Permutation Window Starts /
  `permutation-window-starts`
- Old → new API: `findAnagrams` → `permutationWindowStarts` (go
  `permutationWindowStarts`, rust `permutation_window_starts`, ts
  `permutationWindowStarts`)
- Core algorithm / difficulty: fixed-length sliding window with a frequency
  mismatch count / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - three consecutive overlapping matches with duplicate letters; two
    separated permutations
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Public expectations were recomputed with direct multiset comparison.
