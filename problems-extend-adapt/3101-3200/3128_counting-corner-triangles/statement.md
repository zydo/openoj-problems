# Counting Corner Triangles

## Description

You are given a binary matrix `grid` whose entries are each `0` or `1`.

Pick any three cells that all contain a `1`. If one of the three cells
shares its row with a second cell and its column with the third, the
trio forms a corner triangle — two legs, one running along a row and
the other along a column, meeting at the shared cell. The cells do not
have to sit next to each other; gaps along the row or the column are
allowed.

Return how many distinct corner triangles can be formed from the `1`
cells of `grid`.

### Example 1

```text
Input: grid = [[1,1],[1,0]]
Output: 1
Explanation: The three 1 cells form exactly one corner triangle, with
the top-left cell as its corner.
```

### Example 2

```text
Input: grid = [[1,0],[0,1]]
Output: 0
Explanation: The two 1 cells share neither a row nor a column, so a
qualifying trio cannot even be picked.
```

### Example 3

```text
Input: grid = [[1,1,0],[1,1,0],[0,0,1]]
Output: 4
Explanation: Each of the four 1 cells in the top-left 2 x 2 block can
serve as the corner — one other 1 in its row and one other 1 in its
column give a single triangle per cell.
```

### Constraints

- `1 <= grid.length <= 1000`
- `1 <= grid[i].length <= 1000`
- `grid[i][j]` is `0` or `1`.

## Hints

### Hint 1

Fix a cell holding a `1` and treat it as the corner. Every triangle
with that corner is formed by choosing one of the other `1`s in its
row for the horizontal leg and one of the other `1`s in its column for
the vertical leg.

### Hint 2

Those two choices are independent, so the corner contributes the
product of the two counts.

### Hint 3

Precompute the number of `1`s in every row and every column, then sum
`(row[r] - 1) * (col[c] - 1)` over all cells with `grid[r][c] == 1`.
The total can approach `10^12`, so accumulate in a 64-bit integer.
