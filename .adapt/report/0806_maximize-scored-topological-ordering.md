## 806 — Maximum Profit from Valid Topological Order in DAG

- New id / title / slug: 806 / Maximize Scored Topological Ordering / `maximize-scored-topological-ordering`
- Old → new API: `maxProfit` → `maxScoredOrdering` (go `maxScoredOrdering`, rust `max_scored_ordering`, ts `maxScoredOrdering`); parameters `n`, `edges`, `score` kept as conventional identifiers
- Core algorithm / difficulty: subset DP over seated-node bitmasks with predecessor-mask legality tests, plus a sorting fast path for the edge-free case / H4 (unchanged)
- Statement rewritten from spec: yes (profit reframed as "seats" and value)
- Examples newly constructed: yes (structure-preserving: yes — same two topologies, relabeled)
  - `n=2 edges=[[1,0]] score=[5,3]` (forced order), `n=3 edges=[[1,0],[1,2]] score=[6,1,3]` (real choice between the two children)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated (2) — same arrow geometries as the source with node ids,
  scores, positions, and captions re-emitted; ex1's edge now runs 1 → 0, so the
  arrow is mirrored and the labels swapped.
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Stale literals forced the relabeling.** The source's example blocks make
  the edge `[0,1]` (and `[0,2]`) an identifying literal — any 2-node example
  `0 → 1` or 3-node star out of node 0 is impossible to state. Both examples
  therefore use edges out of node 1 (`[[1,0]]`, `[[1,0],[1,2]]`), which
  preserves the drawn shapes while changing every literal.
- Expected values computed with the adapted `solution.py` and cross-checked
  against a brute force over all topological orders (all matched).
