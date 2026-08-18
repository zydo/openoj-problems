## 0128 — Longest Consecutive Sequence

- New id / title / slug: 128 / Longest Integer Streak / `longest-integer-streak`
- Old → new API: `longestConsecutive` → `longestIntegerStreak` (go `longestIntegerStreak`, rust `longest_integer_streak`, ts `longestIntegerStreak`); parameter `nums` kept
- Core algorithm / difficulty: hash set plus chain-bottom walking / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[12,45,13,11,46,50] → 3`, `[-3,9,-2,-1,0,9,1] → 5` (negatives + a duplicate), `[30,60,90] → 1` (no chain at all)
- Constraints: domain unchanged, presentation rewritten (prose bounds, superscript powers)
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 14/14 cases)

### Notes

- The source's "must run in `O(n)`" requirement is functional, not decorative
  (a sorting solution passes the judge but misses the point), so it is restated
  in the description rather than dropped.
- The empty-array case is in the hidden set, so the statement says explicitly
  that an empty `nums` answers `0`.
