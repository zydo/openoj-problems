## 1167 — Minimum Cost to Connect Sticks

- New id / title / slug: 1167 / Least Cost to Merge the Lengths /
  `least-cost-to-merge-the-lengths`
- Old → new API: `connectSticks` → `leastMergeCost`
  (go `leastMergeCost`, rust `least_merge_cost`, ts `leastMergeCost`);
  parameter `sticks` → `lengths` (unused as an identifier in every source
  solution)
- Core algorithm / difficulty: Huffman-style greedy, min-heap of lengths /
  H2 (unchanged)
- Statement rewritten from spec: yes — "sticks" became segments/lengths;
  the fusion rule (x + y cost, x + y result) is stated from the spec
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,5,1]` → 13, `[2,7,4,9]` → 41 (four lengths, suboptimal order
    called out), `[6]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- Renaming the parameter to `lengths` also renames it in all seven
  solutions (it is the API surface); the compatibility gate stages the
  source solutions positionally, so their `sticks` parameter survives
  untouched there — no conflict.
- The extra tree failure this round (1293 missing statement.md) is another
  agent's bundle mid-creation, not this chunk's work.
