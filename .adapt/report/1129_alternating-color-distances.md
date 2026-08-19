## 1129 — Shortest Path with Alternating Colors

- New id / title / slug: 1129 / Alternating Color Distances / `alternating-color-distances`
- Old → new API: `shortestAlternatingPaths` → `alternatingColorDistances` (go `alternatingColorDistances`, rust `alternating_color_distances`, ts `alternatingColorDistances`); parameters `n`, `redEdges`, `blueEdges` kept
- Core algorithm / difficulty: BFS over (node, last-color) states, dual-color seeding / H3 (unchanged)
- Statement rewritten from spec: yes (red/blue edge classes are the task's data, kept; prose, examples, hints fresh)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=4` red `[[0,2],[3,1]]` blue `[[2,3]]` → `[0,3,1,2]` (3-edge alternating chain); `n=4` red `[[0,2],[2,3]]` blue `[[0,3]]` → `[0,-1,1,1]` (both colors usable first, isolate stays -1); `n=4` red `[[0,2],[2,3]]` blue `[[3,2]]` → `[0,-1,1,-1]` (node visible but alternation-blocked)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate pins `[0,1]`, `[1,2]`, `[2,1]`, and the output `[0,1,-1]`
  — i.e. every graph example that uses the 0→1 edge, plus the most natural
  small output, is off limits. All three examples were rebuilt around
  edges like `[0,2]`/`[3,1]` and outputs of length 4.
- Example 1 drafted by hand had a broken last hop (blue after blue);
  running the reference before writing prose caught it, and the replacement
  is a true red–blue–red chain.
