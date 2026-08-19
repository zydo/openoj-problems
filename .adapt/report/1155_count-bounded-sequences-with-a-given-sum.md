## 1155 — Number of Dice Rolls With Target Sum

- New id / title / slug: 1155 / Count Bounded Sequences With a Given Sum /
  `count-bounded-sequences-with-a-given-sum`
- Old → new API: `numRollsToTarget` → `countBoundedSequences`
  (go `countBoundedSequences`, rust `count_bounded_sequences`,
  ts `countBoundedSequences`); parameters `n`/`k`/`target` kept
- Core algorithm / difficulty: rolling-array count DP over terms × running
  sum, mod 1e9+7 / H2 (unchanged)
- Statement rewritten from spec: yes — the dice scenario dropped entirely;
  the task is stated as counting ordered n-term sequences in 1..k summing
  to target
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=2,k=4,target=5` → 4 (pairs listed), `3,2,6` → 1 (top sum, single
    sequence), `2,6,13` → 0 (unreachable), `25,12,130` → 886166690 (modulus)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- Comment terminology in all seven solutions updated from die/face/dice to
  term/value (ADAPT.md: "update comments naming old terminology"); the code
  itself is untouched beyond the entry-point rename.
- Dropping a scenario skin (dice) rather than renaming its props is the
  cheapest way to push overlap to zero — the spec has no dice in it.
