# K Least-Guarded Rows

## Description

An `m x n` binary matrix `mat` records the rows of a wall: a `1` marks
a manned post and a `0` an abandoned one. On every row the manned posts
stand entirely to the left of the abandoned ones — each row is some
number of 1's followed by some number of 0's.

Row `i` is considered less defended than row `j` when either of these
holds:

- Row `i` fields fewer manned posts than row `j`.
- The two rows field the same number and `i` is the smaller index.

Return the indices of the `k` least-defended rows, ordered from least
defended to most defended.

### Example 1

```text
Input: mat =
[[1,1,1,0],
 [1,0,0,0],
 [1,1,1,1],
 [0,0,0,0],
 [1,1,0,0]],
k = 3
Output: [3,1,4]
Explanation: The manned-post counts are: row 0 has 3, row 1 has 1,
row 2 has 4, row 3 has none, row 4 has 2. Ranked from least defended
to most, the rows line up as [3,1,4,0,2].
```

### Example 2

```text
Input: mat =
[[1,1,0],
 [1,1,0],
 [1,0,0]],
k = 2
Output: [2,0]
Explanation: The counts are 2, 2, and 1: row 2 defends least, and
rows 0 and 1 tie behind it with the earlier row first, giving the full
order [2,0,1].
```

### Constraints

- `m == mat.length`
- `n == mat[i].length`
- `2 <= n, m <= 100`
- `1 <= k <= m`
- `mat[i][j]` is either `0` or `1`.

## Hints

### Hint 1

A row's strength is a single count — and because the 1's are packed to
the left, that count is also the position of the first 0 in the row.

### Hint 2

Sorting (count, index) pairs lexicographically produces the entire
weakness ranking; the answer is its first `k` entries.
