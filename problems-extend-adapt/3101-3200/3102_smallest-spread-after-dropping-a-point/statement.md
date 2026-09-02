# Smallest Spread After Dropping a Point

## Description

Several points sit on a plane; `points[i] = [xi, yi]` holds their
integer coordinates. The distance between two points means their
Manhattan distance, `|x1 - x2| + |y1 - y2|`.

Define the spread of a group of points as the largest Manhattan
distance between any two members of the group. You must discard
exactly one point of your choosing so that the spread of the survivors
is as small as possible.

Return that smallest reachable spread.

### Example 1

```text
Input: points = [[2,4],[6,1],[3,9]]
Output: 6
Explanation: Dropping (2, 4) leaves (6, 1) and (3, 9), which sit 11
apart. Dropping (6, 1) leaves (2, 4) and (3, 9), spanning
|2 - 3| + |4 - 9| = 6. Dropping (3, 9) leaves a gap of 7. The middle
choice is best, so the answer is 6.
```

### Example 2

```text
Input: points = [[4,2],[8,10],[1,6],[7,3]]
Output: 9
Explanation: The widest surviving pair measures 11, 9, 12 and 12 when
the discarded point is (4, 2), (8, 10), (1, 6) and (7, 3) respectively.
Dropping (8, 10) wins: (1, 6) and (7, 3) then span 9.
```

### Example 3

```text
Input: points = [[5,5],[5,5],[9,9]]
Output: 0
Explanation: Dropping (9, 9) leaves two coincident points, whose
largest mutual distance is 0.
```

### Constraints

- `3 <= points.length <= 10⁵`
- `points[i].length == 2`
- Coordinates satisfy `1 <= points[i][0], points[i][1] <= 10⁸`.

## Hints

### Hint 1

Rotate the plane by 45 degrees. With `u = x + y` and `v = x - y`, the
Manhattan distance between two points becomes `max(|Δu|, |Δv|)`, so a
group's spread is the larger of the two ranges of its rotated
coordinates.

### Hint 2

Removing one point can change a coordinate range only when that point
realizes the range's minimum or maximum — and the replacement extreme
is then simply the neighboring entry of a sorted order.

### Hint 3

Sort the indices once by `u` and once by `v`. For every candidate
removal, read off both ranges while skipping that single point and keep
the smallest larger-of-the-two value you see.
