## 397 — Tree Diameter

- New id / title / slug: 397 / Widest Tree Path From an Edge List / `widest-tree-path-from-an-edge-list`
- Old → new API: `treeDiameter` → `widestTreePathFromEdges` (go `widestTreePathFromEdges`, rust `widest_tree_path_from_edges`, ts `widestTreePathFromEdges`); parameter `edges` kept
- Core algorithm / difficulty: double BFS — farthest node from any start is a diameter endpoint, eccentricity of that node is the diameter / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: the two figured examples keep the drawn tree shapes exactly and relabel the node ids — 0→4, 1→0, 2→5, 3→2, 4→1, 5→3 for the six-node one — so each figure needed only label edits; answers are shape-determined and unchanged)
  - `[[0,2],[1,2]]` → 2 (star, center relabeled); `[[4,0],[0,5],[5,2],[0,1],[1,3]]` → 4 (same shape as the source's six-node figure, side branch loses); `[[3,0],[0,2],[2,1]]` → 3 (bare chain, no figure)
- Constraints: domain unchanged (`n == edges.length + 1`, `1 <= n <= 10^4`, labels `0..n-1`, no self-loops), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1.svg and example-2.svg (node ids + captions); solution figure relabeled with dist-from-0 | dist-from-3 recomputed for the new ids (1|3, 0|2, 1|3, 2|4, 1|1, 2|0) and renamed `solution-tree-diameter.svg` → `solution-two-sweeps.svg`
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate flags the old *slug* wherever it appears, and the scaffold
  copies figure filenames verbatim — any `solution-<old-slug>.svg` must be
  renamed with its references. First hit of this class in the wave.
- Second alt-text overlap failure (see 1235): figure captions in the source
  statement are prose and count toward the 7-word shingle overlap; rewriting
  alt text in a different sentence shape cleared it.
- Node relabeling is the blessed structure-preserving move for tree figures:
  same drawn shape, new ids, figure = label edit.
