# Peak Tastiness Basket

## Description

You are given two non-negative integer arrays `price` and `tastiness`,
both of length `n`, and two non-negative integers `maxAmount` and
`maxCoupons`. For each index `i`:

- `price[i]` is the cost of the `i`-th fruit, and
- `tastiness[i]` is the enjoyment the `i`-th fruit provides.

Pick a set of fruits to buy so that the total tastiness is as large as
possible while the total cost stays within `maxAmount`. A coupon lets you
buy one fruit for half its price, rounded down to the nearest integer, and
you may use at most `maxCoupons` coupons overall. Every fruit may be bought
at most once, and each coupon applies to at most one fruit. Return the
maximum total tastiness achievable.

### Example 1

```text
Input: price = [6,3,9,4], tastiness = [7,2,5,1], maxAmount = 10,
maxCoupons = 1
Output: 12
Explanation: Buy the first fruit at full price (cost 6, tastiness 7) and
the third fruit with the coupon (cost 9 / 2 = 4, tastiness 5). The total
cost is 10 and the tastiness is 12, which is optimal.
```

### Example 2

```text
Input: price = [4,5,6], tastiness = [10,20,30], maxAmount = 12,
maxCoupons = 2
Output: 60
Explanation: Use the coupons on the first two fruits (costs 2 and 2) and
buy the third at full price (cost 6). The total cost is 10 and every fruit
is bought, giving tastiness 60.
```

### Example 3

```text
Input: price = [7,6,1], tastiness = [4,5,8], maxAmount = 6,
maxCoupons = 1
Output: 13
Explanation: Buy the second fruit with the coupon (cost 3, tastiness 5)
and the third fruit at full price (cost 1, tastiness 8). The total cost is
4 and the tastiness is 13; no selection fits the budget with more.
```

### Constraints

- `n == price.length == tastiness.length`
- `1 <= n <= 100`
- `0 <= price[i], tastiness[i], maxAmount <= 1000`
- `0 <= maxCoupons <= 5`

## Hints

### Hint 1

Each fruit offers three choices: skip it, buy it at full price, or buy it
with a coupon. Trying every combination is exponential, so the budget and
coupon dimensions need a shared state.

### Hint 2

Use dynamic programming over the amount spent so far and the coupons used
so far, keeping the best tastiness reachable in each state.
