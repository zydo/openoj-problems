## 1414 — Find the Minimum Number of Fibonacci Numbers Whose Sum Is K

- New id / title / slug: 1414 / Fewest Fibonacci Summands / `fewest-fibonacci-summands`
- Old → new API: `findMinFibonacciNumbers` → `fewestFibonacciSummands` (go `fewestFibonacciSummands`, rust `fewest_fibonacci_summands`, ts `fewestFibonacciSummands`); parameter `k` kept
- Core algorithm / difficulty: greedy largest-Fibonacci subtraction (Zeckendorf) / H2 (unchanged)
- Statement rewritten from spec: yes — the sequence is shown as a displayed list instead of defined by recurrence prose, and the "repetition allowed but never needed" fact is stated up front
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `k = 89 → 1` (k itself Fibonacci), `k = 14 → 2`, `k = 33 → 4` (source used 7/10/19; none overlap any hidden case)
- Constraints: domain unchanged, presentation rewritten (`10⁹` as `10^9`)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Source public examples 7/10/19 sit between hidden small cases; picking new
  ks that are themselves Fibonacci (89) covers the "exact hit" shape the
  source's examples never showed.
