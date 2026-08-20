## 56 — Sort List

- New id / title / slug: 56 / Order Linked List / `order-linked-list`
- Old → new API: `sortList` → `orderList` (go `orderList`, rust `order_list`, ts `orderList`); parameter `head` kept
- Core algorithm / difficulty: top-down merge sort by relinking, slow/fast midpoint / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — 4 nodes, 5 nodes, empty, matching the three drawings)
  - `[7,3,9,5] → [3,5,7,9]`, `[2,-6,9,-3,4] → [-6,-3,2,4,9]` (negatives), `[] → []`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `example-2.svg`, `solution-merge-sort-cascade.svg`)
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 14/14 cases)

### Notes

- The cascade figure is the constraining one: its geometry fixes a four-node
  input that splits `2 + 2`, so example 1 had to stay at length four. Each of
  its five rows was relabelled independently — the two intermediate merged
  pairs are `[3,7]` and `[5,9]`, which are *not* a permutation of the row above
  them but the sorted halves, so they had to be derived rather than copied
  across.
- Example 2 keeps two negative values so the two-character label widths in
  `example-2.svg` still fit their circles.
