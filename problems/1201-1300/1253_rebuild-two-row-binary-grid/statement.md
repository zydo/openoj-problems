# Rebuild a Two-Row Binary Grid

## Description

A binary grid has exactly two rows and `n` columns, and every cell holds a
`0` or a `1`. You are not shown the grid itself — only three facts about it:

- `upper`, the sum of the cells in the top row (row `0`);
- `lower`, the sum of the cells in the bottom row (row `1`);
- `colsum`, an integer array of length `n` where `colsum[i]` is the sum of
  column `i`.

Rebuild a grid consistent with all three facts and return it as a 2-D
integer array. If several grids qualify, any one of them is accepted. If the
numbers cannot describe any binary grid, return an empty 2-D array.

### Example 1

```text
Input: upper = 2, lower = 2, colsum = [1,2,1,0]
Output: [[1,1,0,0],[0,1,1,0]]
Explanation: The top row sums to 2, the bottom row to 2, and every column
sums to its colsum entry.
```

### Example 2

```text
Input: upper = 1, lower = 1, colsum = [2,2]
Output: []
Explanation: Each column holding a 1 in both rows already forces row sums of
2, so no grid can match upper = 1 and lower = 1.
```

### Example 3

```text
Input: upper = 4, lower = 3, colsum = [2,1,0,1,2,1]
Output: [[1,1,0,1,1,0],[1,0,0,0,1,1]]
```

### Constraints

- `1 <= colsum.length <= 10^5`
- `0 <= upper, lower <= colsum.length`
- `0 <= colsum[i] <= 2`

## Hints

### Hint 1

Columns whose sum is `0` or `2` leave no freedom: they immediately fix one
cell in each row and never cause trouble on their own.

### Hint 2

Only columns summing to `1` involve a choice. First check that the totals
can work out at all, then hand the one-columns to the top row until its
quota is used up and give the rest to the bottom row.
