## 1334 — Find the City With the Smallest Number of Neighbors at a Threshold Distance

- New id / title / slug: 1334 / Most Isolated Node Under a Reach Budget / `most-isolated-node-under-a-reach-budget`
- Old → new API: `findTheCity` → `findMostIsolated` (go `findMostIsolated`, rust `find_most_isolated`, ts `findMostIsolated`); `distanceThreshold` → `budget`; `n`, `edges` kept
- Core algorithm / difficulty: Floyd-Warshall all-pairs + min-count scan with greatest-index tie-break / H3 (unchanged)
- Statement rewritten from spec: yes (cities → nodes, threshold → reach budget)
- Examples newly constructed: yes (structure-preserving: yes — both figures kept their drawn node layout and edge set, weights and panel text re-labeled)
  - `n=4 [[0,1,4],[1,2,1],[1,3,5],[2,3,2]] budget 5` → 3 (tie 0/3), `n=5 [[0,1,1],[0,4,5],[1,2,4],[1,4,4],[2,3,2],[3,4,2]] budget 4` → 0 (unique min), `n=3 [[0,1,4],[1,2,5]] budget 4` → 2 (empty neighborhood)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — edge weights, budget wording, and the reachable-set side panels re-derived; node positions, edges, and answer highlighting untouched
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First stale-gate failure of the wave: the gate collects each `[u,v,w]`
  triple of the source examples as a separate literal, so my first
  example-2 kept three of the source's triples verbatim
  (`[0,1,2]`, `[1,2,3]`, `[2,3,1]`) while only re-weighting the rest.
  Fixed by re-choosing weights (and re-deriving the panel sets) so no
  triple matches. Triples with only two distinct digits (`[1,2,1]`,
  `[1,4,4]`, `[2,3,2]`) are exempt from the gate.
- Neighborhood counts for every example were recomputed with an independent
  Dijkstra brute force, not by hand — my first manual count missed that
  node 1 also reaches node 3 at cost exactly 4.
