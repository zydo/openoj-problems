## 720 — Find Polygon With the Largest Perimeter

- New id / title / slug: 720 / Largest Polygon Perimeter / `largest-polygon-perimeter`
- Old → new API: `largestPerimeter` → `maxPolygonPerimeter` (go `maxPolygonPerimeter`, rust `max_polygon_perimeter`, ts `maxPolygonPerimeter`); parameter `nums` kept
- Core algorithm / difficulty: sort descending-scan — drop each hopeless longest side, return the first prefix whose remainder outweighs its max / H2 (unchanged)
- Statement rewritten from spec: yes — the closure condition (longest < sum of the rest) stated as the rule itself; the sufficiency preamble of the source compressed into one clause
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,4,4,4] → 16` (full selection closes), `[2,9,1,30,4,3] → 19` (30 discarded, pentagon 9 < 10), `[3,3,100] → -1` (impossible) — all brute-verified by subset enumeration with the polygon inequality
- Constraints: domain unchanged (3 ≤ n ≤ 10⁵, 1 ≤ nums[i] ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title keeps the unavoidable generic terms (polygon, perimeter) per
  ADAPT.md §Naming while trimming the LeetCode "Find ... With the"
  construction.
