## 809 — Minimum Weighted Subgraph With the Required Paths II

- New id / title / slug: 809 / Least-Weight Subtree Joining Three Nodes / `least-weight-subtree-joining-three-nodes`
- Old → new API: `minimumWeight` → `leastSubtreeWeight` (go `leastSubtreeWeight`, rust `least_subtree_weight`, ts `leastSubtreeWeight`); parameters `edges`, `queries` kept
- Core algorithm / difficulty: `(d(a,b)+d(b,c)+d(c,a))/2` over pairwise tree distances via iterative DFS + binary-lifting LCA / H3 (unchanged)
- Statement rewritten from spec: yes (queries reframed as `[aj, bj, tj]` three-distinct-nodes; roles are symmetric in a tree)
- Examples newly constructed: yes (structure-preserving: yes, via renumbering)
  - `[[0,3,4],[3,1,6],[3,2,7],[3,4,3],[1,5,5]] queries [[1,2,4],[0,1,5]]` → `[16,15]` (same drawn shape, renumbered; kept-edge sets match the blue highlights), path `[[4,2,6],[2,0,9]] query [4,2,0]` → `[15]`, star `[[0,1,4],[0,2,6],[0,3,8],[0,4,3]] query [1,2,4]` → `[13]` (no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — weights, node ids (renumbered), query headers/comments, role annotations moved to the new query nodes; blue kept-edge geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate squashes spaces and matches source ```text arrays as exact
  substrings, so a query written `[2,0,5]` is safe but the SAME triple in an
  SVG comment with spaces (`query [0, 2, 5]`) squashes to a hit. Two traps
  bit here: (1) per-panel comments duplicate the query text — grep the whole
  SVG, not just visible text nodes; (2) any 3-number list whose exact
  character sequence matches a source array (including in comments) flags.
  Multiset permutations are fine; identical sequences are not.
- A query triple's node SET determines the highlighted geometry (the Steiner
  tree), so renumbering was the only way to keep the figure while changing
  the query literals; on a 3-node path any renumbering is impossible (ids are
  forced 0,1,2), but permuting the triple inside brackets suffices there.
- Sibling 2203 ("... Required Paths I", graph version) is unadapted so far;
  whoever takes it should keep the family recognizable — e.g. a
  "Least-Weight Subnetwork Joining Three Nodes" for the graph twin.
- One iteration cost: E3 first named node 4 in a 4-node tree — the generator
  crashed on index error. Cheap lesson: run the generator before writing the
  statement around it.
