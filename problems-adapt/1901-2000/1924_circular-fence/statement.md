# Circular Fence

## Description

You are given an array `positions`, where `positions[i] = [xi, yi]` gives a
point on the plane.

This time the fence must be a circle: a center `(x, y)` and a radius `r` such
that every point lies inside the circle or on its border. Among all such
circles, the cheapest fence is the one with the smallest radius.

Return the fence as the array `[x, y, r]`.

Answers within `10⁻⁵` of the actual values will be accepted.

### Example 1

```text
Input: positions = [[0,0],[6,8],[1,1]]
Output: [3.00000,4.00000,5.00000]
Explanation: The segment from [0,0] to [6,8] is a diameter of the smallest
circle: its midpoint (3, 4) is the center and half its length, 5, is the
radius. The point [1,1] already lies inside that circle.
```

### Example 2

```text
Input: positions = [[0,2],[4,2],[2,6]]
Output: [2.00000,3.50000,2.50000]
Explanation: All three points sit on the border here, and no smaller circle
encloses them: the circle through them has center (2, 3.5) and radius 2.5.
```

### Example 3

```text
Input: positions = [[3,4]]
Output: [3.00000,4.00000,0.00000]
Explanation: A single point needs no rope at all — a radius-0 circle at the
point itself encloses it.
```

### Constraints

- `1 <= positions.length <= 3000`
- `positions[i].length == 2`
- `0 <= xi, yi <= 3000`

## Hints

### Hint 1

The smallest enclosing circle is pinned by at most three of the points: either
one point sits at the center with radius 0, two points form a diameter, or
three points lie on the border.

### Hint 2

Welzl's scheme processes the points one at a time, always holding the smallest
circle covering those already handled. The next point landing outside is good
news, not trouble: the revised circle must have it on the rim, so recompute
with that point anchored — and inside that computation the same reasoning
repeats, anchoring a second and then a third rim point.

### Hint 3

Avoid square roots while testing coverage: a point is enclosed once its squared
distance to the center is at most the squared radius. Give that comparison a
tiny slack, and rim points — exact by construction under integer coordinates —
stop registering as escapes.
