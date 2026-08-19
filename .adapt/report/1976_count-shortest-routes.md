## 1976 — Number of Ways to Arrive at Destination

- New id / title / slug: 1976 / Count Shortest Routes / `count-shortest-routes`
- Old → new API: `countPaths` → `countShortestRoutes` (go `countShortestRoutes`, rust `count_shortest_routes`, ts `countShortestRoutes`); parameters `n`, `roads` kept
- Core algorithm / difficulty: Dijkstra with parallel path counts, O(E log V) / H3 (unchanged)
- Statement rewritten from spec: yes (city framing lightened to junctions/roads; same guarantees)
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `n=6` four-hub graph → 4, `n=3` triangle with losing direct edge → 1, `n=4` two tied routes → 2
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — example-1.svg is a node-link drawing whose positions and edge labels encode the example graph; no renderer for the family. Phase two may redraw.
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Nested `roads` triples dodge the stale-literal regex (outer brackets
  contain brackets), but each inner triple like `[0,1,2]` from the source's
  example 1 IS a forbidden substring — several natural weight-1 hub designs
  collided with source triples; check candidate triples against the source
  example before committing.
- Brute force = DFS over all simple paths (weights positive, so shortest
  routes are simple).
