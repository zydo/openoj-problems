## 0236 — Lowest Common Ancestor of a Binary Tree

- New id / title / slug: 236 / Deepest Shared Ancestor, Binary Tree / `deepest-shared-ancestor-binary-tree`
- Old → new API: `lowestCommonAncestor` → `deepestSharedAncestor` (go `deepestSharedAncestor`, rust `deepest_shared_ancestor`, ts `deepestSharedAncestor`); parameters `root`, `p`, `q` kept
- Core algorithm / difficulty: bottom-up recursion returning the target a subtree met, joining at the first node whose two sides each report / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same 9-node/11-slot tree shape as the figures)
  - `[11,26,4,19,7,33,2,null,null,15,38] p=26 q=4 → 11` (split at the root),
    same tree `p=26 q=38 → 26` (one target two levels above the other),
    `[8,22,5,14,9] p=14 q=9 → 22` (join below the root)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `example-2.svg`, `solution-subtree-meet.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family with 0235 (the search-tree version), named as a pair — see that report
  for the reasoning. The two statements share the same opening sentence pattern
  and the same "a subtree includes its own root" clause, then diverge on the one
  fact that separates the problems: 0235 states the ordering, 0236 states that no
  ordering may be assumed. The hints and guides diverge completely, because the
  algorithms do.
- The values were chosen to be visibly *un*sorted for this one (`11` above `26`),
  so a reader cannot mistake the example for a search tree and reach for 0235's
  descent.
- `solution-subtree-meet.svg` walks the example tree, so it needed the same label
  pass as the two example figures — including the shaded-subtree annotations
  `p = …` / `q = …` and the caption. The shading rectangles are positional, not
  data-bearing, so no geometry moved.
- Comments in all seven `solution.*` files said "so this is the LCA"; that is old
  terminology naming the source title, and was rewritten to "so this is the
  answer" in every language.
