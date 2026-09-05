# One Placement to Spark the Most Points

## Description

You are given a 2D integer array `points`, where `points[i] = [xi, yi]` holds
the coordinates of the `ith` point, and every pair of points sits at
different coordinates.

Points trigger each other along grid lines: the moment a point is sparked,
every point sharing its x-coordinate or its y-coordinate is sparked too,
and each newly sparked point keeps spreading the same way until a full pass
changes nothing.

Before the spreading starts, you get to drop one extra point at any integer
coordinate `(x, y)` that is not already occupied. That new point is sparked
first, and its chain reaction follows the rule above.

Return the largest number of points that can end up sparked, counting the
point you added.

### Example 1

```text
Input: points = [[0,0],[0,5],[7,0],[9,9]]
Output: 5
Explanation: Drop the new point at (9, 0). It shares y = 0 with (0, 0) and
(7, 0), so both are sparked; (0, 0) in turn shares x = 0 with (0, 5), and
(9, 0) shares x = 9 with (9, 9). All five points — (9, 0), (0, 0), (7, 0),
(0, 5), (9, 9) — end up sparked, and no placement does better.
```

### Example 2

```text
Input: points = [[1,1],[1,4],[6,4],[6,7]]
Output: 5
Explanation: The four points already form one chain: (1, 1) meets (1, 4) on
x = 1, (1, 4) meets (6, 4) on y = 4, and (6, 4) meets (6, 7) on x = 6. Any
placement, say (3, 1), sparks its chain neighbor and the spark then floods
the whole chain, so all 4 original points plus the new one are sparked.
```

### Example 3

```text
Input: points = [[2,8],[2,12],[5,8],[20,3],[20,9],[23,3],[40,40]]
Output: 7
Explanation: Drop the new point at (5, 3). It sparks (5, 8) through
x = 5 and (20, 3), (23, 3) through y = 3; from there the spark covers the
rest of both groups, reaching (2, 8), (2, 12), (20, 9). That is 6 original
points plus the placement — 7 in total.
```

### Constraints

- `1 <= points.length <= 10⁵`
- `points[i] = [xi, yi]`
- `-10⁹ <= xi, yi <= 10⁹`
- All coordinates in `points` are distinct.

## Hints

### Hint 1

Two points belong to the same group when a chain of shared x- or
y-coordinates links them — a disjoint-set union captures exactly that.

### Hint 2

Sweep the points once; for each x value and each y value, attach every
point on that line to the first point seen there.

### Hint 3

A dropped point `(x0, y0)` can only reach the group on column `x0` and the
group on row `y0`, so it sparks at most two groups.

### Hint 4

Those two groups can always be bridged by some empty cell, so the best move
sparks the two largest groups plus the new point — or all `n` points plus
the new one when everything already sits in a single group.
