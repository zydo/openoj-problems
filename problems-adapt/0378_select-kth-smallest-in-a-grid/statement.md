# Select Kth Smallest in a Grid

## Description

You are given an `n x n` grid of integers in which every row and every column
runs in non-decreasing order, and an integer `k`. Report the entry that would
occupy position `k` if all `n²` entries were written out in non-decreasing
order.

Each cell holds its own rank: when a value fills several cells, it covers that
many consecutive positions, and `k` may land on any of them.

Your solution must work with less than `O(n²)` extra memory.

### Example 1

```text
Input: grid = [[3,8,14],[6,10,17],[9,12,20]], k = 8
Output: 17
Explanation: The nine entries in order are [3,6,8,9,10,12,14,17,20], so
position 8 holds the 17.
```

### Example 2

```text
Input: grid = [[-6,1],[-2,5]], k = 3
Output: 1
Explanation: The entries in order are [-6,-2,1,5]; position 3 holds 1.
Entries may be negative.
```

### Example 3

```text
Input: grid = [[1,2],[1,3]], k = 2
Output: 1
Explanation: The value 1 fills two cells, so it covers positions 1 and 2 and
position 2 returns it again.
```

### Constraints

- The grid is square: `grid.length == grid[i].length == n`
- `1 <= n <= 300`
- `-10⁹ <= grid[i][j] <= 10⁹`
- Every row and every column of `grid` is non-decreasing.
- `1 <= k <= n²`

### Follow-up

Counting entries below a candidate already needs no stored copy of anything,
so memory is not the binding cost. Can the whole selection be pushed towards
`O(n)` time? A method tuned to jointly sorted rows and columns exists; it is
far past what a reasonable interview answer requires, and chasing it is
entirely optional.

## Hints

### Hint 1

No ordering of the cells lists the values in order, so stop searching cell
positions. The answer is a *value*, and it lies between the top-left and the
bottom-right corner.

### Hint 2

For a candidate value `x`, you need one number: how many entries are at most
`x`. A walk from the bottom-left corner gets it in `n` steps — a cell that
qualifies speaks for its whole column above it and you move right; a cell that
does not condemns its row to the right of it and you move up.

### Hint 3

Bisect for the smallest value whose count reaches `k`. That value cannot be
absent from the grid: dropping one below it would leave the count unchanged,
contradicting minimality. So the bisection result needs no final snapping
pass.
