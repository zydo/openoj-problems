## 758 — Find the Count of Good Integers

- New id / title / slug: 758 / Count Numbers Rearranging to Palindrome Multiples / `count-numbers-rearranging-to-palindrome-multiples`
- Old → new API: `countGoodIntegers` → `countRearrangeable` (go `countRearrangeable`, rust `count_rearrangeable`, ts `countRearrangeable`); parameters `n`, `k` kept
- Core algorithm / difficulty: enumerate 10^⌈n/2⌉ palindrome halves, dedupe digit-count vectors, sum multinomials minus leading-zero spellings / H3 (unchanged)
- Statement rewritten from spec: yes (k-palindromic redefined in the house voice with fresh `2020`/`1010` framing examples)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=2,k=7` → 1 (single qualifying palindrome, no other arrangement), `n=3,k=4` → 54 (three permutations per palindrome, leading-zero case shown), `n=4,k=2` → 172 (even-ending palindromes)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Witness palindromes for the explanations were enumerated by the generator
  (e.g. the 20 qualifying palindromes for `n=3, k=4`), so every concrete
  number quoted in the statement is machine-verified, not hand-derived.
