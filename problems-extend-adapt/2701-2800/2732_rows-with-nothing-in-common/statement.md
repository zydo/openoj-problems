# Rows With Nothing In Common

## Description

You are given a 0-indexed `m x n` binary matrix `grid`.

Pick a non-empty set of its rows and call the pick compatible when, in
every column, the `1`s contributed by the picked rows amount to at most
half of the pick. Formally, with `k` rows chosen, each column must sum to
at most `floor(k / 2)` over the chosen rows.

Two consequences fall out at once: a compatible pick of a single row can
only be an all-zero row, and a compatible pick of two rows can never place
a `1` in the same column of both — such a pair has nothing in common.

Return the row indices of one compatible pick, sorted ascending. Any
valid pick is acceptable; if none exists, return an empty array.

A set of rows here means any matrix obtained by deleting some (possibly
none or all) rows of `grid` and keeping the survivors in order.

### Example 1

```text
Input: grid = [[1,0,1],[0,1,0]]
Output: [0,1]
Explanation: The two rows light up disjoint columns. With k = 2 each column may hold at most one 1, and no column holds more here.
```

### Example 2

```text
Input: grid = [[1,1],[0,0]]
Output: [1]
Explanation: Row 1 is entirely zeros. Alone it is a compatible pick of size 1, since every column sums to 0 <= floor(1 / 2).
```

### Example 3

```text
Input: grid = [[1,1,1],[1,1,0]]
Output: []
Explanation: No row is all zeros, and the two rows share columns 0 and 1, so no compatible pick of size 1 or 2 exists.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m <= 10⁴`
- `1 <= n <= 5`
- `grid[i][j]` is `0` or `1`.

## Hints

### Hint 1

Whenever any compatible pick exists, one with just one or two rows exists
too — larger picks never become necessary.

### Hint 2

A one-row pick works exactly when some row is all zeros; scan for one and
answer with its index.

### Hint 3

Otherwise treat each row as an `n`-bit signature and look for two rows
whose signatures share no set bit. At most `2⁵` distinct signatures can
appear, so remembering which signatures were seen (with an earliest
index) is enough to detect a disjoint pair.
