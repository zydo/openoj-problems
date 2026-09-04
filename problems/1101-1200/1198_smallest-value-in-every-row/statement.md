# Smallest Value in Every Row

## Description

You are given a matrix `mat` with `m` rows and `n` columns. Each row is
sorted in strictly increasing order, so a value can show up at most once
inside any single row.

Find the smallest value that occurs in every one of the `m` rows. When no
value is shared by all rows, return `-1`.

### Example 1

```text
Input: mat = [[2,6,10,14],[1,6,8,12],[3,6,7,9]]
Output: 6
Explanation: 6 is the only value that all three rows contain.
```

### Example 2

```text
Input: mat = [[1,2,4],[2,4,9],[2,3,4]]
Output: 2
Explanation: Both 2 and 4 appear in every row; 2 is the smaller of them.
```

### Example 3

```text
Input: mat = [[5,10,15],[6,11,20],[7,10,30]]
Output: -1
Explanation: The middle row shares no value with the other two rows at
the same time, so no element is common to all rows.
```

### Constraints

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 500`
- `1 <= mat[i][j] <= 10⁴`
- Every row of `mat` is sorted in strictly increasing order.

## Hints

### Hint 1

Strict increase means a row contributes each of its values at most one
tally.

### Hint 2

Count, over the whole matrix, how many rows contain each value.

### Hint 3

A single array indexed by value is enough to hold those counts.

### Hint 4

The value you want is one whose count equals `m` — scan candidate values
in increasing order and take the first such hit.
