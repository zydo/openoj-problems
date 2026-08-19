# Best Total from Disjoint Segments

## Description

A row of `n` positions is numbered `0` to `n - 1`. You are given an array
`segments` in which `segments[i] = [start_i, end_i, value_i]` names the run of
positions from `start_i` through `end_i`, inclusive, and the value gained by
claiming that whole run.

Pick a set of segments in which no two share a position, making the summed
value as large as possible. Positions may remain unclaimed, and not every
segment needs to be used. Return the largest total.

### Example 1

```text
Input: n = 6, segments = [[0,1,4],[2,3,6],[1,4,9]]
Output: 10
Explanation: The run [1,4] collides with both others. Claiming [0,1] and
[2,3] instead collects 4 + 6 = 10, which beats the wide run's 9 on its own.
```

### Example 2

```text
Input: n = 7, segments = [[0,2,7],[3,6,5],[0,6,13]]
Output: 13
Explanation: [0,2] and [3,6] are disjoint and together collect 12, but the
single full-length run [0,6] is worth more on its own.
```

### Example 3

```text
Input: n = 4, segments = [[0,0,3],[1,1,4],[2,2,5],[3,3,6]]
Output: 18
Explanation: Each segment is a single position, so all four fit together:
3 + 4 + 5 + 6 = 18.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= segments.length <= 10⁵`
- `segments[i].length == 3`
- `0 <= start_i <= end_i <= n - 1`
- `1 <= value_i <= 10³`

## Hints

### Hint 1

Two segments conflict exactly when their runs overlap, so this is the classic
scheduling-on-a-line trade-off wearing different clothes.

### Hint 2

Ask for the best total over a prefix of positions: extending the prefix past
an unclaimed position just carries the previous answer forward.

### Hint 3

A segment ending at `e` can only be combined with the optimum from positions
before its start — bucket the segments by their end and sweep the row once.
