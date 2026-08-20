## 457 — Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree

- New id / title / slug: 457 / Classify MST Edges / `classify-mst-edges`
- Old → new API: `findCriticalAndPseudoCriticalEdges` → `classifyEdges` (go `classifyEdges`, rust `classify_edges`, ts `classifyEdges`); parameters `n`, `edges` kept
- Core algorithm / difficulty: Kruskal baseline plus per-edge deletion and forcing tests over a shared sorted order / H4 (unchanged)
- Statement rewritten from spec: yes — three-bin classification stated directly, "dearer" wording throughout
- Examples newly constructed: yes (structure-preserving: n/a — geometry figures, regenerated)
  - `n=5` 7-edge graph → `[[0,1,4],[2,3]]` (all three bins present, two MSTs of weight 12), `n=4` square-with-chord all weight 4 → `[[],[0,1,2,3,4]]` (nothing critical), `n=3` two bridges → `[[0,1],[]]` — all cross-checked by enumerating every spanning-tree subset
- Constraints: domain unchanged (2 ≤ n ≤ 100, ≤ min(200, n(n-1)/2) edges, 1 ≤ weight ≤ 1000, distinct pairs), presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — both SVGs' geometry encodes the graphs; the trim arithmetic, the `index · weight` labels and the source's white-overdraw mini-template trick were recovered and re-emitted in `.localonly/e04/fig_1489.py`; label/line collisions audited geometrically and the renders eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate flags whole edge triples from the source statement
  (`[2,3,2]`, `[0,3,2]`, …): with weighted-edge examples, pick example
  weights that dodge every source triple — my first all-weight-2 square
  collided on two triples and was reweighted to 4.
- Example 1's original panel had four mini MSTs; the new example admits
  only two MSTs, and the emitter sized the right-hand column for two
  panels — the multi-panel grammar survives smaller MST counts fine.
