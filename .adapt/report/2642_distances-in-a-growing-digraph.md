## 2642 — Design Graph With Shortest Path Calculator

- New id / title / slug: 2642 / Distances in a Growing Digraph /
  `distances-in-a-growing-digraph`
- Old → new API: none — class `Graph` and methods `addEdge`,
  `shortestPath` kept (unavoidable generic terms, like 0704 Binary Search);
  parameters `n`, `edges`, `edge`, `node1`, `node2` kept
- Core algorithm / difficulty: adjacency list + per-query Dijkstra with
  early exit at the destination / H3 (unchanged)
- Statement rewritten from spec: yes (nodes/arcs/costs framing, all prose
  new)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - two competing routes, a reverse query over a cycle, an added arc that
    opens a shortcut, and a self-distance query
  - a two-arc cycle with an isolated node: unreachable both ways, both
    cycle directions, self-distance 0
  - an added arc is the only thing that makes the target reachable
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) sandbox pending
  (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: design kind, deferred to batch run

### Notes

- First attempt renamed `Graph` → `GrowingDigraph` and the stale gate
  failed on `problem.json`: the kept `"tags": ["Graph", ...]` matches the
  renamed class name. The tag is a kept functional field, so this is a
  real limitation of the gate's model — but it also surfaced that `Graph`
  is exactly the "unavoidable generic term" ADAPT.md §Naming allows
  keeping, so the class (and the generic `addEdge`/`shortestPath`) stayed
  and the api map is empty, matching the 0704 precedent. Main agent may
  want a gate exclusion for kept tag strings if a future coinage collides
  with a tag word.
- Hidden-case `actions` strings unchanged (`Graph` kept); params and
  expected values untouched.
