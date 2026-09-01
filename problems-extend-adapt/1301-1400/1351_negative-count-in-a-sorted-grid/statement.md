# Negative Count in a Sorted Grid

## Description

A grid of integers is arranged so that values never grow along a row or
down a column: each row reads non-increasing left to right, and so does
each column top to bottom. Count how many of its entries are negative.

### Example 1

```text
Input: grid = [[8,5,2],[7,4,1],[6,3,0]]
Output: 0
```

### Example 2

```text
Input: grid = [[9,7,5,-3],[8,6,-1,-4],[5,-2,-5,-8]]
Output: 6
Explanation: One negative ends the first row, two fill the tail of the
second, and the entire last row is negative.
```

### Example 3

```text
Input: grid = [[-4]]
Output: 1
```

### Constraints

- The grid has `m` rows and `n` columns with `1 <= m, n <= 100`.
- `-100 <= grid[i][j] <= 100`

### Follow up

Can you do better than inspecting every cell — say, in `O(m + n)`?

## Hints

### Hint 1

A plain sweep over every cell works; binary search inside each row works
faster still.

### Hint 2

Because both directions are sorted, the negatives in every row form a
tail, and that tail only grows longer as you move down the grid.
