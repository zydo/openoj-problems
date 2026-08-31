# Uniform Cell Flipper

## Description

An `m × n` binary grid starts with every cell set to `0`. Each flip chooses a
cell that is still `0` and turns it to `1`, with every remaining `0` cell
equally likely to be picked.

Implement the `CellFlipper` class:

- `CellFlipper(int m, int n)` initializes the grid size.
- `int[] flipCell()` returns one random `[i, j]` cell that was `0`, then flips
  it to `1`.
- `void resetAll()` returns every cell to `0` so all cells become eligible
  again.

The judge verifies each run of `flipCell` calls yields a perfect permutation of
the grid's cells — no repeats, every cell exactly once per full pass.

### Example 1

```text
Input:
["CellFlipper", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell", "resetAll", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell", "flipCell"]
[[4, 2], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
Output: [null, [3,1], [0,0], [1,0], [0,1], [2,0], [1,1], [3,0], [2,1], null, [3,0], [2,1], [0,1], [3,1], [0,0], [1,0], [2,0], [1,1]]
Explanation: Each full pass of eight flips covers the 4×2 grid exactly once —
no cell repeats within a pass. The exact coordinates depend on the random
draw; the guarantee is the permutation property.
```

### Constraints

- `1 <= m, n <= 10⁴`
- Every `flipCell` call has at least one eligible cell.
- At most `1000` calls are made to `flipCell` and `resetAll`.
