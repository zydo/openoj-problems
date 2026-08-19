## 2719 — Count of Integers

- New id / title / slug: 2719 / Count Numbers by Digit Sum / `count-numbers-by-digit-sum`
- Old → new API: `count` → `countByDigitSum` (go/rust/ts identical — source had method == rust entrypoint, equality preserved per convention); parameters `num1`, `num2`, `min_sum`, `max_sum` kept
- Core algorithm / difficulty: digit DP with tight/free flag and capped digit-sum state, f(num2) − f(num1−1) mod 10⁹+7 / H4 (unchanged)
- Statement rewritten from spec: yes — "good integer" → "pleasant integer", tight→hugging in the guide
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"4".."40", 3..6 → 16` (window filters a two-digit range), `"222".."222", 6..6 → 1` (single-value range, exact sum), `"1".."200", 1..2 → 9` (sparse hits up to a round bound)
- Constraints: domain unchanged (1 ≤ num1 ≤ num2 ≤ 10²², 1 ≤ min_sum ≤ max_sum ≤ 400), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `count` is a bare English word but here every occurrence in the solutions
  is either the entry point itself or `countRange`/`count_range`, which the
  word-boundary rename leaves alone — no comment surgery needed (unlike 2615).
