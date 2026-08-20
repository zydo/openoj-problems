## 550 — Widest Pair of Indices With Equal Range Sum

- New id / title / slug: 550 / Longest Equal-Sum Span / `longest-equal-sum-span`
- Old → new API: `widestPairOfIndices` → `longestEqualSumSpan` (go `longestEqualSumSpan`, rust `longest_equal_sum_span`, ts `longestEqualSumSpan`); parameters `nums1`, `nums2` kept
- Core algorithm / difficulty: prefix-difference walk with first-occurrence map, O(n) / H2 (unchanged)
- Statement rewritten from spec: yes ("balanced span" replaces the pair-of-indices framing; same semantics)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,0,1,1,0]` vs `[0,1,1,0,1]` → 5 (whole array balances), `[1,1]` vs `[1,0]` → 1, `[1,1]` vs `[0,0]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Binary arrays are always exempt from the literal gate (two-symbol
  alphabet), so example freedom is total here.
- First draft of the zero example was wrong by inspection (`[1,0]` vs
  `[0,0]` has a balancing single 0); a zero answer needs every position to
  differ — `[1,1]` vs `[0,0]`. The brute-force cross-check catches exactly
  this class of mistake.
