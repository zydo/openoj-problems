## 548 — Number of Ways to Separate Numbers

- New id / title / slug: 548 / Count Non-Decreasing Splits / `count-non-decreasing-splits`
- Old → new API: `numberOfCombinations` → `countNonDecreasingSplits` (go `countNonDecreasingSplits`, rust `count_non_decreasing_splits`, ts `countNonDecreasingSplits`); parameter `num` kept
- Core algorithm / difficulty: length-indexed DP + prefix sums + LCP table, O(n²) / H4 (unchanged)
- Statement rewritten from spec: yes (forgot-commas story dropped; cuts of a digit string)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"5161"` → 3 (shorter-then-longer pieces), `"1213"` → 4 (equal-length pair 12 ≤ 13), `"012"` → 0 (leading zero)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Digit-string input means no bracket literals in the source fences; the
  only near-collision risk is reusing source example strings, avoided.
- Brute force = exhaustive cut enumeration with integer comparison.
