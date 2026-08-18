# N-Queens

## Description

Place `n` queens on a chessboard of `n` rows and `n` columns so that no two of
them attack one another. A queen attacks along its row, its column, and both
diagonals, so no two placed queens may share any of those four lines.

Given `n`, return every placement that satisfies the rule. Render each one as
`n` strings of `n` characters, with `Q` marking a queen and `.` an empty
square, one string per board row.

Boards must come out in the order produced by filling the board top row to
bottom row and trying columns left to right.

### Example 1

```text
Input: n = 5
Output: [["Q....","..Q..","....Q",".Q...","...Q."],["Q....","...Q.",".Q...","....Q","..Q.."],[".Q...","...Q.","Q....","..Q..","....Q"],[".Q...","....Q","..Q..","Q....","...Q."],["..Q..","Q....","...Q.",".Q...","....Q"],["..Q..","....Q",".Q...","...Q.","Q...."],["...Q.","Q....","..Q..","....Q",".Q..."],["...Q.",".Q...","....Q","..Q..","Q...."],["....Q",".Q...","...Q.","Q....","..Q.."],["....Q","..Q..","Q....","...Q.",".Q..."]]
Explanation: Ten placements exist for n = 5. The first puts the queens in
columns 0, 2, 4, 1, 3 — note that no two share a column or either diagonal.
```

### Example 2

```text
Input: n = 2
Output: []
Explanation: Two queens on a 2x2 board always share a row, a column or a
diagonal, so nothing satisfies the rule.
```

### Constraints

- `1 <= n <= 11`

## Hints

### Hint 1

A row can hold at most one queen, and `n` queens on `n` rows forces exactly
one per row. Decide the queen's column one row at a time and the row conflicts
vanish by construction.

### Hint 2

A candidate square must dodge three things: its column, and the two diagonal
families through it. Both families have a signature constant along them —
work out what it is, and checking a square becomes three set lookups.

### Hint 3

Trying the columns of each row from left to right is what makes your output
land in the required order without a final sort.

### Hint 4

When every row is filled, render the `n` strings and record them — then step
back up and let the remaining columns of the earlier rows produce the rest.
