## 112 — Move Zeroes

- New id / title / slug: 112 / Zeros To The End / `zeros-to-the-end`
- Old → new API: `moveZeroes` → `zerosToEnd` (go `zerosToEnd`, rust `zeros_to_end`, ts `zerosToEnd`); parameter `nums` kept
- Core algorithm / difficulty: two-pointer in-place swap, write-cursor invariant / H1 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,0,4,0,9] → [7,4,9,0,0]`, `[0,0,-3] → [-3,0,0]` (negative non-zero), `[0,8] → [8,0]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The in-place requirement is part of the judged contract (the reference
  mutates and returns the same array), so the description states it as a
  requirement, matching the source's force.
