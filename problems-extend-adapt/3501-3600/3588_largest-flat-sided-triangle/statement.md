# Largest Flat-Sided Triangle

## Description

You are given an array `coords` of `n` points on an unbounded Cartesian
plane, where `coords[i] = [xi, yi]`.

Pick any three of the points as the corners of a triangle, subject to
one rule: at least one side of the triangle must run parallel to the
x-axis or the y-axis. Among all triangles that qualify, find the one
with the largest area and return twice that area — if the best triangle
has area `A`, return `2 * A`.

If no qualifying triangle exists at all, return `-1`.

Keep in mind a triangle must enclose some space: zero area does not
count.

### Example 1

![diagram](figures/3588-1.svg)

```text
Input: coords = [[1,1],[1,2],[3,2],[3,3]]
Output: 2
Explanation: The drawn triangle has a vertical side of length 1 and
    reaches 2 across, so its area is 1/2 * 1 * 2 = 1 and the answer is
    2 * 1 = 2.
```

### Example 2

```text
Input: coords = [[5,5],[5,9],[2,7],[8,7]]
Output: 12
Explanation: The triangle with corners (5, 5), (5, 9), and (2, 7) has a
    vertical side of length 4 whose opposite corner sits 3 units to the
    left, giving 2 * area = 4 * 3 = 12. No other triangle beats it.
```

### Example 3

```text
Input: coords = [[2,3],[3,4],[4,5]]
Output: -1
Explanation: All three points sit on one diagonal line, so the only
    triangle they can form has no side parallel to either axis and
    collapses anyway.
```

### Constraints

- `1 <= n == coords.length <= 10⁵`
- `1 <= coords[i][0], coords[i][1] <= 10⁶`
- All points in `coords` are distinct.

## Hints

### Hint 1

Work in doubled area — `2 * area = base * height` — and no halves ever
appear.

### Hint 2

The flat side is the base: it lies on one horizontal or one vertical
line, and the height is the opposite corner's perpendicular distance
from that line.

### Hint 3

Group points by their shared coordinate. On a line, the best base
spans the line's two extreme points, while the best apex is whichever
of the global farthest points does not sit on the line itself.
