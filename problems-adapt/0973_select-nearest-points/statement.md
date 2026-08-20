# Select Nearest Points

## Description

Given integer coordinate pairs `points` and an integer `k`, return the `k`
points with the smallest Euclidean distance from `(0, 0)`.

The selected set is unique, although its points may be returned in any order.

### Example 1

```text
Input: points = [[4,1],[-1,2],[0,-3]], k = 1
Output: [[-1,2]]
Explanation: The squared distances are 17, 5, and 9, so [-1,2] is nearest.
```

### Example 2

```text
Input: points = [[-6,0],[2,2],[1,-4],[0,5]], k = 3
Output: [[2,2],[1,-4],[0,5]]
Explanation: These points have squared distances 8, 17, and 25; the omitted
point has squared distance 36.
```

### Constraints

- `1 <= k <= points.length <= 10^4`
- Each point is `[x, y]` with `-10^4 <= x, y <= 10^4`.

## Hints

### Hint 1

Square roots preserve ordering for nonnegative values, so compare `x*x + y*y`
instead of computing Euclidean distances directly.

### Hint 2

Sorting all points by that key and taking a prefix is sufficient at these
bounds.

### Hint 3

A size-`k` max-heap or quickselect can avoid fully sorting larger inputs.
