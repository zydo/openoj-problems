## 328 — Next Greater Node In Linked List

- New id / title / slug: 328 / Next Greater, List Nodes / `next-greater-list-nodes`
- Old → new API: `nextLargerNodes` → `nextGreaterListNodes` (go `nextGreaterListNodes`, rust `next_greater_list_nodes`, ts `nextGreaterListNodes`); parameter `head` kept
- Core algorithm / difficulty: monotonic decreasing stack of indices after one list-to-array pass / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[4,3,9]` → `[9,9,0]` and `[3,8,5,2,6]` → `[8,0,6,6,0]` — both chosen so the next-greater mapping (which arcs depict) is identical to the source examples, so both figures needed only label and caption edits
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both `example-1.svg`, `example-2.svg`: node values, answer row, comment, caption; arcs and pitch untouched)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title follows the pre-decided next-greater family convention
  (`Next Greater, Query Values` 0496, `Next Greater, Circular Array` 0503,
  `Next Greater, Second Match` 2454); method `nextGreaterListNodes` matches the
  family's `nextGreater<Qualifier>` pattern.
- Overlap gate initially failed at 19% purely on the figure alt texts, which I
  had written in the source's own rhythm. Rewriting the alt texts as plain
  scene descriptions (no "and the answers ... beneath" formula) fixed it —
  worth doing up front for every figure-bearing statement.
- The arcs in these SVGs are hand-tuned quadratics with no recoverable layout
  formula, but structure-preserving examples make that moot: the arc topology
  is the answer mapping, so keep it identical.
