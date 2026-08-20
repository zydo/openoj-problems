## 583 — Distance to a Cycle in Undirected Graph

- New id / title / slug: 583 / Distance From the Cycle / `distance-from-the-cycle`
- Old → new API: `distanceToCycle` → `distanceFromCycle` (go `distanceFromCycle`, rust `distance_from_cycle`, ts `distanceFromCycle`); parameters `n`, `edges` kept
- Core algorithm / difficulty: 2-core peel (degree-1 stripping) to expose the cycle, then multi-source BFS outward / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — node relabeling only)
  - Example 1 keeps the source's square-plus-tails drawing; nodes renumbered 0-1-2-3-4-5-6 → 1-2-4-5-6-3-0, giving input `[[2,4],[4,5],[5,6],[6,2],[1,2],[3,4],[0,3]]`, answer `[2,1,0,1,0,0,0]`
  - Example 2 keeps the triangle-with-two-stems drawing; renumbered to cycle 1-4-6, answer `[2,0,1,2,0,1,0,2,2]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1, example-2, and solution-peel-and-bfs — the last also carries the new peel order 0 → 1 → 3 in its narration text)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Second overlap-gate catch in a row: figure captions are the magnet — the
  source caption pattern "Nodes A, B, and C form the cycle, with tails
  hanging off..." survived my first draft nearly verbatim. Writing
  captions last, deliberately in a different syntactic shape, is now part
  of the routine.
- Node relabeling makes graph examples genuinely new while keeping the SVG
  geometry valid — a text-only edit — but every label swap must be
  position-anchored (`<text x=.. y=..>`) or replacements cascade (2→4 then
  4→5 would hit the new 4).
- The solution figure's narration ("removes 0, then 6, then 5") is example
  data too; recomputed the peel order for the renumbered graph before
  editing.
