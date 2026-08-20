## 260 — Is Graph Bipartite?

- New id / title / slug: 260 / Two-Colorable Graph / `two-colorable-graph`
- Old → new API: `isBipartite` → `isTwoColorable` (go `isTwoColorable`, rust `is_two_colorable`, ts `isTwoColorable`); parameter `graph` kept
- Core algorithm / difficulty: 2-colouring by traversal, or union-find over each node's neighbour set / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both figures kept their 4-node square layout)
  - `[[1,3],[0,2,3],[1],[0,1]]` → false (triangle 0-1-3 with a pendant node)
  - `[[1],[0,2],[1,3],[2]]` → true (four-node chain)
  - `[[2],[3],[0,4],[1],[2]]` → true (two components, exercises the restart loop)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — same canvas, same four node positions, same palette; one square edge deleted in each drawing, node labels/fills reassigned, captions rewritten
- Gates: check ✓ verify ✓ (14/14 language×variant runs, 17/17 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- A four-node square figure forces the example to be a 4-cycle (example 2) or
  K4-minus-an-edge (example 1), and both of those are relabellings of the
  source's own examples. Deleting one drawn edge escapes that: the square
  becomes a path, and the square-plus-diagonal becomes a triangle with a
  pendant. Both are pure attribute edits inside the existing SVG, so the figures
  survive without a redraw and the examples are genuinely new graphs.
- The stale gate extracts bracketed literals of 3+ distinct characters from the
  source's ```text blocks: `[1,2,3]` and `[0,1,3]` here. Any adjacency list of
  degree 3 on four nodes is one of four such triples, so two of the four were
  unusable — worth checking before settling on an example, not after.
- Variant ids `dfs_color` / `union_find` and their `solutions.md` headings are
  unchanged. Solution comments saying "bipartite" were retyped as
  "two-colorable" so the code matches the new title; nothing else in the
  solutions was touched.
