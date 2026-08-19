## 3600 — Maximize Spanning Tree Stability with Upgrades

- New id / title / slug: 3600 / Widest Spanning Tree With Strength Doubles / `widest-spanning-tree-with-strength-doubles`
- Old → new API: `maxStability` → `widestSpanningTree` (go `widestSpanningTree`, rust `widest_spanning_tree`, ts `widestSpanningTree`); parameters `n`, `edges`, `k` kept
- Core algorithm / difficulty: binary search on the bottleneck width with union-find feasibility (required edges first, free edges, then doubled edges under the k budget) / H4 (unchanged)
- Statement rewritten from spec: yes ("stability" → width; "must" flag → required; upgrade → doubling)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - forced-edge cap `[[0,1,3,1],[1,2,4,0]] k 1` → `3`, all-optional cycle of 4 `[[0,1,5,0],[1,2,4,0],[2,3,6,0],[0,3,2,0]] k 2` → `6`, required triangle `[[0,1,4,1],[1,2,4,1],[2,0,4,1],[0,3,5,0]] k 1` → `-1`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Edge tuples are captured by the stale gate individually — `[0,1,2,1]` from
  the source's example 1 is a literal, so example edges need new strengths
  and endpoints throughout, not just reshuffled lists.
- Expected values cross-checked by an exhaustive spanning-tree + upgrade-
  allocation brute force that first reproduced all source public cases.
