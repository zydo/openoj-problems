# Coin Combos For A Total

## Description

You hold an endless supply of coins worth `1`, `2`, and `6`, plus exactly
two coins worth `4`.

Given an integer `n`, count the distinct combinations of your coins that
add up to `n`. Combinations are unordered — the multiset `[2, 2, 1]` is the
same combination as `[1, 2, 2]` — and no combination may use more than two
`4` coins, since that is all you have.

The count can be enormous, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 6
Output: 7
Explanation: The seven combinations are [1,1,1,1,1,1], [2,1,1,1,1],
[2,2,1,1], [2,2,2], [6], [4,1,1], and [4,2].
```

### Example 2

```text
Input: n = 10
Output: 16
Explanation: Sixteen combinations work, among them [2,2,2,2,2], [6,2,2],
and [4,4,2] — the last one spending both of the scarce 4-coins.
```

### Example 3

```text
Input: n = 3
Output: 2
Explanation: Only [1,1,1] and [2,1] reach 3.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

Dynamic programming over the denominations works well here.

### Hint 2

Let `dp[i][x]` be the number of ways to form total `x` using only the first
`i` denominations, where `coin[i]` is the value of the i-th denomination.

### Hint 3

Unbounded denominations give the recurrence
`dp[i][x] = dp[i - 1][x] + dp[i][x - coin[i]]`.

### Hint 4

The value-4 coin is capped at two copies, so handle it separately: run the
unbounded count for `n`, `n - 4`, and `n - 8`, one case per number of
4-coins spent, dropping any negative target.
