## 3336 — Find the Number of Subsequences With Equal GCD

- New id / title / slug: 3336 / Count Subsequence Pairs with Matching GCDs / `count-subsequence-pairs-with-matching-gcds`
- Old → new API: `subsequencePairCount` → `countGcdPairs` (go `countGcdPairs`, rust `count_gcd_pairs`, ts `countGcdPairs`); parameter `nums` kept
- Core algorithm / difficulty: sweep with a `dp[g1][g2]` table over gcd pairs, sentinel 0 for empty sides, answer on the diagonal / H4 (unchanged)
- Statement rewritten from spec: yes (three-fates framing; ordered-pairs semantics made explicit)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,3,9]` → 6 (repeats; lone 3 vs 3-with-9), `[2,3,4,6]` → 2 (single matches a pair), `[6,10,15]` → 0 (all subsequence gcds distinct)
  - All three brute-force verified against the reference (`.localonly/wave-g-01/exp_3336.py`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- My first draft of Example 2's explanation named the wrong qualifying
  pair ([2] vs [2,6] instead of [2] vs [4,6]) — the brute-force check
  caught it before the gates could. Worth brute-forcing every small
  example for counting problems; hand enumeration of ordered disjoint
  pairs is error-prone.
