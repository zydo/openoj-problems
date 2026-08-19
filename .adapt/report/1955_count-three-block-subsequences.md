## 1955 — Count Number of Special Subsequences

- New id / title / slug: 1955 / Count Three-Block Subsequences / `count-three-block-subsequences`
- Old → new API: `countSpecialSubsequences` → `countThreeBlockSubsequences` (go `countThreeBlockSubsequences`, rust `count_three_block_subsequences`, ts `countThreeBlockSubsequences`)
- Core algorithm / difficulty: three-counter linear DP over prefixes, mod 10⁹+7 / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[0,0,1,2,2]` → 9 (blocks with duplicate ends), `[1,2,0,1,2]` → 1 (junk before the usable tail), `[0,0,0,1,2]` → 7 (doubling run)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate forbids `[0,1,2]` itself here — the source's fenced
  explanation lists it — so neither the statement nor solutions.md may write
  the canonical sequence as an array literal. Prose ("`0`s then `1`s then
  `2`s") carries the definition instead, and example explanations argue by
  index choices, not by listing the chosen values.
- Examples verified against both the source reference and a brute force over
  index subsets (non-decreasing + all three values present = three-block).
