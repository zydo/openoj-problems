# Row Swaps to Clear the Diagonal

## Description

You are handed an `n x n` binary `grid`. A single move picks two
**neighbouring** rows — rows `i` and `i + 1` for some valid `i` — and
exchanges them.

Watch the main diagonal, the cells `(i, i)` running from the top-left
to the bottom-right corner (all indices 0-based). The grid is called
**tidy** when every cell strictly above that diagonal holds a `0`:
row `i` must satisfy `grid[i][j] == 0` for all `j > i`.

Return the smallest number of neighbouring-row moves that leaves the
grid tidy, or `-1` if no amount of swapping ever gets there.

### Example 1

![diagram](figures/1536-1.svg)

```text
Input: grid = [[0,0,1],[1,1,0],[1,0,0]]
Output: 3
Explanation: The bottom row ends in two zeros, so it can anchor the
top. Two adjacent moves lift it into row 0, leaving
[[1,0,0],[0,0,1],[1,1,0]]; the row now at the bottom ends in one
zero, exactly what the middle row needs, and a final move produces
[[1,0,0],[1,1,0],[0,0,1]]. Three moves in all, and none shorter
suffices.
```

### Example 2

![diagram](figures/1536-2.svg)

```text
Input: grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
Output: -1
Explanation: Every row is identical, so no move ever alters the grid
and it can never become tidy.
```

### Example 3

![diagram](figures/1536-3.svg)

```text
Input: grid = [[1,0,0],[1,1,0],[1,1,1]]
Output: 0
Explanation: The grid is already tidy — nothing sits above the
diagonal.
```

### Constraints

- `n == grid.length == grid[i].length`
- `1 <= n <= 200`
- `grid[i][j]` is `0` or `1`

## Hints

### Hint 1

For each row, measure how many zeros trail after its last `1` — that
single number decides which positions the row can legally occupy, and
it never changes while rows are shuffled around.

### Hint 2

Sitting in row `i` (0-based) takes at least `n - i - 1` trailing
zeros. Walk the rows from top to bottom, and whenever the row in
place falls short, grab the closest row at or beneath it that has
enough and bubble it up through adjacent moves.

### Hint 3

Should no row from the current position downward carry enough
trailing zeros, a tidy arrangement is impossible — report `-1`.
