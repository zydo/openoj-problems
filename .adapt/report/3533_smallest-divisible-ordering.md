## 3533 — Concatenated Divisibility

- New id / title / slug: 3533 / Smallest Divisible Ordering / `smallest-divisible-ordering`
- Old → new API: `concatenatedDivisibility` → `smallestDivisibleOrdering` (go `smallestDivisibleOrdering`, rust `smallest_divisible_ordering`, ts `smallestDivisibleOrdering`); parameters `nums`, `k` kept
- Core algorithm / difficulty: bitmask DP over (placed mask, remainder mod k) with greedy lexicographic rebuild / H4 (unchanged)
- Statement rewritten from spec: yes (arrangement/joined-digits framing replaces the "divisible concatenation" term)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,42,9] k 5` → `[9,42,5]` (the 5 must sit last, so 9 jumps ahead of 42), `[6,40] k 4` → `[6,40]` (one of two orders), `[2,4,6,8] k 5` → `[]` (no final digit 0/5)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values cross-checked against a permutations brute force, which
  itself reproduced all three source public cases first.
- Ex1 is built so the divisibility requirement forces a *larger* number
  early (`[9,42,5]`, not sorted `[5,9,42]`) — that is the pedagogy the
  lexicographic requirement needs.
