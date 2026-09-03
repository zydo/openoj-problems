# The Stock Trading, Unlimited Sales II

## Description

An array `prices` lists what one share of a stock costs, with `prices[i]`
the price on day `i`.

This time you may trade as often as you like: buy a share, sell it, and
turn around and buy again. You can never hold more than one share at a
time, and a sale must come before the next purchase — though the two may
land on the same day, so one position can close the moment the next opens.

Return the largest total profit this unlimited trading can collect.

### Example 1

```text
Input: prices = [4,2,7,1,6]
Output: 10
Explanation: Buying at 2 and selling at 7 banks 5; buying the later 1 and
selling at 6 banks another 5, for 10 in all. No schedule beats pocketing
both rises.
```

### Example 2

```text
Input: prices = [2,1,2,1,2]
Output: 2
Explanation: Two separate swings — buy at 1, sell at 2, twice — stack
1 + 1 = 2, while the best single long hold tops out at 1. Being allowed to
trade again is worth real money here.
```

### Example 3

```text
Input: prices = [8,6,5,3]
Output: 0
Explanation: The prices only fall, so every possible trade loses money and
the best plan is to never buy.
```

### Constraints

- `1 <= prices.length <= 3 * 10⁴`
- `0 <= prices[i] <= 10⁴`
