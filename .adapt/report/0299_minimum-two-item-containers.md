## 299 — Boats to Save People

- New id / title / slug: 299 / Minimum Two-Item Containers /
  `minimum-two-item-containers`
- Old → new API: `numRescueBoats` → `minimumTwoItemContainers` (Go and
  TypeScript `minimumTwoItemContainers`, Rust `num_rescue_boats` →
  `minimum_two_item_containers`)
- Core algorithm / difficulty: sorted two-pointer greedy pairing / H2
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh weights cover perfect pairing, mixed paired/solo placement, and all
    solo placement
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive pairing search independently confirms public counts `2`, `3`,
  and `3`.
- The 13 hidden cases are data-identical to the source corpus.
