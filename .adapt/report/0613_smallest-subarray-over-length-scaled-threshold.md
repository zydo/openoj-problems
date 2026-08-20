## 613 — Subarray With Elements Greater Than Varying Threshold

- New id / title / slug: 613 / Smallest Subarray Over a Length-Scaled Threshold / `smallest-subarray-over-length-scaled-threshold`
- Old → new API: `validSubarraySize` → `smallestSubarrayLength` (go `smallestSubarrayLength`, rust `smallest_subarray_length`, ts `smallestSubarrayLength`)
- Core algorithm / difficulty: monotonic-stack minimal spans, min·k > threshold test / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,9,4,9,3] t 11 → 3`, `[4,8,3,8] t 6 → 1`, `[1,4,7,4,1] t 12 → -1`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source statement invited "any valid size" while `comparison: exact`
  judges only what the reference emits — the minimal one. The rewrite asks
  outright for the smallest qualifying length, so statement and judge agree;
  judged semantics are untouched.
- Example 3 lands on the strict-inequality edge (min·k equals the threshold
  exactly) — the sharpest corner this task has.
