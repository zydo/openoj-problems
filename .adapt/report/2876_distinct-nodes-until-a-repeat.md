## 2876 — Count Visited Nodes in a Directed Graph

- New id / title / slug: 2876 / Distinct Nodes Until a Repeat / `distinct-nodes-until-a-repeat`
- Old → new API: `countVisitedNodes` → `countDistinctUntilRepeat` (go `countDistinctUntilRepeat`, rust `count_distinct_until_repeat`, ts `countDistinctUntilRepeat`); parameter `edges` kept
- Core algorithm / difficulty: functional-graph decomposition — per-piece walk recording, cycle split inside the path, tail nodes answered as cycle length + distance / H3 (unchanged)
- Statement rewritten from spec: yes — the process is described as a walk that stops at its first repeat, which is what the count actually measures
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[1,2,3,0,2,4] → [4,4,4,4,5,6]` (4-cycle, two-node tail), `[1,0,3,2,0,2] → [2,2,2,2,3,3]` (two independent pieces), `[2,3,4,1,1] → [5,2,4,2,3]` (rho) — all brute-verified by direct simulation per start
- Constraints: domain unchanged (n edges, 2 ≤ n ≤ 10⁵, edges[i] ≠ i), presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — three SVGs (example-1, example-2, solution-functional-graph) all draw the source examples' arrow geometry, which is the data; the solutions.md figure reference went with them
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's solutions.md embedded a figure mid-exposition; dropping it
  also meant writing that paragraph without the visual crutch — worth
  remembering for other bundles whose guides carry figures.
