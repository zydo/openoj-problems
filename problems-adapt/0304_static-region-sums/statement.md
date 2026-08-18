# Static Region Sums

## Description

You are given an integer `matrix` that will never change again. Question
after question will arrive, each naming an axis-aligned rectangle by its
top-left corner `(top, left)` and its bottom-right corner `(bottom, right)`,
and asking what the enclosed cells add up to, corners and edges included.
The rectangle is never empty: `top <= bottom` and `left <= right`, and all
four stay inside the matrix.

Because the contents are fixed, any one-time preparation over the grid is
fair.

Implement the `StaticRegions` class:

- `StaticRegions(int[][] matrix)` — hold on to `matrix`.
- `long regionSum(int top, int left, int bottom, int right)` — return the
  sum of `matrix[top..bottom][left..right]`.

### Example 1

```text
Input:
["StaticRegions", "regionSum", "regionSum", "regionSum", "regionSum"]
[[[[2, -1, 5, 0, 3], [4, 6, 1, -2, 7], [0, 3, 8, 4, 1], [5, -4, 2, 9, -6]]], [1, 1, 2, 3], [0, 0, 3, 4], [2, 2, 2, 2], [0, 4, 3, 4]]
Output: [null, 20, 47, 8, 5]
Explanation:
StaticRegions regions = new StaticRegions([
    [2, -1, 5,  0, 3],
    [4,  6, 1, -2, 7],
    [0,  3, 8,  4, 1],
    [5, -4, 2,  9, -6]]);
regions.regionSum(1, 1, 2, 3); // 6+1-2 + 3+8+4 = 20  (interior block)
regions.regionSum(0, 0, 3, 4); // 47                   (the whole grid)
regions.regionSum(2, 2, 2, 2); // 8                    (single cell)
regions.regionSum(0, 4, 3, 4); // 3+7+1-6 = 5          (one column strip)
```

### Example 2

```text
Input:
["StaticRegions", "regionSum", "regionSum", "regionSum"]
[[[[-10000, 0], [0, 10000]]], [0, 0, 1, 1], [0, 1, 1, 1], [0, 0, 0, 0]]
Output: [null, 0, 10000, -10000]
Explanation: The extreme values cancel across the full grid, and each
corner can be asked about on its own.
```

### Constraints

- `m == matrix.length`, `n == matrix[i].length`
- `1 <= m, n <= 200`
- `-10⁴ <= matrix[i][j] <= 10⁴`
- `0 <= top <= bottom < m` and `0 <= left <= right < n`
- Up to `10⁴` calls to `regionSum`.

### Follow-up

Can one `O(m · n)` pass over the grid at construction make every later
query a constant-time answer, whatever the rectangle's size?

## Hints

### Hint 1

Adding a rectangle's cells per question costs time in its area. The grid is
frozen, so compute a table of corner-anchored rectangle totals once — then
a query about any rectangle becomes arithmetic over a few table entries.

### Hint 2

Let `prefix[r][c]` total the cells in rows `0..r-1` and columns `0..c-1`,
with a guard row and a guard column of zeros padding the top and left. Each
entry follows from its three already-known neighbours by inclusion and
exclusion: add the entry above and the entry to the left, subtract the
diagonal (counted by both), and put in the one new cell
`matrix[r-1][c-1]`.

### Hint 3

An arbitrary rectangle is four corner-anchored ones combined with the same
signs: the big one ending at `(bottom, right)`, minus the strip above it,
minus the strip to its left, plus back the corner both strips removed. Four
lookups and three operations, independent of the rectangle's area.
