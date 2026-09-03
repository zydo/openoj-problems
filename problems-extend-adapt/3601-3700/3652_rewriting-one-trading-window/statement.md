# Rewriting One Trading Window

## Description

A trading plan covers `n` days. Two equally long arrays describe it:
`prices[i]` is the stock's price on day `i`, and `strategy[i]` is the action
planned for that day — `-1` buys one unit, `0` sits out the day, and `1`
sells one unit. Nothing constrains the actions against each other: buys and
sells never run out of budget or inventory, so every plan is feasible.

You may touch the plan at most once. The change is fixed in shape: given an
even integer `k`, pick one block of `k` consecutive days and overwrite the
whole block — its first half becomes `0` (sit out) and its second half
becomes `1` (sell). Leaving the plan exactly as it is also allowed.

A plan's profit is the total of `strategy[i] * prices[i]` over all days.
Return the largest profit reachable by making that single change — or none.

### Example 1

```text
Input: prices = [7,3,9,2], strategy = [1,0,-1,1], k = 2
Output: 18
Explanation: The plan as written earns 7 + 0 + (-2) + 2 = 7. Rewriting the
block covering days 1-2 turns the plan into [1,0,1,1], worth 7 + 0 + 9 + 2
= 18. The other two block positions score 3 and 7, so 18 is the best.
```

### Example 2

```text
Input: prices = [4,6,5,1], strategy = [1,1,0,-1], k = 4
Output: 9
Explanation: The untouched plan earns 4 + 6 + 0 + (-1) = 9. With `k = 4` the
only block is the entire array, rewritten to [0,0,1,1], worth 0 + 0 + 5 + 1
= 6. Since that scores less, the plan stays as it is and the answer is 9.
```

### Example 3

```text
Input: prices = [2,8,4,1,9,6,3,5], strategy = [-1,1,0,-1,0,1,-1,0], k = 6
Output: 20
Explanation: The plan as written earns 8. Rewriting the block covering days
2-7 empties days 2-4 and sells days 5-7, leaving the plan [-1,1,0,0,0,1,1,1]
worth (-2) + 8 + 0 + 0 + 0 + 6 + 3 + 5 = 20. The other block positions score
13 and 16, so 20 is the best.
```

### Constraints

- `2 <= prices.length == strategy.length <= 10⁵`
- `1 <= prices[i] <= 10⁵`
- `-1 <= strategy[i] <= 1`
- `2 <= k <= prices.length`, and `k` is even

## Hints

### Hint 1

Two running sums are enough to score any candidate in constant time: one
over `prices[i]`, one over `strategy[i] * prices[i]`. The second sum's
total is the profit of the untouched plan.

### Hint 2

Placing the rewritten block at day `l` discards that block's current
weighted contribution and replaces the second half of it with the raw price
sum there. Sweep all `n - k + 1` placements, add the best nonnegative gain
to the untouched profit, and you are done.
