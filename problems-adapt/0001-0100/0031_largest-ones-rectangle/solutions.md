# Solutions — Largest Ones Rectangle

## Row-by-Row Histogram with Monotonic Stack

Every all-'1' block has a bottom edge on some row, and the columns it spans
form a skyline on that row: column `c` rises by exactly the run of
consecutive '1's ending at this row. Searching the grid for blocks is
therefore the same as searching a skyline for its biggest rectangle, once
per row — the per-row maximum, taken over all rows, is the answer, because
any block whatever is a skyline rectangle in the row where it bottoms out.

One `heights` array of length `cols` is carried down the grid and folded
row by row: a `'1'` at a cell extends that column's run and increments the
entry, a `'0'` zeroes it, since nothing may pass through a zero cell. After
each fold the helper `largest_area` finds the biggest rectangle under the
row's skyline.

![Per-row skylines [1,1,0,1,0], [2,0,1,2,1], [0,1,2,3,2], [1,2,0,4,0]; row 2's columns 2-4 hold the 2x3 = 6 block.](figures/solution-row-histograms.svg)

The helper runs the monotonic-stack sweep: column indices are stacked while
strictly rising, and a shorter column that arrives at index `i` retires
every taller stacked column — each retired column's rectangle runs from the
new stack top (left limit, `-1` at the grid's edge) to `i`, contributing
`height * (i - left - 1)`. A trailing `0` sentinel empties the stack at
row's end, and the strict comparison lets the earlier of two equal columns
collect the whole equal run when it retires. In the example, row 2's
skyline `[0,1,2,3,2]` crowns a 3 at column 3, yet the sweep's winner is the
height-2 column at position 2, retired by the sentinel with limits 1 and 5:
the `[2,3,2]` strip over columns 2–4, worth `2 x 3 = 6`.

Degenerate shapes cost nothing extra: an empty grid or empty rows report
`0` immediately, and an all-'0' grid never raises a positive skyline. Each
cell is folded once and each column index is stacked and retired at most
once per row, so the sweep is linear in the cell count.

**Complexity:** `O(rows x cols)` time, `O(cols)` space.
