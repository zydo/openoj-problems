# Convex Fence

## Description

You are given an array `positions`, where `positions[i] = [xi, yi]` gives a
point on the plane. All positions are distinct.

Picture a rope looped around the outermost points and pulled tight: it traces
the boundary of their convex hull. That traced boundary is the fence.

Return every point that lies on the fence — the corner points of the hull, and
also any point that falls exactly on one of its edges. A point strictly inside
the hull is not on the fence.

### Example 1

```text
Input: positions = [[1,1],[5,1],[5,5],[1,5],[3,3],[2,1]]
Output: [[1,1],[5,1],[5,5],[1,5],[2,1]]
Explanation: The four corners sit on the fence, and [2,1] lies on the bottom
edge between [1,1] and [5,1], so it is on the fence as well. Only [3,3] ends up
strictly inside.
```

### Example 2

```text
Input: positions = [[2,7],[2,3],[2,11],[2,5]]
Output: [[2,3],[2,11],[2,5],[2,7]]
Explanation: The four points are collinear, so the hull degenerates to a
segment and every point lies on it.
```

### Example 3

```text
Input: positions = [[4,9],[7,12]]
Output: [[4,9],[7,12]]
Explanation: With two points the fence is the segment joining them, and both
endpoints are on it.
```

### Constraints

- `1 <= positions.length <= 3000`
- `positions[i].length == 2`
- `0 <= xi, yi <= 100`
- All positions are distinct.

## Hints

### Hint 1

The fence is the boundary of the convex hull, so the answer is exactly the
input points lying on that boundary — no others can qualify.

### Hint 2

Andrew's monotone chain finds the strict corners: sort the points, then build
the lower and upper chains with a stack that pops while the top three points
make a non-left turn.

### Hint 3

A strict hull quietly drops points that sit in the middle of an edge, yet those
belong on the fence too. After building the hull, sweep each edge and re-admit
every input point falling on it.
