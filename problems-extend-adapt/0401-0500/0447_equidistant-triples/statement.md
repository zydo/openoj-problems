# Equidistant Triples

## Description

A list `points` gives distinct locations in the plane. An ordered triple
`(i, j, k)` is counted when the distance from `i` to `j` equals the distance
from `i` to `k`.

Return the total number of such ordered triples.

### Example 1

```text
Input: points = [[0,0],[1,0],[0,1]]
Output: 2
Explanation: From `(0,0)`, both other points sit one unit away, giving the
two orderings `((1,0),(0,0),(0,1))` and `((0,1),(0,0),(1,0))`.
```

### Example 2

```text
Input: points = [[0,0],[1,0],[2,0],[3,0]]
Output: 4
Explanation: The four interior placements choose either side from a distance
of one and two units away.
```

### Example 3

```text
Input: points = [[5,5]]
Output: 0
```

### Constraints

- `n == points.length`, with `1 <= n <= 500`.
- Each point has two coordinates in the inclusive range `[-10⁴, 10⁴]`.
- All points are distinct.
