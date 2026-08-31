# Widest Point Triangle

## Description

You are given distinct points in the Cartesian plane, with `points[i] =
[xi, yi]`. Choose any three different points and use them as the vertices of
a triangle.

Return the greatest area obtainable. An answer within `10⁻⁵` of the exact
area is accepted.

### Example 1

```text
Input: points = [[0,0],[3,0],[0,4],[1,1]]
Output: 6.00000
```

### Example 2

```text
Input: points = [[0,0],[1,1],[2,2]]
Output: 0.00000
Explanation: Every possible triple is collinear.
```

### Constraints

- `3 <= points.length <= 50`
- `-50 <= xi, yi <= 50`
- All given points are distinct.
