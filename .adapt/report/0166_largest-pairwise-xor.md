## 166 — Maximum XOR of Two Numbers in an Array

- New id / title / slug: 166 / Largest Pairwise XOR / `largest-pairwise-xor`
- Old → new API: `findMaximumXOR` → `largestPairXor` (go
  `largestPairXor`, rust `largest_pair_xor`, ts `largestPairXor`)
- Core algorithm / difficulty: greedy bit-prefix construction with a hash set
  / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - a pair attaining all five low bits; powers of two plus zero
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Public expectations were recomputed by exhaustive pair enumeration.
