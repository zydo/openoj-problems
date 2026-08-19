## 1063 — Number of Valid Subarrays

- New id / title / slug: 1063 / Count Minimum-Led Subarrays / `count-minimum-led-subarrays`
- Old → new API: `validSubarrays` → `countMinimumLedSubarrays` (rust `count_minimum_led_subarrays`); parameter `nums` kept
- Core algorithm / difficulty: monotonic stack for "first strictly smaller to the right", summed as distances / H3 (unchanged)
- Statement rewritten from spec: yes — the source's title said only "valid", leaving the condition entirely to the body; the rewrite names the property (minimum-led) and defines it once
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `[5,1,3,2,4] → 9`, `[9,7,4] → 3` (falling array, lower bound n), `[4,4,4,4] → 10` (all ties, upper bound n(n+1)/2)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source statement's explanations enumerate subarrays, so the stale gate's
  literal set is large and full of short lists (`[1,4,2]`, `[2,5,3]`, `[1,4,2,5]`,
  `[3,2,1]`). An enumerating explanation in the *new* statement can collide with
  one of them by accident even when the array is different, since the check is a
  squashed-substring test. Choosing a new array with a different length profile —
  not a permutation of the source's — avoids it for free.
