# The Upside-Down Square Patch

## Description

You are given an `m x n` integer matrix `grid` together with three integers
`x`, `y`, and `k`. The pair `(x, y)` marks the top-left cell of a `k x k`
square patch of the matrix.

Upend that patch: the row order inside it reverses, so its top row becomes
its bottom row and vice versa, while every cell outside the patch stays
exactly as it was.

Return the matrix after the upending.

### Example 1

![diagram](figures/3643-1.svg)

```text
Input: grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3
Output: [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]
Explanation: The patch occupies rows 1 through 3 and columns 0 through 2.
Inside it, [5,6,7] sinks to the bottom row and [13,14,15] rises to the top,
while the lone middle row [9,10,11] cannot move. Everything outside the
patch, such as the 8 and 16 of column 3, is left alone.
```

### Example 2

![diagram](figures/3643-2.svg)

```text
Input: grid = [[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2
Output: [[3,4,4,2],[2,3,2,3]]
Explanation: The matrix itself is not square, but the 2 x 2 patch sitting
in columns 2 through 3 is, and upending it simply exchanges those two rows.
```

### Example 3

```text
Input: grid = [[10,20,30],[40,50,60],[70,80,90]], x = 0, y = 1, k = 2
Output: [[10,50,60],[40,20,30],[70,80,90]]
Explanation: The patch spans rows 0 through 1 and columns 1 through 2. Its
rows [20,30] and [50,60] trade places; column 0 and the last row are
untouched.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `1 <= grid[i][j] <= 100`
- `0 <= x < m`
- `0 <= y < n`
- `1 <= k <= min(m - x, n - y)`

## Hints

### Hint 1

Match the patch's rows from the outside in — first with last, second with
second-to-last — swapping all `k` entries whenever a pair meets, and stop
once the pointers cross.
