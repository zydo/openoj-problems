## 2360 — Longest Cycle in a Graph

- New id / title / slug: 2360 / Longest Cycle in a Functional Graph / `longest-cycle-in-a-functional-graph`
- Old → new API: none — `longestCycle` (rust `longest_cycle`) kept; the source name is the unavoidable generic term for the task, and it matches the new title
- Core algorithm / difficulty: timestamped iterative walks, three-color marking, `timer - step[node]` cycle length in a functional graph / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[1,2,0,1] → 3` (tail into a cycle), `[1,-1,1] → -1`, `[3,2,1,4,5,3] → 3` (two disjoint cycles)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both example figures place nodes and route arrows from the source data (geometry encodes it); no renderer for the family
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
