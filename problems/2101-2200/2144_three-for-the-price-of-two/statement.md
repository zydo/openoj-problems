# Three for the Price of Two

## Description

A candy shop runs a standing promotion: for every two pieces you pay for,
you may walk out with a third piece at no charge. The only restriction is
that the free piece may not cost more than the cheaper of the two paid
pieces. With prices `1`, `2`, `3`, and `4`, paying for the `2` and the `3`
lets you claim the `1` for free, but the `4` would not qualify.

You are given a 0-indexed integer array `cost`, where `cost[i]` is the
price of the `ith` piece. Every piece must end up in your bag. Return the
smallest total you can pay under the promotion.

### Example 1

```text
Input: cost = [3,8,5]
Output: 13
Explanation: Pay for the pieces costing 8 and 5; the piece costing 3 is
within the promotion's limit and comes free. The whole purchase costs
8 + 5 = 13.
```

### Example 2

```text
Input: cost = [4,10,6,1,9,2]
Output: 25
Explanation: Pair the 10 with the 9 and take the 6 free, then pair the 4
with the 2 and take the 1 free. The total paid is 10 + 9 + 4 + 2 = 25.
```

### Example 3

```text
Input: cost = [7,2]
Output: 9
Explanation: Two pieces are not enough to trigger the promotion, so both
must be paid for: 7 + 2 = 9.
```

### Example 4

```text
Input: cost = [2,2,2,2]
Output: 6
Explanation: Three of the four pieces form one promoted group — pay for
two, take one free — and the last piece is paid for on its own. The total
is 2 + 2 + 2 = 6.
```

### Constraints

- `1 <= cost.length <= 100`
- `1 <= cost[i] <= 100`

## Hints

### Hint 1

Process the prices from most expensive down. Within one promoted group,
which piece is the best candidate for the free slot?

### Hint 2

Taking the priciest eligible piece free in every group never hurts the
rest of the schedule — why does that make a fixed grouping optimal?

### Hint 3

One sort makes the groups fall out automatically. Which positions in the
sorted order end up free of charge?
