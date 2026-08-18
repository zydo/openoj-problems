## 0102 — Binary Tree Level Order Traversal

- New id / title / slug: 102 / Group Tree By Depth / `group-tree-by-depth`
- Old → new API: `levelOrder` → `groupTreeByDepth` (go `groupTreeByDepth`, rust `group_tree_by_depth`, ts `groupTreeByDepth`); parameter `root` kept
- Core algorithm / difficulty: BFS queue, one depth drained per round / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — same five-node tree shape, new values)
  - `[8,4,11,null,null,2,30]` → `[[8],[4,11],[2,30]]`; `[7,null,4]` → `[[7],[4]]` (left branch empty); `[]` → `[]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — both figures. Node values, output lists, queue-evolution lines, header input, footer output string. Chose two-digit values where the source had two-digit values so circle centering holds.
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- Tree figures are label-editable after all, as long as the *shape* is kept:
  edges and circle positions are geometry, but values sit in `<text>` nodes.
  The family note in ADAPT.md ("tree shapes ... encode the data") applies
  only when the new example changes the shape.
- Kept digit-width parity per node label (e.g. `11` for the old `20`) so
  text stays centered in its circle.
