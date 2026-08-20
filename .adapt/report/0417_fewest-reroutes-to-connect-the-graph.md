## 417 — Number of Operations to Make Network Connected

- New id / title / slug: 417 / Fewest Reroutes to Connect the Graph / `fewest-reroutes-to-connect-the-graph`
- Old → new API: `makeConnected` → `minReroutes` (go `minReroutes`, rust `min_reroutes`, ts `minReroutes`); `connections` → `links`; `n` kept
- Core algorithm / difficulty: union-find component count, answer `components − 1` or `-1` when `m < n − 1` / H3 (unchanged)
- Statement rewritten from spec: yes (computers/cables → nodes/links and reroutes)
- Examples newly constructed: yes (structure-preserving: yes — both figures kept their drawn topology via circle-label permutations)
  - `n=4 [[0,1],[0,3],[1,3]]` → 1, `n=6 [[0,1],[0,2],[0,3],[1,2],[2,3]]` → 2, `n=5 [[0,1],[2,3],[3,4]]` → -1 (three links cannot span five nodes)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1.svg swapped labels 2/3 on the bottom row, example-2.svg swapped labels 1/2 on the top/middle rows; both center captions reworded ("reroute one/two links"); edges and geometry untouched
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Both figures were preserved without touching a single coordinate: the new
  examples are label permutations of the source's node numbering, so the
  drawn topology (which pairs are joined) reads as a different edge list.
  Edge sets were verified by parsing the SVGs back out after the edit.
- Example 2 shares its four-edge prefix `[[0,1],[0,2],[0,3],[1,2]` with the
  source's third example literal but diverges before the closing `]]`, so
  the stale gate's exact-substring test stays clean.
