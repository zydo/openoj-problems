## 0540 — Single Element in a Sorted Array

- New id / title / slug: 540 / Unpaired Value In A Sorted Array / `unpaired-value-in-a-sorted-array`
- Old → new API: `singleNonDuplicate` → `unpairedValue` (go `unpairedValue`, rust `unpaired_value`, ts `unpairedValue`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: binary search over even slots, where the intact→slipped pair parity flips / H3 (unchanged)
- Statement rewritten from spec: yes — the parity story is told as pairs filling (even, odd) slots left of the break and (odd, even) right of it
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,5,9,13,13,16,16,22,22]` → 9 (break in the middle), `[6,6,15,15,27]` → 27 (break at the end), `[19]` → 19 (no pairs at all)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Deliberately did **not** name this "Lone Element …" — that stem belongs
  to the `lone` family (0136/0137/0260, already adapted); "Unpaired Value"
  keeps the sorted-array variant clearly separate from the XOR family.
- Example values are disjoint from the source's example set
  ({1,2,3,4,8,10,11}) to keep the no-reuse rule strict at element level.
- The `solutions.md` trace (`mid = 4 → 2 → snapped 0`, answer index 2) was
  verified against the actual loop, not hand-derived.
