# Fewest Coins to Cover Every Sum

## Description

You are given an integer array `coins` — the values of the coins in your
pile — and an integer `target`. A value `x` is *reachable* when some subset
of the pile's coins sums to exactly `x`.

Adding coins is allowed: each addition is one coin of any positive integer
value you choose. Return the smallest number of coins you must add so that
every integer from `1` to `target` becomes reachable.

### Example 1

```text
Input: coins = [1,3,9], target = 15
Output: 2
Explanation: Add coins of value 2 and 7. With the pile {1,2,3,7,9} every
value up to 15 is a subset sum — the absorbed coverage runs 1, then 1..3,
then 1..6, then 1..13, then 1..22. No single added coin can bridge both
gaps the original pile leaves.
```

### Example 2

```text
Input: coins = [1,2,6,12], target = 16
Output: 1
Explanation: The coins 1 and 2 already cover 1..3, but the 6 jumps past 4.
Adding a single coin of value 4 extends coverage to 1..7, and the 6 and 12
then stretch it past the target.
```

### Example 3

```text
Input: coins = [2,3], target = 7
Output: 2
Explanation: Without a 1-coin, the value 1 is unreachable — one addition
must be a 1. That covers 1..3 after absorbing 2 and 3, and the value 7
still needs a second coin. Nothing else can substitute for either.
```

### Constraints

- `1 <= target <= 10^5`
- `1 <= coins.length <= 10^5`
- `1 <= coins[i] <= target`

## Hints

### Hint 1

Sort the coins and keep one number as your state: `reach`, meaning every
value in `[1, reach]` is already reachable.

### Hint 2

A next coin `c` helps exactly when `c <= reach + 1` — it then extends
coverage to `reach + c`. If `c > reach + 1`, the value `reach + 1` is
stranded: every remaining coin is even larger, so no later coin can
produce it either.

### Hint 3

When the value `reach + 1` is stranded, the best possible single addition
is a coin worth exactly `reach + 1`: it plugs the smallest hole and more
than doubles coverage, lifting `reach` to `2 * reach + 1`.
