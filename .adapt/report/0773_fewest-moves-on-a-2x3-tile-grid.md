## 0773 — Sliding Puzzle

- New id / title / slug: 773 / Fewest Moves on a 2x3 Tile Grid /
  `fewest-moves-on-a-2x3-tile-grid`
- Old → new API: `slidingPuzzle` → `minimumTileGridMoves` (Go and TypeScript
  `minimumTileGridMoves`, Rust `sliding_puzzle` → `minimum_tile_grid_moves`)
- Core algorithm / difficulty: breadth-first search over encoded layouts /
  H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - reachable layouts at distances four and six plus one opposite-parity
    layout
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped because all three source SVGs encode the replaced example
  layouts and move sequences
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- A reverse BFS over all 360 target-reachable layouts independently confirms
  all three public results.
- The 13 hidden cases are data-identical to the source corpus.
