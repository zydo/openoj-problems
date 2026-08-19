## 2493 — Divide Nodes Into the Maximum Number of Groups

- New id / title / slug: 2493 / Deepest Valid Grouping of a Graph / `deepest-valid-grouping-of-a-graph`
- Old → new API: `magnificentSets` → `deepestGrouping` (go `deepestGrouping`, rust `deepest_grouping`, ts `deepestGrouping`); parameters `n`, `edges` kept
- Core algorithm / difficulty: per-component BFS from every root, sum of max depths, odd-cycle detection inside the BFS / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes for Example 1 — the graph is an isomorphic relabel of the drawn one (node map 1→3, 2→6, 3→2, 4→5, 5→1, 6→4), so both figures needed only label edits)
  - `n=6`, edges `[[1,3],[2,6],[3,5],[3,6],[4,5],[4,6]]` → 4 (four groups {1},{3},{5,6},{2,4}), `n=6`, edges `[[1,2],[3,4],[5,6]]` → 6 (three disjoint pairs, answers add), `n=5`, edges `[[1,2],[2,4],[1,4],[3,5]]` → -1 (triangle blocks any grouping)
- Constraints: domain unchanged, presentation rewritten (placeholder pair renamed `[ai, bi]` → `[u, v]`; `[ai,bi]` is a stale-gate literal)
- Skeletons regenerated: all 7
- Figures: labels updated (example-1 and solution-bfs-layering — geometry, edge lines, band layout untouched; only node labels and the "BFS from node" caption changed)
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- For pure-graph problems the only "value" freedom under a fixed figure is
  node relabeling: the drawn edge lines encode incidence, so a non-isomorphic
  example would need geometry edits (unsanctioned). An isomorphic relabel via
  a fixed permutation keeps both figures alive and yields a byte-distinct
  input with a fresh explanation. Where that feels too thin, the alternative
  is dropping the figure — here the figures genuinely teach (group frames,
  BFS bands), so I kept them and gave Examples 2 and 3 entirely different
  shapes (disconnected sum, odd cycle).
- Example 3 explains the -1 through the triangle directly rather than the
  source's walk-through of a failed assignment.
