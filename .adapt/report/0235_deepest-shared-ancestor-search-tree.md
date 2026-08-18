## 0235 — Lowest Common Ancestor of a Binary Search Tree

- New id / title / slug: 235 / Deepest Shared Ancestor, Search Tree / `deepest-shared-ancestor-search-tree`
- Old → new API: `lowestCommonAncestor` → `deepestSharedAncestor` (go `deepestSharedAncestor`, rust `deepest_shared_ancestor`, ts `deepestSharedAncestor`); parameters `root`, `p`, `q` kept
- Core algorithm / difficulty: single root-to-node descent driven by the BST ordering / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same 9-node/11-slot tree shape as the figures)
  - `[50,20,70,10,35,60,90,null,null,28,41] p=20 q=70 → 50` (split at the root),
    same tree `p=20 q=35 → 20` (one target above the other),
    `[14,6,21,3,9,17,28] p=17 q=28 → 21` (split below the root)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both `example-*.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family with 0236 (the general-binary-tree version); the pair was named together
  as `Deepest Shared Ancestor, Search Tree` / `Deepest Shared Ancestor, Binary
  Tree`, following the comma-suffix shape already used for the pinned families
  (`Count Grid Islands, Land Updates`). Both statements were written from a shared
  spec so their framing agrees: "among the nodes whose subtree contains both,
  return the one furthest from the root".
- The phrase "lowest common ancestor" was dropped entirely rather than kept as a
  term of art. It is not unavoidable here — the property can be stated directly
  ("furthest from the root among the nodes whose subtree holds both") — and the
  source statement leans on a quoted Wikipedia definition that a rewrite must not
  reproduce.
- Both figures are pure label edits: the drawing fixes a tree *shape*, and any BST
  with that shape works, so the new values were chosen to keep the shape and the
  three highlighted roles (root / left child / right child in Example 1, left child
  and its right child in Example 2) exactly where the SVG puts them. The array in
  the SVG comment and the caption text are data too — both were updated.
