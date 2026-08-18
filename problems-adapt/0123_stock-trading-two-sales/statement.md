# Stock Trading, Two Sales

## Description

You are given an array `prices`, where `prices[i]` is the price of one share
on day `i`.

You may trade at most twice: each trade buys a share on some day and sells it
on a strictly later day. You never hold more than one share — every sale must
come before the next purchase.

Return the largest total profit you can earn. A plan that never trades earns
`0`.

### Example 1

```text
Input: prices = [1,4,2,6,3,8]
Output: 10
Explanation: Buy at 1 and sell at 6, then buy at 3 and sell at 8, earning
5 + 5 = 10.
```

### Example 2

```text
Input: prices = [2,3,4,5]
Output: 3
Explanation: Buying at 2 and selling at 5 earns 3. Splitting the climb into
two trades cannot beat one: selling early only gives up the gap crossed in
between.
```

### Example 3

```text
Input: prices = [9,7,7,2]
Output: 0
Explanation: Prices never rise, so no plan earns anything.
```

### Constraints

- `1 <= prices.length <= 10⁵`
- `0 <= prices[i] <= 10⁵`

### Follow-up

Can you decide this with one forward sweep and a fixed handful of variables?
How would the same idea read if the number of allowed trades were `k` instead
of `2`?

## Hints

### Hint 1

Describe your wealth at the end of each day with four states: holding the
first share, cashed out once, holding the second share, cashed out twice.

### Hint 2

Sweep the days once, keeping the best wealth in each state: every state either
keeps yesterday's value or transitions today, where a purchase subtracts the
day's price and a sale adds it.

### Hint 3

A trade that buys and sells on the same day costs nothing, so such a
placeholder can stand in for an unused transaction without inflating the
total.
