## 2172 — Maximum AND Sum of Array

- New id / title / slug: 2172 / Maximum Slot AND Sum / `maximum-slot-and-sum`
- Old → new API: `maximumANDSum` → `maxSlotAndSum` (go `maxSlotAndSum`, rust `max_slot_and_sum`, ts `maxSlotAndSum`); parameter `numSlots` → `slots` (rust `num_slots` → `slots`)
- Core algorithm / difficulty: bitmask DP over 2·slots single-seat positions, popcount fixes the next element / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,6,2,8,3,5] slots 3` (dense, every slot at capacity), `[2,7] slots 3` (empty slots, partial bit overlap), `[9,9,11,11] slots 3` (repeated values, two per slot)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Reference cross-checked against an independent capacity-2 assignment
  enumerator on 400 random small inputs before writing examples — agreed
  everywhere (unlike 2167, see that problem's skip note).
- Parameter rename `numSlots` → `slots` checked against every source
  solution for identifier collisions; none (locals are `positions`, `dp`,
  `best`, `mask`, `i`, `p`).
- Example 2's expected value 5 doubles as the natural reading check:
  `2 AND 2` and `7 AND 3` are followable by eye without binary conversion.
