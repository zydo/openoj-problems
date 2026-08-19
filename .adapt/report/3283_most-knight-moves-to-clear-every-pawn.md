## 3283 — Maximum Number of Moves to Kill All Pawns

- New id / title / slug: 3283 / Most Knight Moves to Clear Every Pawn / `most-knight-moves-to-clear-every-pawn`
- Old → new API: `maxMoves` → `mostMoves` (go `mostMoves`, rust `most_moves`, ts `mostMoves`); parameters `kx`, `ky`, `positions` kept
- Core algorithm / difficulty: one BFS per pawn over the 50x50 board for all pairwise distances, then memoized minimax dp over the pawn bitmask with turn parity from popcount / H4 (unchanged)
- Statement rewritten from spec: yes (turn rules, shortest-path capture, pass-over rule restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — figures regenerated rather than label-edited, see below)
  - `kx=2,ky=2,[[0,0]]` → 4 (board edge forces four hops between near squares), `kx=2,ky=3,[[0,0],[1,1],[3,2]]` → 7 (3+3+1 across three turns), `kx=0,ky=0,[[2,1],[4,2]]` → 3 (Alice steps onto a pawn's square without capturing it)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: all four **regenerated** from the family's documented layout rule (44px cells, cell (x,y) at `ox+44x, oy+44(ymax−y)`, checker fill, path-cell highlights, per-player arrows) via a renderer in `.localonly/wave-f-06/fig_3283.py`; hop paths and the optimal play trace (Alice argmax / Bob argmin) extracted from the reference algorithm, never hand-drawn
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The knight-hop figure family encodes the old examples' hop geometry
  structurally, but the source SVGs carry their coordinate mapping in a
  comment, so the drawings re-emit deterministically for new data. The
  renderer adds a pairwise move-number collision check; two label pairs
  needed manual nudges.
- Remote image analysis of the rendered PNGs came back describing unrelated
  content (wrong CDN fetches), so visual QA was arithmetic — every arrow
  endpoint, token, and label coordinate re-derived against the documented
  mapping. A human pass in phase 2 should still eyeball these four.
- Example 1's teaching point (shortest path inflated by the board edge) is
  preserved with different squares: on-board (2,2)→(0,0) is 4 hops.
