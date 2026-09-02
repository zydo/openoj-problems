# Richest Rising-Price Triplet II

## Description

A store stocks `n` items, given as the 0-indexed arrays `prices` and
`profits`, both of length `n`: item `i` costs `prices[i]` and yields a
profit of `profits[i]` when taken.

Choose three items with indices `i < j < k` whose prices also rise in
that order — `prices[i] < prices[j] < prices[k]`. Such a pick earns the
combined profit `profits[i] + profits[j] + profits[k]`.

Return the largest combined profit any valid pick can reach, or `-1`
when no three items satisfy the condition.

### Example 1

```text
Input: prices = [3,7,9], profits = [4,1,6]
Output: 11
Explanation: The only valid pick takes all three items: 3 < 7 < 9 with
indices 0 < 1 < 2.
Its combined profit is 4 + 1 + 6 = 11.
```

### Example 2

```text
Input: prices = [2,5,1,7,6], profits = [3,4,2,8,5]
Output: 15
Explanation: The best pick takes indices 0, 1, and 3 — prices
2 < 5 < 7 — earning 3 + 4 + 8 = 15.
No other rising trio of items is worth more: 2 < 5 < 6 earns
3 + 4 + 5 = 12, and every trio through the lone 1 tops out lower
still.
```

### Example 3

```text
Input: prices = [4,1,6,3,8], profits = [7,2,5,9,1]
Output: 13
Explanation: The pick 4 < 6 < 8 at indices 0, 2, 4 earns
7 + 5 + 1 = 13, and the pick 1 < 3 < 8 earns 2 + 9 + 1 = 12.
Neither the remaining trios nor any other combination beats 13.
```

### Constraints

- `3 <= prices.length == profits.length <= 50000`
- `1 <= prices[i] <= 5000`
- `1 <= profits[i] <= 10⁶`

## Hints

### Hint 1

Anchor every candidate on its middle item `j`: the rest of the pick is
the best profit among earlier items priced strictly below
`prices[j]`, plus the best among later items priced strictly above it.

### Hint 2

For each `j` compute `left[j]`, the maximum `profits[i]` over
`i < j` with `prices[i] < prices[j]`, by sweeping left to right and
answering "best profit so far among prices under `p`" queries.

### Hint 3

Prices are capped at 5000, so a maximum-value Fenwick tree over price
ranks answers each query in logarithmic time; insert item `j` only
after its own query to keep the strict inequality.

### Hint 4

Fill `right[j]` with a mirrored sweep from the right, then the answer
is the largest `left[j] + profits[j] + right[j]` over all `j` — every
profit is at least 1, so a zero on either side means no such item
exists and disqualifies that middle item.
