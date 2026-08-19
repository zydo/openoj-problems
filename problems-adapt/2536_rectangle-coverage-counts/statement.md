# Rectangle Coverage Counts

## Description

Start with an `n x n` grid of zeros, rows and columns numbered from `0`.

Each entry of `queries` names a rectangle by its corners:
`[row1, col1, row2, col2]` spans every cell `(x, y)` with
`row1 <= x <= row2` and `col1 <= y <= col2`. Applying it raises every cell of
that rectangle by `1`.

Apply all rectangles and return the finished grid. Read another way, each
cell must end up holding the number of rectangles that cover it.

### Example 1

```text
Input: n = 3, queries = [[0,0,1,2],[1,0,2,1]]
Output: [[1,1,1],[2,2,1],[1,1,0]]
Explanation: The first rectangle covers the top two rows entirely; the second
covers the left two columns of the bottom two rows. Their overlap — row 1,
columns 0 and 1 — is the only place counted twice, and the bottom-right cell
is covered by neither.
```

### Example 2

```text
Input: n = 4, queries = [[0,0,2,2],[1,1,3,3],[1,1,2,2]]
Output: [[1,1,1,0],[1,3,3,1],[1,3,3,1],[0,1,1,1]]
Explanation: The first two rectangles overlap in a 2x2 block, and the third
rectangle covers exactly that block, so its four cells reach 3. Every other
covered cell is touched once, and the two opposite corners stay 0.
```

### Example 3

```text
Input: n = 3, queries = [[1,1,1,1],[1,1,1,1],[2,2,2,2]]
Output: [[0,0,0],[0,2,0],[0,0,1]]
Explanation: A rectangle may degenerate to a single cell — two of them stack
on the center for 2, one lands on the corner for 1.
```

### Constraints

- `1 <= n <= 500`
- `1 <= queries.length <= 10⁴`
- `0 <= row1i <= row2i < n`
- `0 <= col1i <= col2i < n`

## Hints

### Hint 1

Touching every cell of every rectangle as you go is what makes the naive
approach slow. What if the rectangles were only *recorded* cheaply, with the
actual additions deferred to one final pass?

### Hint 2

Treat each row as its own 1-D line. A rectangle
`[r1, c1, r2, c2]` then only says: rows `r1..r2` each gain `+1` starting at
column `c1` and ending after column `c2`.

### Hint 3

Mark `+1` at `diff[r][c1]` and `-1` at `diff[r][c2 + 1]` for every row `r`
in range, then recover each row with a running sum. Give each row one
trailing sentinel slot so `c2 + 1` never overflows.
