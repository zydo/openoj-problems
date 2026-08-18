# Fewest Coins To Make Change

## Description

Given an array `coins` of denominations and a target `amount`, return the
smallest number of coins whose values total exactly `amount`. Each
denomination may be used as many times as you like. If no combination of
coins totals `amount`, return `-1`.

### Example 1

```text
Input: coins = [1,4,5], amount = 8
Output: 2
Explanation: Two 4-coins make 8. Taking the largest coin first would give
5 + 1 + 1 + 1 for a total of five coins, so greed does not pay here.
```

### Example 2

```text
Input: coins = [4,6], amount = 7
Output: -1
Explanation: Every coin is even, so no combination reaches the odd amount 7.
```

### Example 3

```text
Input: coins = [9], amount = 0
Output: 0
Explanation: No coins are needed to reach zero.
```

### Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2³¹ - 1`
- `0 <= amount <= 10⁴`

## Hints

### Hint 1

Ask the question for every value at once: what is the fewest coins needed to
reach each total from 0 up to `amount`?

### Hint 2

The answer for a total decomposes by its last coin — if that coin is `c`,
the rest must optimally make `a - c`, leaving `dp[a] = min(dp[a - c] + 1)`.

### Hint 3

Seed `dp[0] = 0` and hold every other total at infinity. If the target's
entry is still infinite after the table is filled, no combination reaches it.
