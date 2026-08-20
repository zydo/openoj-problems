# Ways To Make Change

## Description

Given an array `coins` of denominations and a target `amount`, count the
number of distinct combinations of coins that total exactly `amount`. Coins
of each denomination are available without limit.

Two combinations are the same when they contain the same number of coins of
each denomination; the order the coins are laid out in does not matter. If no
combination reaches `amount`, the count is `0`.

### Example 1

```text
Input: amount = 6, coins = [1,2,3]
Output: 7
Explanation: The seven combinations are
6 = 3+3
  = 3+2+1
  = 3+1+1+1
  = 2+2+2
  = 2+2+1+1
  = 2+1+1+1+1
  = 1+1+1+1+1+1
```

### Example 2

```text
Input: amount = 11, coins = [4,6]
Output: 0
Explanation: Any combination of 4s and 6s is even, so the odd amount 11 is
never reached.
```

### Example 3

```text
Input: amount = 8, coins = [2,4,6]
Output: 4
Explanation: 2+2+2+2, 2+2+4, 4+4, and 2+6. A denomination being a multiple
of another changes nothing — each multiset is still counted once.
```

### Constraints

- `1 <= coins.length <= 300`
- `1 <= coins[i] <= 5000`
- all values in `coins` are distinct
- `0 <= amount <= 5000`
- the answer fits in a signed 32-bit integer.

## Hints

### Hint 1

Let `dp[a]` be the number of combinations totaling exactly `a`. The anchor is
`dp[0] = 1`: the empty combination.

### Hint 2

Fold in one denomination at a time. For coin `c`, sweep `a` upward from `c`
doing `dp[a] += dp[a - c]`; reading `dp[a - c]` after it has already picked
up uses of `c` is what lets that coin repeat.

### Hint 3

The nesting order decides what is being counted. Completing all amounts for
one coin before starting the next forces every combination into a single
fixed coin order, so each is counted once; swapping the loops would count
ordered sequences instead.
