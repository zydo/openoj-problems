## 0041 — First Missing Positive

- New id / title / slug: 41 / Smallest Absent Positive / `smallest-absent-positive`
- Old → new API: `firstMissingPositive` → `smallestAbsentPositive` (go `smallestAbsentPositive`, rust `smallest_absent_positive`, ts `smallestAbsentPositive`)
- Core algorithm / difficulty: cyclic sort using the index as a hash, two passes / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no — see figures)
  - `[4,1,2,5]` → 3 (a gap inside the window), `[-7,0,-2]` → 1 (nothing positive), `[2,1,3]` → 4 (window full, answer is `n + 1`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`solution-cyclic-sort-swaps.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Why the figure was dropped, and the rule it illustrates.** The swap figure
  draws four cells and three curved arrows with hard-coded endpoints:
  index 0 → 2, index 1 → 3, index 1 → 0. Those endpoints *are* the values —
  the arrows force `nums[0] = 3`, `nums[1] = 4`, `nums[3] = 1`, leaving only
  `nums[2]` free to change. Any structure-preserving example here would share
  three of its four elements with the source's, which is precisely the failure
  wave 1 hit. Where a figure's arrows encode index arithmetic on the values,
  treat it as geometry and drop it.
- The reference port cyclic-sorts a defensive copy, so the guide's complexity
  line honestly says `O(n)` space while the statement still demands `O(1)`
  auxiliary space of the solver. That mismatch is inherited, not introduced;
  it is the source's own arrangement and decision 5 keeps it.
- `nums` kept (conventional).
