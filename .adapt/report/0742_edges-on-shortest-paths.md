## 742 — Find Edges in Shortest Paths

- New id / title / slug: 742 / Edges on Shortest Paths / `edges-on-shortest-paths`
- Old → new API: `findAnswer` → `shortestPathEdges` (go `shortestPathEdges`, rust `find_answer` → `shortest_path_edges`, ts `shortestPathEdges`); parameters `n`, `edges` kept
- Core algorithm / difficulty: two Dijkstra runs (from `0` and from `n - 1`), each edge tested as `dist0[u] + w + distN[v] == total` in both orientations / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both drawn graphs kept: same nodes, positions, and edge pairs; only weights, edge colors, and distance labels changed)
  - ex1 weights `[2,5,3,1,4,6,1,3]` → distance 6, three shortest paths (0-1-5, 0-1-3-5, 0-1-4-5), true set `{0,2,3,4,6,7}` → `[true,false,true,true,true,false,true,true]`
  - ex2 weights `[4,6,2,5]` → the direct 0-3 edge is the unique shortest path, true set `{2}` → `[false,false,true,false]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (plus edge regrouping) — `example-1.svg` / `example-2.svg`: comment data, weight labels, d labels, captions, and blue/gray `<line>` groups moved onto the new true sets; `solution-two-dijkstra.svg`: weights, d0/d5 labels, legend total 6, and the worked exclusion example (0→2: 0 + 5 + 7 = 12 ≠ 6)
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 15/15 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Caveat (a) of the blocked-f.md re-dispatch notes is honored: both expected
  arrays differ from the source literals, and the SVG blue/gray groups were
  regrouped accordingly. Note that the wave-f-05 scratch `search3123.py`
  searched for weights with the *same* true set as the source — that approach
  can never satisfy the stale gate, since the expected array itself is a source
  literal. The replacement search (`.localonly/wave-f-07/search3123.py`)
  requires a different true set; both example searches live there.
- The re-dispatch identity (title "Edges on a Shortest Path", singular) was
  pluralized to "Edges on Shortest Paths" — the task marks every edge lying on
  *any* shortest path, and the singular reads as one fixed path.
- Example 1's three shortest paths share the prefix 0-1; variety comes from
  the three continuations. Its d labels repeat (two nodes at d 5), which the
  figure shows without ambiguity since labels sit next to their nodes.
