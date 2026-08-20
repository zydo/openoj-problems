## 384 — Critical Connections in a Network

- New id / title / slug: 384 / Bridge Edges in a Connected Graph / `bridge-edges-in-a-connected-graph`
- Old → new API: `criticalConnections` → `findBridges` (go `findBridges`, rust `find_bridges`, ts `findBridges`); parameters `n` kept, `connections` → `edges`
- Core algorithm / difficulty: Tarjan disc/low bridge search, sorted output / H4 (unchanged)
- Statement rewritten from spec: yes (the server-network scenario dropped; plain graph language, bridges defined as links whose removal disconnects)
- Examples newly constructed: yes (structure-preserving: yes — both figures keep the triangle-plus-pendant geometry)
  - `n=4 [[0,2],[2,3],[3,0],[2,1]]` → `[[1,2]]` (figure keeps the drawn cycle + pendant; nodes relabeled 1→2→3→1); `n=5` ring with chord → `[]` (no bridge); `n=3 [[2,1],[1,0]]` chain → both links
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1.svg: four node labels, cycle comment, caption reworded (server → node, edge (1,2)); solution-bridge.svg: same relabel plus "bridge [1, 2]", "cycle 0–2–3", and the caption's disc/low numbers follow the new labels; no geometry touched
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First candidate example 1 reused a hidden case's graph up to edge order
  ([[0,1],[0,2],[1,2],[2,3]]); relabeling the cycle to 0-2-3 with pendant
  node 1 kept the figure's geometry while moving off that graph.
- `comparison` stays `exact` with a sorted reference output — the judged
  semantics are carried over untouched, so the statement says order does not
  matter only because the reference canonicalizes; kept the source's
  "any order" honesty since expected values are sorted pairs.
