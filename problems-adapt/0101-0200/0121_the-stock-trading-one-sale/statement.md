# The Stock Trading, One Sale

## Description

An array `prices` lists what one share of a stock costs, with `prices[i]`
the price on day `i`.

You may open exactly one position: pick a day to buy a share, then pick a
strictly later day to sell it. The trade's profit is the selling price minus
the buying price.

Report the largest profit a single trade can earn, and `0` when nothing you
could do turns a profit.

### Example 1

```text
Input: prices = [3,8,1,4]
Output: 5
Explanation: Buy at 3 and sell later at 8 to earn 8 - 3 = 5. The cheap 1
arrives too late to beat that: nothing after it climbs past 4.
```

### Example 2

```text
Input: prices = [9,7,4,2]
Output: 0
Explanation: Every day is cheaper than the one before it, so no trade can
finish in the black.
```

### Example 3

```text
Input: prices = [5,1,5,1,9]
Output: 8
Explanation: Waiting past the early wiggles pays — buying at a 1 and
selling at the closing 9 earns 9 - 1 = 8, more than any trade the first
three days allow.
```

### Constraints

- `1 <= prices.length <= 10⁵`
- `0 <= prices[i] <= 10⁴`
