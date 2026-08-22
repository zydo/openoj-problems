# Count Dominated Points

## Description

You are given an array `points` of two-value entries; `points[i] = [x_i, y_i]`
places a point at coordinates `x_i` and `y_i`.

One point is **dominated** when some other point of the array sits strictly
beyond it in both coordinates: there is a `j ≠ i` with `x_j > x_i` and
`y_j > y_i`. Sharing a coordinate is not enough — the comparison must be
strict on both axes.

Return how many points of the array are dominated.

### Example 1

```text
Input: points = [[8,1],[1,9],[9,3],[2,2],[3,4]]
Output: 2
Explanation: [8,1] is dominated by [9,3], and [2,2] by [9,3] (and by [3,4]).
No point beats [1,9], since every larger x there carries a smaller y.
```

### Example 2

```text
Input: points = [[6,3],[6,8],[2,9],[4,7]]
Output: 1
Explanation: [4,7] is dominated by [6,8]. The two points with x = 6 do not
dominate anything — neither beats the other on x, and neither has a larger
x than the other entries.
```

### Example 3

```text
Input: points = [[1,1],[2,2],[3,3],[4,1]]
Output: 2
Explanation: [1,1] is dominated by [2,2] and [3,3]; [2,2] is dominated by
[3,3]. [3,3] survives because [4,1] has the larger x but a smaller y, and
[4,1] has the largest x of all.
```

### Constraints

- `2 <= points.length <= 10⁵`
- `points[i].length == 2`
- `1 <= x_i, y_i <= 10⁵`

## Hints

### Hint 1

For a point to be dominated, its dominator must have a larger `x`. What
does sorting by `x` descending do to the positions of all potential
dominators?

### Hint 2

Visiting points from largest `x` down, every potential dominator of the
current point has already been visited — so a single running maximum of `y`
replaces comparing against everyone.

### Hint 3

Points with equal `x` never dominate each other. How should they be ordered
among themselves so that the running maximum only ever reflects strictly
larger `x`?
