## 557 — GCD Sort of an Array

- New id / title / slug: 557 / Sortable by Shared-Factor Swaps / `sortable-by-shared-factor-swaps`
- Old → new API: `gcdSort` → `sortableBySharedFactorSwaps` (go `sortableBySharedFactorSwaps`, rust `sortable_by_shared_factor_swaps`, ts `sortableBySharedFactorSwaps`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: smallest-prime-factor sieve + union-find over values and primes, per-position component check against the sorted copy / H3 (unchanged)
- Statement rewritten from spec: yes — swap legality stated as "share a divisor greater than 1" with the transitivity remark made explicit
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[35,6,14] → true` (gcd(35,6)=1 yet both placed, via 14), `[14,3,10] → false` (isolated 3), `[4,6,9,4] → true` (repeated value)
- Constraints: domain unchanged (1–3·10⁴ length, values 2–10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 22/22 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values proved by brute-force BFS over the permutation graph of
  legal swaps (tiny inputs), cross-checked against a re-derived sieve+UF —
  both agree on all three examples.
- First example swap chains were machine-generated; the initial duplicate
  candidate `[8,12,8,3]` needed six moves to narrate and was replaced by
  `[4,6,9,4]` (two moves, same lesson).
- Solution comments were already scenario-free (sieve/union-find talk), so
  only the entry-point identifiers changed.
