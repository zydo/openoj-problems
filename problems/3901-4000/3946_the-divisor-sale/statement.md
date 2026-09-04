# The Divisor Sale

## Description

A shop stocks unlimited copies of every kind of item, and kind `i` is
described by `items[i] = [factorᵢ, priceᵢ]`. You hold a budget and may buy
any multiset of copies whose prices add up to at most `budget`.

Every kind you buy at least one copy of pays out a bonus: one free copy of
each other kind whose factor the bought kind's factor divides. Buying more
copies of the same kind never repeats its payout, and a single kind may
collect a free copy from several different bought kinds.

Return the greatest number of copies you can end up with, counting both the
copies you bought and the free ones.

### Example 1

```text
Input: items = [[4,3],[2,5],[8,2]], budget = 7
Output: 4
Explanation:
    Buy the factor-2 kind (price 5) and one copy of the factor-8 kind
    (price 2), spending 7. The factor-2 purchase hands over a free copy
    of both the factor-4 kind and the factor-8 kind, so 2 bought copies
    grow into 4.
```

### Example 2

```text
Input: items = [[2,1],[4,2],[8,3],[6,2]], budget = 8
Output: 11
Explanation:
    Buy 8 copies of the factor-2 kind at price 1 each. Its one payout
    grants free copies of the factor-4, factor-8, and factor-6 kinds,
    for a total of 8 + 3 = 11 copies.
```

### Example 3

```text
Input: items = [[5,4]], budget = 9
Output: 2
Explanation:
    Two copies cost 8 in total, and with no other kinds on sale there is
    nothing to receive for free.
```

### Constraints

- `1 <= items.length <= 1000`
- `1 <= factorᵢ, priceᵢ <= 1500`
- `1 <= budget <= 1500`

### Hint 1

For every possible factor value, count how many kinds that factor divides.

### Hint 2

Only a kind's first copy is special: it collects the whole payout at once,
while every later copy adds exactly one more. That turns the problem into a
grouped unbounded knapsack over the budget.
