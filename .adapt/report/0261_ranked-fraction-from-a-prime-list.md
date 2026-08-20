## 261 — K-th Smallest Prime Fraction

- New id / title / slug: 261 / Ranked Fraction from a Prime List /
  `ranked-fraction-from-a-prime-list`
- Old → new API: `kthSmallestPrimeFraction` → `rankedPrimeFraction` (Go and
  TypeScript `rankedPrimeFraction`, Rust `kth_smallest_prime_fraction` →
  `ranked_prime_fraction`)
- Core algorithm / difficulty: value bisection with two-pointer counting /
  H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - fresh four-value prime lists selecting ranks five and six
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exact rational sorting independently confirms both public numerator and
  denominator pairs.
- The 13 hidden cases are data-identical to the source corpus.
