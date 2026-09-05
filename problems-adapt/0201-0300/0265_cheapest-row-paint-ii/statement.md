# Cheapest Row Paint II

## Description

You are given an `n x k` cost grid `costs` describing a row of `n` houses
that must each be painted in one of `k` colors: `costs[i][j]` is the price
of painting house `i` in color `j`.

Choose a color for every house so that no two neighboring houses share a
color, and return the lowest total price achievable across the whole row.

### Example 1

```text
Input: costs = [[7,3,8,6],[5,9,4,2],[1,6,3,9]]
Output: 6
Explanation: Paint house 0 color 1 (3), house 1 color 3 (2), house 2 color
0 (1); no two adjacent houses share a color. Total: 3 + 2 + 1 = 6.
```

### Example 2

```text
Input: costs = [[4,1],[2,5]]
Output: 3
```

### Constraints

- `costs.length == n`
- `costs[i].length == k`
- `1 <= n <= 100`
- `2 <= k <= 20`
- `1 <= costs[i][j] <= 20`

### Follow-up

Can you find a solution that runs in `O(n * k)` time?
