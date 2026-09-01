# Painting the Block III

## Description

A street of `m` houses is due for repainting: every house takes exactly
one of `n` colors numbered `1` through `n`, and a few houses already
carry last summer's paint and must keep it.

A block is a longest run of adjacent houses wearing the same color. The
row `[1,2,2,3,3,2,1,1]`, for example, splits into the five blocks
`[1]`, `[2,2]`, `[3,3]`, `[2]`, `[1,1]`.

You are given the array `houses`, the `m x n` matrix `cost`, and an
integer `target`:

- `houses[i]` is house `i`'s current color, or `0` if the house still
  needs paint.
- `cost[i][j]` is what it costs to paint house `i` in color `j + 1`.

Paint every house that still needs paint so that the finished street
consists of exactly `target` blocks, spending as little as possible.
Return that minimum spend, or `-1` when no arrangement reaches the
target.

### Example 1

```text
Input: houses = [0,0,0], cost = [[2,3],[4,1],[1,5]], m = 3, n = 2, target = 2
Output: 5
Explanation: Paint the street as [2,2,1]. It forms exactly target = 2
blocks, [2,2] and [1], at a total cost of 3 + 1 + 1 = 5.
```

### Example 2

```text
Input: houses = [0,1,0], cost = [[3,1],[9,9],[1,4]], m = 3, n = 2, target = 2
Output: 2
Explanation: The middle house is already color 1. Painting the ends
gives [2,1,1] — the 2 blocks [2] and [1,1] — for 1 + 1 = 2.
```

### Example 3

```text
Input: houses = [1,2,1], cost = [[1,1],[1,1],[1,1]], m = 3, n = 2, target = 2
Output: -1
Explanation: The painted houses already form the 3 blocks [1], [2] and
[1] — more than target = 2, and no painting can reduce that.
```

### Constraints

- `m == houses.length == cost.length`
- `n == cost[i].length`
- `1 <= m <= 100`
- `1 <= n <= 20`
- `1 <= target <= m`
- `0 <= houses[i] <= n`
- `1 <= cost[i][j] <= 10⁴`

## Hints

### Hint 1

Dynamic programming fits: settle the houses left to right while
remembering the previous house's color and how many blocks have
accumulated.

### Hint 2

Let `dp[i][j][k]` be the cheapest way to settle the first `i` houses
with house `i` painted color `j` and exactly `k` blocks formed.
