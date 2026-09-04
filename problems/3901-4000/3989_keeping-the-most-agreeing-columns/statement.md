# Keeping The Most Agreeing Columns

## Description

You are given an `m x n` integer matrix `grid` and a tolerance `limit`.

You may strike out any number of columns — as long as at least one survives —
and the survivors keep the order they had.

The surviving matrix is called agreeing when, in every row, the values sitting
in any two neighboring surviving columns stay within the tolerance: for
adjacent kept columns `a` and `b` with `a < b`,
`|grid[i][b] - grid[i][a]| <= limit` must hold for each row `i`.

Report the largest number of columns that can survive while the remaining
matrix stays agreeing.

### Example 1

```text
Input: grid = [[3,6,4,9]], limit = 3
Output: 3
Explanation:
    Keep columns 0, 1, and 3 (the values 3, 6, 9). Row 0 checks give
    |6 - 3| = 3 and |9 - 6| = 3, both within the limit. All four columns
    cannot stay: column 2's 4 would sit next to 9 somewhere, and
    |9 - 4| = 5 breaks the limit.
```

### Example 2

```text
Input: grid = [[1,5],[5,1]], limit = 4
Output: 2
Explanation:
    Both columns can stay: row 0 reads |5 - 1| = 4 and row 1 reads
    |1 - 5| = 4, so every check passes exactly at the limit. With only two
    columns in the grid, 2 is the most that can remain.
```

### Example 3

```text
Input: grid = [[0,0,7,0,0]], limit = 6
Output: 4
Explanation:
    Strike the middle column holding 7 — every step to or from it moves by
    7, past the limit — and keep the four columns holding 0, whose gaps are
    all 0.
```

### Constraints

- `1 <= m == grid.length <= 250`
- `1 <= n == grid[i].length <= 250`
- `-10^5 <= grid[i][j] <= 10^5`
- `0 <= limit <= 10^5`

## Hints

### Hint 1

Treat the surviving columns as a subsequence. Kept columns `a` and `b` with
`a < b` may sit next to each other only when every row moves by at most
`limit` between them.

### Hint 2

Work out, for every pair of columns `(a, b)`, whether the two can be
neighbors at all.

### Hint 3

Let `dp[j]` count the longest surviving chain whose rightmost column is `j`.

### Hint 4

Fill `dp[j]` by looking back at every earlier column `i`: when columns `i`
and `j` can be neighbors, `dp[j]` may become `dp[i] + 1`. The answer is the
largest `dp` value seen.
