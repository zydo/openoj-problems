# Kth Smallest Single-Coin Amount

## Description

You are given an array `coins` of distinct denominations and an integer `k`.
Supply of each denomination is unlimited, but any one amount must be assembled
from copies of a **single** denomination — mixing denominations is not allowed.
So the set of reachable amounts is the union, over the denominations `c`, of
the positive multiples of `c`.

Two denominations can reach the same amount (10 is a multiple of both 2 and
5); such an amount counts once. Return the `k`-th smallest reachable amount.

### Example 1

```text
Input: coins = [4,10], k = 6
Output: 20
Explanation: The multiples of 4 are 4, 8, 12, 16, 20, 24, ... and the
multiples of 10 are 10, 20, 30, ... Merged and deduplicated, the reachable
amounts start 4, 8, 10, 12, 16, 20, ... — the 6th is 20. Note that 20 is
reachable through either denomination yet occupies a single rank.
```

### Example 2

```text
Input: coins = [9], k = 3
Output: 27
Explanation: With one denomination the reachable amounts are 9, 18, 27, ...,
so the 3rd is 27.
```

### Example 3

```text
Input: coins = [2,3,5], k = 7
Output: 9
Explanation: Merging multiples of 2, of 3, and of 5 gives 2, 3, 4, 5, 6, 8,
9, 10, ... — the 7th is 9.
```

### Constraints

- `1 <= coins.length <= 15`
- `1 <= coins[i] <= 25`
- `1 <= k <= 2 * 10⁹`
- All denominations are distinct.

## Hints

### Hint 1

The answer is some amount `x`; the count of reachable amounts `<= x` grows
monotonically with `x`. What does that suggest about how to search for `x`?

### Hint 2

To count reachable amounts `<= x`, add the multiples of each subset of
denominations and subtract the overlaps — inclusion–exclusion, where a subset
contributes multiples of its least common multiple.
