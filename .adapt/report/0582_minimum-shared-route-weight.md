## 582 — Minimum Weighted Subgraph With the Required Paths

- New id / title / slug: 582 / Minimum Shared Route Weight / `minimum-shared-route-weight`
- Old → new API: `minimumWeight` → `minSharedRouteWeight` (go `minSharedRouteWeight`, rust `min_shared_route_weight`, ts `minSharedRouteWeight`); parameters `n`, `edges`, `src1`, `src2`, `dest` kept
- Core algorithm / difficulty: three Dijkstra runs (src1, src2 forward; dest on reversed graph), min over meeting nodes / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both figures kept with label edits)
  - Example 1 keeps the source graph's node set, edge set, roles, and highlighted subgraph; only the nine weights change (2,6,3,5,1,1,3,4,2 → 3,9,4,3,2,5,8,4,4), giving a unique optimum of 12 at meeting node 1 (verified against exhaustive subset enumeration, 2⁹ subgraphs)
  - Example 2 keeps the 3-node structure with weights 1,1 → 4,6, still -1
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Overlap gate earned its keep: I had reused the source's figure-caption
  phrasing ("Both edges point into node 1, so node 2...") verbatim in both
  the explanation and the alt text, plus "pairwise distinct" in the
  constraints — 11% vs the 6% limit. Rewrote all three; final pass clean.
- Figure captions inside statement.md count toward the shingle scan; alt
  text is prose like any other.
- Weight search was scripted: enumerate weightings that keep the blue
  subgraph optimal, then pick one with a unique optimum and varied values.
