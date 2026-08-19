## 2741 — Special Permutations

- New id / title / slug: 2741 / Orderings with Divisible Neighbours / `orderings-with-divisible-neighbours`
- Old → new API: `specialPerm` → `countDivisibleOrderings` (go `countDivisibleOrderings`, rust `count_divisible_orderings`, ts `countDivisibleOrderings`); parameter `nums` kept
- Core algorithm / difficulty: push-style bitmask DP dp[mask][last] over divisibility-compatible extensions, mod 10⁹+7 / H3 (unchanged)
- Statement rewritten from spec: yes — "special permutation" → "linked arrangement" (neighbour values divide one another)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,8,2] → 6` (all pairs compatible, n!), `[3,5,15] → 2` (middle-man value forced), `[7,11] → 0` (no compatible pair)
- Constraints: domain unchanged (2 ≤ n ≤ 14, 1 ≤ values ≤ 10⁹, distinct), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None — smooth adaptation.
