# Solutions — Making A Large Island

## Island labeling plus per-zero merge

The flip can only glue together islands that already exist, so the first pass labels every 4-connected group of 1s with a distinct color using an iterative flood fill and records each label's size. The label grid starts at 0 for water/unvisited, and each flood marks its cells as it counts them, so every island is discovered exactly once.

The answer is then the best of two cases. Flipping some 0 cell yields `1` plus the sizes of the distinct islands touching it on the four sides; not flipping anything yields the largest existing island, which is also the correct answer for an all-1s grid where no 0 exists to flip. Initializing `best` from the island sizes covers the second case even when there are no 0 cells at all.

For each water cell the code collects the labels of occupied neighbors into a set before summing. The set is the crucial detail: one island can touch the same 0 cell on two or more sides (for example wrapping around a corner), and without deduplication its size would be added twice and overstate the merged area. Since there are at most four neighbors, the set work per cell is constant, and the whole scan stays linear in the grid.

![A 2 x 2 grid whose two islands are labeled A and B; flipping either water cell merges all three cells.](figures/solution-island-labels.svg)

**Complexity:** `O(n^2)` time, `O(n^2)` space.
