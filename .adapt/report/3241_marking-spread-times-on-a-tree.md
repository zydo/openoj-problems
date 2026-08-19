## 3241 — Time Taken to Mark All Nodes

- New id / title / slug: 3241 / Marking Spread Times on a Tree / `marking-spread-times-on-a-tree`
- Old → new API: `timeTaken` → `spreadTimes` (go `spreadTimes`, rust `spread_times`, ts `spreadTimes`); parameter `edges` kept
- Core algorithm / difficulty: rerooting DP — downward `last`/`last_no`/`second`, upward `up`, answer = max of both sides; edge cost 1 into odd nodes, 2 into even / H4 (unchanged)
- Statement rewritten from spec: yes (parity rule restated from scratch, scenarios-independence kept explicit)
- Examples newly constructed: yes (structure-preserving: yes for example 3 — same drawn T shape, ids relabeled; example 1 regenerated as a 4-node star)
  - `[[3,0],[3,1],[3,2]]` → `[3,3,3,2]` (odd hub), `[[0,3],[3,1],[1,2]]` → `[4,3,4,3]` (alternating chain), `[[0,4],[0,3],[3,1],[3,2]]` → `[3,5,5,4,5]` (T with odd hub)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `example-1.svg` regenerated (4-node star — the source's 3-node star cannot be relabeled non-isomorphically), `example-3.svg` labels updated, `example-2.svg` **dropped** with its forced example
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Node ids carry semantics (odd/even), and `n = len(edges) + 1` pins the id
  set to `0..n-1`: a 2-node example is *always* the source's example
  (`[[0,1]]`, output `[1,2]`), and every 3-node star is parity-isomorphic to
  the source's. So the single-edge example and its figure were dropped, and
  the minimal example is a 4-node star with the odd node at the hub. Writing
  the source edge as `[1,0]` to dodge the stale scan would have been gaming,
  not constructing.
- The stale gate tracks the source's bracketed edge pairs as literals
  (`[0,1]`, `[0,2]`, `[2,3]`, `[2,4]`); the new example trees avoid all four
  strings while keeping ordinary small ids.
