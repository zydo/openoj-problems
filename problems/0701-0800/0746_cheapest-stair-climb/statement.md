# Cheapest Stair Climb

## Description

A staircase has `n` steps numbered `0` to `n - 1`. Standing on step `i` charges
you `cost[i]`, and once charged you may climb one or two steps at a time. The
landing above the last step — position `n` — is the goal, and standing there
costs nothing.

You may begin on step `0` or step `1`; whichever you choose, its charge applies
like any other.

Return the smallest total charge for getting from your starting step to the
landing.

### Example 1

```text
Input: cost = [4,17,6,9]
Output: 10
Explanation: Begin on step 0 and pay 4. Climb two steps to step 2, pay 6, then climb two more steps onto the landing. Total charge 4 + 6 = 10; the pricey step 1 is skipped entirely.
```

### Example 2

```text
Input: cost = [8,3]
Output: 3
Explanation: Begin on step 1 and hop straight onto the landing, paying only 3.
```

### Example 3

```text
Input: cost = [5,0,0,0,5]
Output: 0
Explanation: Begin on the free step 1 and hop in twos across the other free steps: no charge is ever paid.
```

### Constraints

- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

## Hints

### Hint 1

Work backwards. How much must you pay if you are _already_ standing on step
`i`, with every climb ahead of you?

### Hint 2

Put the landing at position `n`; from there the remaining cost is `0`. From
step `i` you must pay `cost[i]` plus the better of the two continuations.

### Hint 3

Fill `dp[i] = cost[i] + min(dp[i+1], dp[i+2])` from `n - 1` down to `0`. The
free choice of starting step makes the answer `min(dp[0], dp[1])`.
