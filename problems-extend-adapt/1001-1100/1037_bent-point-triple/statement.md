# Bent Point Triple

## Description

You are given three points on the plane, where `points[i] = [xi, yi]`.
Call the triple _bent_ when its points are pairwise different and do not
all lie on one straight line — that is, walking `points[0] ->
points[1] -> points[2]` requires an actual turn.

Return `true` if the given triple is bent, and `false` otherwise.

### Example 1

```text
Input: points = [[0,0],[2,4],[4,3]]
Output: true
Explanation: The three points are distinct, and no single line passes
through all of them.
```

### Example 2

```text
Input: points = [[1,5],[4,5],[7,5]]
Output: false
Explanation: All three points share y = 5, so they sit on one horizontal
line.
```

### Example 3

```text
Input: points = [[5,2],[5,9],[5,2]]
Output: false
Explanation: The first and third points coincide, and a repeated point
can never produce a turn.
```

### Constraints

- `points.length == 3`
- `points[i].length == 2`
- `0 <= xi, yi <= 100`

## Hints

### Hint 1

The three points fail to bend exactly when the triangle they span has
zero area — so check whether that area is nonzero.
