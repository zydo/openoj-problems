## 2313 — Minimum Flips in Binary Tree to Get Result

- New id / title / slug: 2313 / Leaf Flips to Reach a Root Value / `leaf-flips-to-reach-a-root-value`
- Old → new API: `minimumFlips` → `minLeafFlips` (go `minLeafFlips`, rust `min_leaf_flips`, ts `minLeafFlips`); parameters `root`, `result` kept (conventional)
- Core algorithm / difficulty: iterative bottom-up tree DP on `(t, f)` min-flip pairs, reverse-BFS order for 10⁵-deep safety / H3 (unchanged)
- Statement rewritten from spec: yes — evaluation and flip rules restated from the spec; operator code mapping 2/3/4/5 → OR/AND/XOR/NOT kept (functional fact)
- Examples newly constructed: yes (structure-preserving: yes — same 9-node tree shape, inner OR→AND and leaves relabeled, so both figures stayed label edits)
  - `[3,5,4,3,null,1,1,1,1], true → 2` (flip one leaf under the NOT, one of the XOR), `[4,0,0], true → 1` (XOR of equal leaves)
- Constraints: domain unchanged (1–10⁵ nodes, values 0–5, arity rules), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1 (operator labels, before/after leaf values, comment), solution-tree-dp-pairs (inner node 2→3, a leaf 0→1, OR→AND, one (t,f) badge). The new example was chosen so every other badge value already matched
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 30/30 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- The overlap gate flagged my *constraints section* — I had copied the
  source's bullets verbatim ("Leaf nodes have a value of `0` or `1`",
  "`NOT` nodes have 1 child"). Constraint bullets are prose like any
  other: same numbers, freshly worded. Second overlap lesson in this
  wave; constraints now get the same rewrite attention as the body.
- Expression-tree figures tolerate *operator* relabels, not just value
  relabels — picking a new example that changes an internal operator
  (OR→AND) kept the drawn geometry untouched while making the DP walk
  genuinely different (different leaf costs, same root answer).
- Trivial SVG lesson: assert on `>OR<` (element text), not the substring
  `OR` — `XOR` contains it. And tags on separate lines need per-tag
  replaces, not one combined string.
