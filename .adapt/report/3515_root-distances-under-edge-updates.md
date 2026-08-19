## 3515 — Shortest Path in a Weighted Tree

- New id / title / slug: 3515 / Root Distances Under Edge Updates / `root-distances-under-edge-updates`
- Old → new API: `treeQueries` → `rootDistances` (go `rootDistances`, rust `root_distances`, ts `rootDistances`); parameters `n`, `edges`, `queries` kept as conventional identifiers
- Core algorithm / difficulty: Euler tour flattening + Fenwick tree with range-add / point-query / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: partly)
  - Ex1 keeps the source's 2-node shape (label edit only); Ex2 and Ex3 needed
    different topologies (see Notes), drawn fresh on the same layout rules
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated (3) — ex1 reuses the source's two-node geometry with new
  weights; ex2 is a fresh two-level 5-node tree; ex3 a fresh 6-node chain at
  fixed 102px pitch. All carry verified answers in their comments.
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Stale literals forced the example shapes.** The source's example blocks
  make `[2,1]`, `[2,3]`, `[2,4]` (type-2 queries on nodes 1, 3, 4) identifying
  literals under the gate's substring rule — so no adapted file may contain
  them, and any example querying nodes 1/3/4 by their `[2, x]` encoding is
  impossible. Examples therefore query nodes 2, 5, and 6 only, which pushed
  Ex2/Ex3 to 5- and 6-node trees (a 3-node fork can never be asked about its
  interesting node). Worth a look by the main agent: small-node-number
  `[2, x]` literals are arguably a false-positive class, like the two-symbol
  alphabet lists already excluded.
- Expected values computed with the adapted `solution.py` and cross-checked
  against a per-query BFS brute force (all matched).
