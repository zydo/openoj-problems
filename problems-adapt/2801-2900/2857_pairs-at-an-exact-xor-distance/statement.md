# Pairs At An Exact XOR Distance

## Description

A list of points in the plane arrives as a 2D integer array `coordinates`,
where `coordinates[i] = [xi, yi]`.

This problem measures separation in an unusual way. For two points
`(x1, y1)` and `(x2, y2)`, call their distance `(x1 XOR x2) + (y1 XOR y2)`,
with `XOR` the bitwise exclusive-or.

How many index pairs `(i, j)` with `i < j` sit at a distance of exactly `k`?
Return that count.

### Example 1

```text
Input: coordinates = [[3,4],[1,4],[5,6],[5,4]], k = 2
Output: 2
Explanation: Points 0 and 1 give (3 XOR 1) + (4 XOR 4) = 2, and points
2 and 3 give (5 XOR 5) + (6 XOR 4) = 2.
```

### Example 2

```text
Input: coordinates = [[6,9],[6,9],[6,9]], k = 0
Output: 3
Explanation: Every pair of identical points has distance 0, and there
are three ways to pick two of them.
```

### Example 3

```text
Input: coordinates = [[0,0],[1,2],[2,1],[3,3]], k = 3
Output: 4
Explanation: The qualifying pairs are (0,1), (0,2), (1,3), and (2,3).
```

### Constraints

- `2 <= coordinates.length <= 5 * 10⁴`
- `0 <= xi, yi <= 10⁶`
- `0 <= k <= 100`

## Hints

### Hint 1

Write `x = x1 XOR x2` and `y = y1 XOR y2`. XOR is its own inverse, so
knowing `x` and `x1` hands you `x2 = x XOR x1`, and likewise for the
y-coordinates.

### Hint 2

Since `x + y = k`, fixing a value for `x` fixes both partners:
`x2 = x XOR x1` and `y2 = (k - x) XOR y1`.

### Hint 3

Try every possible split `x` of `k`, and for each one look up how many
points seen so far equal the reconstructed partner of the current point.
