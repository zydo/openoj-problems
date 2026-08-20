## 563 — Valid Arrangement of Pairs

- New id / title / slug: 563 / Link Pairs Into One Chain / `link-pairs-into-one-chain`
- Old → new API: `validArrangement` → `linkPairsIntoOneChain` (go `linkPairsIntoOneChain`, rust `link_pairs_into_one_chain`, ts `linkPairsIntoOneChain`); parameter `pairs` kept (conventional)
- Core algorithm / difficulty: Eulerian trail by iterative Hierholzer — adjacency map + degree counters, out−in=1 start (else `pairs[0][0]`), stack with dead-end unwind, reversed path re-paired / H4 (unchanged)
- Statement rewritten from spec: yes — "valid arrangement" recast as putting all entries into **one chain** where each `to` feeds the next `from`; any-answer semantics stated
- Examples newly constructed: yes (structure-preserving: yes — E1 is a 4-edge chain like the source's, keeping the solution figure's geometry)
  - `[[8,2],[2,5],[7,3],[3,8]] → [[7,3],[3,8],[8,2],[2,5]]` (unique chain 7→3→8→2→5), `[[2,4],[4,6],[6,2]]` (closed cycle, input order works), `[[5,9],[5,3],[3,5],[9,5]] → [[5,3],[3,5],[5,9],[9,5]]` (branching node 5, stack-order-dependent output)
- Constraints: domain unchanged (1–10⁵ entries, values 0–10⁹, `from != to`, distinct entries, answer exists), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `figures/solution-euler-walk.svg` (solution-kind) keeps its chain/degree-table/stack-strip geometry; all node values, stack strip, and captions re-pointed at 7→3→8→2→5
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `comparison` is `exact` on an any-answer problem: expected values were
  produced by running the reference algorithm itself (line-identical logic
  in a scratch script), then chained-validity asserted independently. The
  verify gate confirms the bundle solutions reproduce them byte-for-byte.
- E3's output depends on the adjacency pop order (dead-end unwind): its
  expected sequence was machine-derived, and the solutions.md walkthrough
  of that unwind was traced against the script before publishing.
- The solution figure's step markers (1–4 above edges) and degree table
  ("out 1 · in 0" etc.) are chain-generic and needed no changes.
