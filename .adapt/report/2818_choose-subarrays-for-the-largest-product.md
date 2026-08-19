## 2818 — Apply Operations to Maximize Score

- New id / title / slug: 2818 / Choose Subarrays for the Largest Product / `choose-subarrays-for-the-largest-product`
- Old → new API: `maximumScore` → `largestProduct` (go `largestProduct`, rust `largest_product`, ts `largestProduct`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: SPF sieve for prime counts, monotonic-stack subarray win counts, greedy largest-value picks with fast modular pow / H4 (unchanged)
- Statement rewritten from spec: yes — "prime score" → "prime count", operation restated as picking unused subarrays
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,9,6], k=2 → 54` (one rich element outranks its neighbors), `[10,15,21], k=4 → 47250` (all counts equal, leftmost tie-break), `[9,9,9,9], k=10 → 486784380` (all ten subarrays, 9¹⁰ mod 10⁹+7)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The kept solutions' comment prose said "prime score"; renamed to "prime
  count" in comments only (the `scores` local and all code are untouched).
- Session was interrupted mid-problem and resumed: the six earlier wave-b-16
  ledger fragments had vanished from `.adapt/incoming-b/` without ever being
  merged into `ledger.json`; all six were rewritten, and this bundle finished.
