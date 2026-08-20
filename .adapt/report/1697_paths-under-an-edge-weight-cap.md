## 1697 — Checking Existence of Edge Length Limited Paths

- New id / title / slug: 1697 / Paths Under an Edge-Weight Cap / `paths-under-an-edge-weight-cap`
- Old → new API: `distanceLimitedPathsExist` → `pathsUnderCap` (go `pathsUnderCap`, rust `paths_under_cap`, ts `pathsUnderCap`); parameters `n`, `edgeList`, `queries` kept (`edges` was considered and rejected — the Python source declares a local `edges`, the 0587 trap)
- Core algorithm / difficulty: offline sweep — queries by cap, edges by weight, union-find merging strictly-below-cap edges / H3 (unchanged)
- Statement rewritten from spec: yes ("limit" becomes "cap", strictness stated once)
- Examples newly constructed: yes (structure-preserving: yes — both examples keep the figures' graph topology, only weights and caps changed)
  - `n=3, [[0,1,3],[1,2,7],[2,0,12],[1,0,20]]`, queries `[[0,1,3],[0,2,9],[0,1,4]]` → `[false,true,true]` (boundary equality, path via two edges, single qualifying edge)
  - `n=5, [[0,1,6],[1,2,11],[2,3,4],[3,4,19]]`, queries `[[0,4,20],[1,4,19],[2,4,19]]` → `[true,false,false]` (chain max under cap; equal-to-cap rejected twice)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `example-1.svg` kept its triangle-with-parallel-edge drawing (weights 3/7/12/20, caption now names query [0,2,9]); `example-2.svg` kept its 5-node chain (weights 6/11/4/19, the deciding edge still dashed blue)
- Gates: check ✓ verify ✓ (7/7 languages, 12/12 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Boolean outputs are fair game for the literal gate**: the source's
  `[false,true]` / `[true,false]` outputs count as identifying literals, and
  with two queries there are only four possible outputs — two of them are
  taken. Each example therefore carries three queries so its output vector
  (`[false,true,true]`, `[true,false,false]`) dodges both.
- The figures' highlighted/dashed edges still mark exactly the deciding edges
  after the weight swap, so no styling change was needed.
