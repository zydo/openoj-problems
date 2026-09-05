# One Recolor To Unify A Square

## Description

You are given a `3 x 3` grid whose cells hold the characters `'B'` (black)
and `'W'` (white).

You may recolor at most one cell — to either color — and you win if the
grid then contains some `2 x 2` block whose four cells all show the same
color.

Return `true` if a monochrome `2 x 2` block can be reached this way, and
`false` otherwise.

### Example 1

```text
Input: grid = [["W","W","B"],["W","B","B"],["B","B","W"]]
Output: true
Explanation: Recoloring grid[1][1] to "W" makes the top-left 2 x 2 block
entirely white.
```

### Example 2

```text
Input: grid = [["B","W","W"],["W","W","B"],["B","B","B"]]
Output: true
Explanation: The top-left 2 x 2 block already holds three "W" cells, so one
recolor of grid[0][0] finishes it.
```

### Example 3

```text
Input: grid = [["W","B","W"],["B","W","B"],["W","B","W"]]
Output: false
Explanation: This checkerboard splits every 2 x 2 block evenly, and a
single recolor cannot break the tie in any of them.
```

### Constraints

- `grid.length == 3`
- `grid[i].length == 3`
- `grid[i][j]` is either `'W'` or `'B'`.

## Hints

### Hint 1

A single recolor can only rescue a `2 x 2` block that is not split evenly:
if both colors own two cells each, one change leaves it non-uniform.

### Hint 2

So the answer is yes exactly when some `2 x 2` block has a color appearing
in at least three of its four cells.
