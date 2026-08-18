# Stock Trading, K Sales

## Description

You are given an integer `k` and an integer array `prices`, where `prices[i]`
is the price of one share on day `i`.

You may complete at most `k` trades: each trade buys a share on some day and
sells it on a strictly later day, and you never hold more than one share —
every sale must come before the next purchase.

Return the largest total profit you can earn. A plan that never trades earns
`0`.

### Example 1

```text
Input: k = 2, prices = [2,6,1,3,5,0,4]
Output: 8
Explanation: Buy at 2 and sell at 6, then buy at 1 and sell at 5, earning
4 + 4 = 8. A third trade (0 to 4) would add 4 more, but only two are allowed.
```

### Example 2

```text
Input: k = 1, prices = [3,1,4,2,6]
Output: 5
Explanation: One trade only: buy at 1 and sell at 6 for 5. The two-hop plan
1 -> 4 -> 6 would need a second trade.
```

### Constraints

- `1 <= k <= 100`
- `1 <= prices.length <= 1000`
- `0 <= prices[i] <= 1000`

### Follow-up

An `O(n·k)` sweep settles the case of small `k`. When is `k` large enough
that the cap stops binding, and what one-pass computation answers that case?

## Hints

### Hint 1

After each day, keep two values per trade count `j`: the best balance while
holding the share of the `j`-th purchase, and the best profit after closing
`j` trades.

### Hint 2

On a day with price `p`: the holding for `j` either stays held or is bought
now out of `j - 1` closed trades; the closed `j` either stays closed or sells
the held `j`-th share at `p`.

### Hint 3

A profitable trade needs two distinct days, so at most `n / 2` trades can
ever pay — past that bound the cap is inert and summing every upward
day-to-day move is optimal.
