## 2476 — Closest Nodes Queries in a Binary Search Tree

- New id / title / slug: 2476 / Floor and Ceiling in a Search Tree / `floor-and-ceiling-in-a-search-tree`
- Old → new API: `closestNodes` → `floorCeilPairs` (go `floorCeilPairs`, rust `floor_ceil_pairs`, ts `floorCeilPairs`); parameters `root`, `queries` kept
- Core algorithm / difficulty: iterative inorder flatten to a sorted array, then `bisect_left`/`bisect_right` per query for the floor/ceiling pair with `-1` end guards / H2 (unchanged)
- Statement rewritten from spec: yes (mini/maxi relabeled as floor/ceiling — the standard independent vocabulary for the same relation)
- Examples newly constructed: yes (structure-preserving: yes)
  - `root [18,7,40,3,10,22,52,null,null,null,null,null,null,45] queries [7,30,60]` → `[[7,7],[22,40],[52,-1]]` (same 14-slot shape; new BST values assigned so the inorder of the drawn positions stays ascending: 3,7,10,18,22,40,45,52), `[8,null,21] queries [5]` → `[[-1,8]]` (two-node shape, no-floor case)
  - the builder asserts the relabeled tree really is a BST before writing the case
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — node values, queries/answers annotations, and the no-floor caption; circle/edge geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- BST figures constrain the relabel beyond uniqueness: the values must
  ascend in the drawing's inorder position order. Easiest safe recipe: walk
  the drawn positions inorder, assign any increasing sequence to them.
- Second stray-thought leak into a statement draft this chunk (a "Wait —"
  line), plus a genuine bug it flagged: the output of a single-query example
  is `[[-1,8]]`, not `[-1,8]`. Both caught by reading the draft end to end
  before the gates.
