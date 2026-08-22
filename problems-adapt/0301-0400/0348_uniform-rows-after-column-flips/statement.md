# Uniform Rows After Column Flips

## Description

You are given a binary matrix `matrix` with `m` rows and `n` columns.

One move available to you is to pick a column and flip it — every cell of
that column changes, `0` becoming `1` and `1` becoming `0`. You may apply
the move to any set of columns, each at most once.

A row is **uniform** when all of its cells hold the same value. Report the
largest number of rows that can be uniform at once, after some choice of
flipped columns.

### Example 1

```text
Input: matrix = [[0,1,0],[1,0,1],[1,0,0]]
Output: 2
Explanation: Flip the middle column. The first row becomes 0,0,0 and the
second 1,1,1 — both uniform. The third row is neither a copy nor a mirror
of the first two, so no flip set rescues it together with them.
```

### Example 2

```text
Input: matrix = [[0,0],[0,0],[1,1]]
Output: 3
Explanation: No flips are needed: all-zeros rows and all-ones rows are
uniform to begin with, so rows of both kinds count together. Flipping both
columns would swap every row to the other kind and leave the count at 3.
```

### Example 3

```text
Input: matrix = [[1],[0],[1]]
Output: 3
Explanation: With a single column, flipping it swaps every row's value at
once, so every row is uniform either way.
```

### Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `matrix[i][j]` is either `0` or `1`.

## Hints

### Hint 1

Flipping a set of columns XORs one identical bit pattern onto every row of
the matrix. What does that say a row looks like after the flips?

### Hint 2

A row can end up all zeros or all ones precisely when it equals the flip
pattern itself, or the pattern's complement. Which pairs of rows does that
make simultaneously satisfiable?

### Hint 3

Two rows share a fate exactly when they are identical or bitwise
complementary. Give every row a canonical form — itself XOR its first
entry — and the answer is the size of the largest group sharing a form.
