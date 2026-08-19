## 2439 — Minimize Maximum of Array

- New id / title / slug: 2439 / Smallest Peak After Leftward Shifts / `smallest-peak-after-leftward-shifts`
- Old → new API: `minimizeArrayValue` → `smallestPeakAfterLeftShifts` (go `smallestPeakAfterLeftShifts`, rust `smallest_peak_after_left_shifts`, ts `smallestPeakAfterLeftShifts`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: one pass, answer = max over prefixes of ceil(prefix_sum / prefix_length); value only moves left so each prefix bounds the peak and leveling reaches it / H2 (unchanged)
- Statement rewritten from spec: yes — operation renamed to a "shift", the direction invariant stated up front
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,9,2,5] → 7` (mid-array spike; prefix ceiling above the global average), `[8,0,0] → 8` (leading value untouchable), `[6,6,6] → 6` (already level)
- Constraints: domain unchanged (n ≤ 10⁵, values ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's worked example walked three operations step by step; my
  Example 1 walks the *argument* instead (why the prefix pair forces 7, then
  the two shifts that reach it), which reads better against the prefix-ceiling
  solution than a longer operation trace.
