# Nearest Aligned Point

## Description

You are standing at `(x, y)` on a coordinate grid, and you are given a list of
`points` where the `i`-th point sits at `(ai, bi)`. Call a point **aligned**
with you when it shares one of your two coordinates — that is, when
`ai == x` or `bi == y`.

Among all aligned points, return the index of the one closest to you,
measured by Manhattan distance. If several aligned points are equally close,
return the smallest such index. If no point is aligned with you, return `-1`.

The Manhattan distance between `(x1, y1)` and `(x2, y2)` is
`abs(x1 - x2) + abs(y1 - y2)`.

### Example 1

```text
Input: x = 5, y = 2, points = [[7,2],[1,9],[5,8],[4,3],[2,2]]
Output: 0
Explanation: The aligned points are [7,2], [5,8] and [2,2], at distances 2,
6 and 3 from your location. [7,2] is the closest, so return its index 0.
```

### Example 2

```text
Input: x = 6, y = 3, points = [[4,5],[2,3],[6,7],[1,3]]
Output: 1
Explanation: [2,3] and [6,7] are both aligned and both lie at distance 4.
The tie is broken in favor of the smaller index, so return 1.
```

### Example 3

```text
Input: x = 9, y = 9, points = [[9,9],[3,9]]
Output: 0
Explanation: A point at your own location is aligned and at distance 0.
```

### Example 4

```text
Input: x = 4, y = 7, points = [[1,1],[8,2],[3,4]]
Output: -1
Explanation: No point shares either of your coordinates.
```

### Constraints

- `1 <= points.length <= 10⁴`
- `points[i].length == 2`
- `1 <= x, y, ai, bi <= 10⁴`

## Hints

### Hint 1

An aligned point already matches you on one axis, so its Manhattan distance
is just the absolute gap along the other axis — no full distance formula is
needed.

### Hint 2

Walk the list once, remembering the best distance seen so far and where it
occurred. Replace the incumbent only on a strictly smaller distance, so an
equal-distance tie naturally keeps the earlier index.
