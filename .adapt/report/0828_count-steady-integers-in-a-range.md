## 828 — Count Good Integers in a Range

- New id / title / slug: 828 / Count Steady Integers in a Range / `count-steady-integers-in-a-range`
- Old → new API: `goodIntegers` → `countSteadyIntegers` (go `countSteadyIntegers`, rust `count_steady_integers`, ts `countSteadyIntegers`); parameters `l`, `r`, `k` kept
- Core algorithm / difficulty: prefix-count digit DP with (pos, tight, prev, started) state / H3 (unchanged)
- Statement rewritten from spec: yes ("good integer" renamed steady, defined with my own illustrative values)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `(20, 25, 2)` → 5 (25 the sole failure), `(232, 235, 1)` → 3 (last digit steps over), `(9995, 10005, 2)` → 6 (four-to-five digit boundary crossing)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First naming choice was "smooth"; I backed off to "steady" because the bank
  already has `0105_nth-five-smooth-number`, where smooth carries its
  number-theoretic meaning (Hamming-type numbers). Same word for an unrelated
  digit property would have been confusing across the catalog.
- Hand-computed example 3 initially said 7; brute force said 6 (9995/9996
  fail, 9997 passes — the 9→7 step is exactly `k`). Every example value in
  this bundle came from the reference plus an exhaustive check.
