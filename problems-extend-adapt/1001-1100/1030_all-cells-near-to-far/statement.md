# All Cells Near to Far

## Description

A grid spans `rows` rows and `cols` columns. Starting from one of its
cells, `(rCenter, cCenter)`, list every cell of the grid so that cells
closer to the starting point come before cells farther away.

Distance is measured the Manhattan way: cells `(r1, c1)` and `(r2, c2)`
are `|r1 - r2| + |c1 - c2|` apart.

So the answer is unique, cells sharing a distance are listed in ascending
row order, and ties within one row are listed in ascending column order.

### Example 1

```text
Input: rows = 3, cols = 1, rCenter = 1, cCenter = 0
Output: [[1,0],[0,0],[2,0]]
Explanation: The starting cell (1, 0) comes first at distance 0, and both
remaining cells sit one step away.
```

### Example 2

```text
Input: rows = 2, cols = 2, rCenter = 1, cCenter = 1
Output: [[1,1],[0,1],[1,0],[0,0]]
Explanation: The distances from (1, 1) to the four cells are [0,1,1,2],
and each distance group is listed row by row.
```

### Example 3

```text
Input: rows = 1, cols = 4, rCenter = 0, cCenter = 2
Output: [[0,2],[0,1],[0,3],[0,0]]
Explanation: The distances from (0, 2) to the four cells are [2,1,0,1].
```

### Constraints

- `1 <= rows, cols <= 100`
- `0 <= rCenter < rows`
- `0 <= cCenter < cols`
