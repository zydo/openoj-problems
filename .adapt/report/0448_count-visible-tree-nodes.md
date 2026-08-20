## 448 — Count Good Nodes in Binary Tree

- New id / title / slug: 448 / Count Visible Tree Nodes / `count-visible-tree-nodes`
- Old → new API: `goodNodes` → `countVisibleNodes` (go `countVisibleNodes`, rust `count_visible_nodes`, ts `countVisibleNodes`); parameter `root` kept; "good node" renamed **visible** throughout, comments included
- Core algorithm / difficulty: DFS carrying the running path maximum / H1 (unchanged)
- Statement rewritten from spec: yes — visibility is defined by "nothing strictly greater above", with equality explicitly not blocking
- Examples newly constructed: yes (structure-preserving: **yes** — same tree shapes as both figures and the same shading pattern, so all three SVGs needed value edits only)
  - `[5,2,6,5,null,2,7] → 4` (equality case included), `[4,6,null,7,5] → 3`, `[-4] → 1` (negative lone node); brute-force cross-checked; no overlap with hidden cases
- Constraints: domain unchanged, presentation rewritten as prose bullets
- Skeletons regenerated: all 7
- Figures: labels updated — node values, legends ("blue = visible") and captions; renders verified
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The `tree_node` codec's public cases are level-order arrays; the
  case-generator needs its own decoder — build the child queue from
  `nodes[1:]`, not from all non-null nodes, or the root becomes its own left
  child and the reference loops forever (cost one hung run).
- The word "good" survives inside solution comments ("still good") after a
  `\bgoodNodes\b` rename; renaming the *concept* means rewording those by
  hand, as with 1434's hat comments.
