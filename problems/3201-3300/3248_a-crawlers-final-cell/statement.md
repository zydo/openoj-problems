# A Crawler's Final Cell

## Description

Consider an `n x n` grid whose cells are numbered row by row, so the cell
in row `i` and column `j` carries the label `i * n + j`.

A crawler begins on cell `0` — the top-left corner — and then executes a
list of moves one at a time. Each move is one of the strings `"UP"`,
`"DOWN"`, `"LEFT"`, or `"RIGHT"`, and each shifts the crawler exactly one
cell in that direction.

Given the grid size `n` and the array `commands` of moves, return the
label of the cell the crawler occupies once every move has been executed.
The input guarantees the crawler never steps off the grid.

### Example 1

```text
Input: n = 3, commands = ["RIGHT","RIGHT","DOWN"]
Output: 5
Explanation: The rows are numbered [[0,1,2],[3,4,5],[6,7,8]]. From cell
0 two "RIGHT" moves reach cell 2, and "DOWN" then drops to cell 5.
```

### Example 2

```text
Input: n = 4, commands = ["DOWN","RIGHT","UP","RIGHT"]
Output: 2
Explanation: Starting at cell 0, "DOWN" then "RIGHT" land on cell 5,
"UP" retreats to cell 1, and the last "RIGHT" ends on cell 2.
```

### Constraints

- `2 <= n <= 10`
- `1 <= commands.length <= 100`
- Every element of `commands` is one of `"UP"`, `"DOWN"`, `"LEFT"`,
  `"RIGHT"`.
- The moves never take the crawler outside the grid.

## Hints

### Hint 1

Keep just a row and a column, adjust the matching one for every move, and
flatten with `row * n + col` at the end.
