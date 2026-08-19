## 1765 — Map of Highest Peak

- New id / title / slug: 1765 / Terrain Height Map / `terrain-height-map`
- Old → new API: `highestPeak` → `heightMap` (go `heightMap`, rust `height_map`, ts `heightMap`); parameter `isWater` kept (clear, conventional)
- Core algorithm / difficulty: multi-source BFS from all water cells, height = distance to nearest water / H2 (unchanged)
- Statement rewritten from spec: yes — grid rules listed as bullets, objective phrased as "make the tallest cell as tall as the rules allow", tie-break as "give every other cell the smallest height the rules permit"
- Examples newly constructed: yes (structure-preserving: **yes** — both example grids keep their drawn dimensions)
  - `[[0,0],[1,0]] → [[1,2],[0,1]]` (single water, corner peak), `[[0,1,0],[0,0,0],[1,0,0]] → [[1,0,1],[1,1,2],[0,1,2]]` (two water cells, far edge peaks at 2)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — all three (`example-1`, `example-2`, `solution-water-wavefront`): same grid geometry and pitch, new water positions (fills) and height labels; the wavefront figure's ring structure (2 water / 5 ring-1 / 2 ring-2, far corner peaking at 2) was preserved by picking a water placement with the same distance distribution
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The 3x3 example was chosen by enumerating all two-water placements and
  keeping the one whose ring counts match the wavefront figure exactly
  ({0:2, 1:5, 2:2} with (2,2) in ring 2) — that kept the narration
  ("both water cells …", "far corner … peaks at 2") true without edits.
- `comparison` is `exact`, so the statement deliberately does not repeat the
  source's "any assignment with maximum height 2 will also be accepted" — the
  distance assignment is the unique accepted output.
- BSD `sed` has no `\b`; identifier renames in solutions were done with a
  Python word-boundary regex instead.
