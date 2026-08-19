# Cheapest Parity-Ruled Grid Walk

## Description

You are given a grid of `m` rows and `n` columns, and a 2D integer array
`penalty` of the same shape. Entering a cell `(i, j)` costs `(i + 1) * (j + 1)`,
and you pay for cell `(0, 0)` the moment you set out.

Your moves are counted `1, 2, 3, ...` from the start, and the parity of the
count governs the compass:

- On an odd count, heading right or down carries no extra charge.
- On an even count, heading left or up carries no extra charge.

Heading a direction the count disallows costs, beyond the destination's entry
price, `penalty[i][j]` for the cell `(i, j)` being left. Standing still for
one count costs that same `penalty[i][j]` — at times the cheapest way to
swing the parity around to what you want. Every move or standstill consumes
one count, so the parity turns over each time regardless of what was paid.

Return the least total cost of walking from `(0, 0)` to `(m - 1, n - 1)`.

### Example 1

```text
Input: m = 2, n = 2, penalty = [[4,7],[2,9]]
Output: 9
Explanation:
Setting out costs (0 + 1) * (0 + 1) = 1.
Count 1 (odd): head down into (1, 0), entry (1 + 1) * (0 + 1) = 2.
Count 2 (even): right is disallowed, so entering (1, 1) costs its entry
(1 + 1) * (1 + 1) = 4 plus penalty[1][0] = 2 for leaving (1, 0) the wrong way.
Total: 1 + 2 + 4 + 2 = 9. Heading right first would strand the walk with
penalty[0][1] = 7 later.
```

### Example 2

```text
Input: m = 2, n = 2, penalty = [[0,5],[6,3]]
Output: 7
Explanation:
Setting out costs 1.
Count 1 (odd): stand still in (0, 0) for penalty[0][0] = 0.
Count 2 (even): head right against the rule — entry 2 plus penalty[0][0] = 0.
Count 3 (odd): head down freely, entry 4.
Total: 1 + 0 + 2 + 0 + 4 = 7. A free standstill buys exactly the parity the
next move wants.
```

### Example 3

```text
Input: m = 2, n = 3, penalty = [[6,0,8],[9,3,2]]
Output: 12
Explanation:
Setting out costs 1.
Count 1 (odd): right into (0, 1), entry 2.
Count 2 (even): right again is against the rule — entry 3 plus penalty[0][1] = 0.
Count 3 (odd): down into (1, 2), entry 6.
Total: 1 + 2 + 3 + 0 + 6 = 12.
```

### Constraints

- `1 <= m, n <= 10^5`
- `2 <= m * n <= 10^5`
- `penalty.length == m`
- `penalty[i].length == n`
- `0 <= penalty[i][j] <= 10^5`

## Hints

### Hint 1

Two walks standing on the same cell are not in the same situation — which
parity comes next changes everything. So the state is `(i, j, parity)`.

### Hint 2

From each state, try the four neighboring cells and standing still; all five
choices spend one count and flip the parity.

### Hint 3

Price each choice by the rule: the destination's entry cost, plus the
departure cell's penalty whenever the direction disagrees with the parity —
and exactly that penalty for standing still.

### Hint 4

No price is negative, so Dijkstra over the doubled grid gives exact
distances. The walk ends at the goal under either parity.
