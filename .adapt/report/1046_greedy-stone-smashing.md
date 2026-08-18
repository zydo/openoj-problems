## 1046 — Last Stone Weight

- New id / title / slug: 1046 / Greedy Stone Smashing / `greedy-stone-smashing`
- Old → new API: `lastStoneWeight` → `greedyStoneSmashing` (go `greedyStoneSmashing`, rust `greedy_stone_smashing`, ts `greedyStoneSmashing`); parameter `stones` kept
- Core algorithm / difficulty: max-heap simulation / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,3,9,3,1] → 2` (fragment survives), `[5,5,2,2] → 0` (everything cancels), `[12] → 12` (single stone)
- Constraints: domain unchanged (1..30 stones, weights 1..1000), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 18/18 cases)

### Notes

- Sibling of 1049; the pair was named together as `Greedy Stone Smashing` /
  `Optimal Stone Smashing`, which carries the actual difference between them
  (the collision partners are forced vs. freely chosen to minimise the leftover).
- The statement renames the two collided weights to `a >= b` rather than
  reusing the source's letters, and states the termination argument (each
  collision removes at least one stone) that the source only asserted.
