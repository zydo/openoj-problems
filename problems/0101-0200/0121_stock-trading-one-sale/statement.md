# Stock Trading, One Sale

## Description

You are given an array `prices`, where `prices[i]` is the price of one share
on day `i`.

You may trade at most once: buy a share on some day and sell it on a strictly
later day. The profit of that trade is the sale price minus the purchase
price.

Return the largest profit a single trade can earn. If every possible trade
loses money, return `0`.

### Example 1

```text
Input: prices = [6,2,7,1,5]
Output: 5
Explanation: Buying at 2 and selling later at 7 earns 7 - 2 = 5. The cheaper
price 1 comes too late: nothing after it is worth more than 5.
```

### Example 2

```text
Input: prices = [8,6,6,3]
Output: 0
Explanation: Prices never rise, so no trade earns anything.
```

### Constraints

- `1 <= prices.length <= 10⁵`
- `0 <= prices[i] <= 10⁴`

## Hints

### Hint 1

Sweep the days left to right while carrying the cheapest price seen so far.

### Hint 2

The best trade that sells on a given day buys at that running minimum, so
each day contributes exactly one candidate profit.

### Hint 3

Seed the answer at `0` — the profit of never trading — and a falling price
list needs no special case.
