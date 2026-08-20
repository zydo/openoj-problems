## 75 — Count Primes

- New id / title / slug: 75 / Primes Below N / `primes-below-n`
- Old → new API: `countPrimes` → `primesBelowN` (go `primesBelowN`, rust `primes_below_n`, ts `primesBelowN`); parameter `n` kept
- Core algorithm / difficulty: sieve of Eratosthenes vs linear (smallest-prime-factor) sieve / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `12 → 5`, `2 → 0` (empty boundary: nothing below the least prime), `30 → 10`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 14/14 solution files, 18/18 cases)

### Notes

- Multi-variant bundle: variant ids `eratosthenes` and `linear_sieve` and
  their `solutions.md` headings kept unchanged; only the prose was rewritten.
