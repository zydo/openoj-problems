# Grid Exit Walk Count

## Description

Start at cell `[startRow, startColumn]` of an `m` by `n` grid. Each move goes
one cell up, down, left, or right. A walk succeeds as soon as a move crosses
the grid boundary.

Return the number of distinct walks that exit within at most `maxMove` moves,
modulo `10^9 + 7`.

### Example 1

```text
Input: m = 2, n = 3, maxMove = 2, startRow = 1, startColumn = 1
Output: 6
```

### Example 2

```text
Input: m = 3, n = 1, maxMove = 2, startRow = 1, startColumn = 0
Output: 8
```

### Constraints

- `1 <= m, n <= 50`
- `0 <= maxMove <= 50`
- `0 <= startRow < m`
- `0 <= startColumn < n`

## Hints

### Hint 1

Count walks by remaining move budget rather than enumerating their direction
sequences.

### Hint 2

For every cell, compute a new layer from the preceding layer's four neighbors.

### Hint 3

An out-of-grid neighbor contributes one immediate exit; an in-grid neighbor
contributes its previous-layer count.
