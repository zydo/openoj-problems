# Knight’s Full-Board Walk

## Description

An `m x n` grid is indexed from its top-left cell `(0, 0)`. A knight stands
on cell `(r, c)` and moves as knights do: from `(r1, c1)` it may jump to
`(r2, c2)` provided the destination stays on the grid and the row and column
gaps satisfy `min(|r1 - r2|, |c1 - c2|) = 1` and
`max(|r1 - r2|, |c1 - c2|) = 2`.

Choose an order of moves that lands the knight on every cell exactly once —
the starting cell counts as visited at time 0 and must not be entered again.
Return a grid `answer` shaped like the board whose entries record when the
knight stood on each cell: `answer[r][c]` is `0`, and the numbers grow by one
along the route.

The inputs are guaranteed to admit at least one such ordering.

### Example 1

```text
Input: m = 4, n = 3, r = 0, c = 2
Output: [[2,7,0],[5,10,3],[8,1,6],[11,4,9]]
Explanation: Starting from (0,2) the knight hops to (2,1), then to (0,0),
and keeps going; after 11 moves all 12 cells have been entered exactly once,
and each cell stores the step at which the knight arrived.
```

### Example 2

```text
Input: m = 5, n = 5, r = 1, c = 1
Output: [[18,11,6,1,20],[5,0,19,16,7],[10,17,12,21,2],[13,4,23,8,15],
[24,9,14,3,22]]
Explanation: The first two landings leave (1,1) for (0,3) and then (2,4);
by step 24 the whole 5 x 5 board has been covered without a repeat visit.
```

### Example 3

```text
Input: m = 4, n = 5, r = 3, c = 1
Output: [[6,17,2,13,8],[1,10,7,18,3],[16,5,12,9,14],[11,0,15,4,19]]
Explanation: From (3,1) the walk opens with (1,0) and (0,2), and no cell is
ever revisited before the last, number 19, is placed.
```

### Constraints

- `1 <= m, n <= 5`
- `0 <= r <= m - 1`
- `0 <= c <= n - 1`
- The given grid and starting cell admit at least one complete ordering.
