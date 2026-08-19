## 2338 — Count the Number of Ideal Arrays

- New id / title / slug: 2338 / Count Arrays Along Divisor Chains / `count-arrays-along-divisor-chains`
- Old → new API: `idealArrays` → `countDivisorChainArrays` (go `countDivisorChainArrays`, rust `count_divisor_chain_arrays`, ts `countDivisorChainArrays`)
- Core algorithm / difficulty: strict divisibility chains counted by sieve DP, spread with stars-and-bars C(n-1, L-1), mod 10⁹+7 / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=2, maxValue=4 → 8`, `n=4, maxValue=2 → 5`, `n=3, maxValue=3 → 7`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
