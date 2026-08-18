## 0200 — Number of Islands

- New id / title / slug: 200 / Count Grid Islands / `count-grid-islands`
- Old → new API: `numIslands` → `countGridIslands` (go `countGridIslands`, rust `count_grid_islands`, ts `countGridIslands`) — the exact rename `ADAPT.md` uses as its example; parameter `grid` kept (conventional)
- Core algorithm / difficulty: flood fill per landmass, once breadth-first and once depth-first / H2 (unchanged)
- Statement rewritten from spec: yes — an island is defined as land cells "joined edge to edge" with corners excluded, replacing the source's "surrounded by water" phrasing (which is vacuous for counting: nothing wraps around a grid)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - a 4×5 snake-shaped single island → `1`, a 5×5 grid with three landmasses (diagonal gaps) → `3`, an all-water 2×2 grid → `0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Variants: `bfs`, `dfs` kept as variant ids (decision 4); guide headings `## BFS` / `## DFS` unchanged so the section matcher still resolves them
- Gates: check ✓ verify ✓ (14/14 variant files, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `islands`; sibling `0305_count-grid-islands-land-updates` follows.**
  Vocabulary fixed here and inherited there: land cells are **joined edge to
  edge**, corners do not join, every cell outside the grid counts as water,
  and a flood **spreads** or a landmass is **carved**. The source's
  "surrounded by water on all four edges" sentence was dropped rather than
  paraphrased — it adds no constraint the adjacency rule doesn't already give.
- **The wave-1 stale-gate lesson bites hardest here.** The source's examples
  are 4×5 grids, so the natural temptation is another 4×5 grid; example 1 here
  *is* 4×5 but every one of its twenty cells differs from the source's, and
  examples 2 and 3 change the dimensions outright (5×5, then 2×2) so no row
  could coincide even by accident. Verify with `git diff`-style thinking:
  compare each row as a string against the source's rows before committing to
  an example.
- Example 1 is deliberately a *thin* connected landmass (a snake), which
  neither source example shows — it demonstrates that connectivity, not
  thickness, makes an island, and it is the shape that makes the BFS-space
  claim in the guide (`O(min(m, n))`) visible.
