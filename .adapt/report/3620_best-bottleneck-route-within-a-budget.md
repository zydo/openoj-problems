## 3620 — Network Recovery Pathways

- New id / title / slug: 3620 / Best Bottleneck Route Within a Budget / `best-bottleneck-route-within-a-budget`
- Old → new API: `findMaxPathScore` → `bestBottleneckRoute` (go `bestBottleneckRoute`, rust `best_bottleneck_route`, ts `bestBottleneckRoute`); parameter `online` → `available` (`edges`, `k` kept)
- Core algorithm / difficulty: binary search over sorted distinct edge costs; per threshold, cheapest DAG route in topological order over edges ≥ S and available nodes, feasible iff cost ≤ k / H3 (unchanged)
- Statement rewritten from spec: yes (network/recovery story dropped; bottleneck named for what it is)
- Examples newly constructed: yes (structure-preserving: yes — both drawn DAG shapes kept, ids renumbered and costs changed)
  - diamond+offline-node-1 `[[0,2,4],[2,4,9],[0,3,5],[3,4,7]] k 12` → `5` (left route busts the budget), 6-edge DAG with offline node 2 `[[0,1,9],[1,4,4],[0,3,7],[3,2,6],[2,4,5],[3,4,8]] k 13` → `4` (offline kills the cheap link; the surviving route fits exactly)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (2) — geometry untouched; node ids renumbered (ex2 swaps the bottom pair so the offline node is id 2), route highlighting re-assigned to the new winners, offline marking moved (ex1 gains a dashed offline node 1 outside the diamond), captions/annotations/data comments rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Boolean-array trap**, sibling of 3575's par trap: the source statement's
  `online` arrays `[true,true,true,true]` and `[true,true,true,false,true]`
  are stale-gate literals, and both are forced by the drawn shapes (an
  all-online 4-node graph; a 5-node graph with the third node offline). Ex1
  sidesteps by carrying an extra offline node with no links (id 1), ex2 by
  renumbering the bottom pair so the offline node is id 2. Grep the source's
  boolean arrays before fixing any example shape.
- Parameter rename `online` → `available` grepped clean across all seven
  source solutions (only `online` itself is used); recorded in the ledger
  `api` map so the compatibility gate applies it to the staged source.
- Expected values from a path-enumeration brute force that reproduced both
  source public cases first.
