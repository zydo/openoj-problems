# The Heaviest Two-Bag Load

## Description

You are handed an integer array `weights` plus two integers `w1` and `w2` —
the capacity limits of two separate bags.

Every item may go into bag 1, into bag 2, or into neither, and each bag
holds items only while their combined weight stays within that bag's own
limit: at most `w1` for bag 1 and at most `w2` for bag 2. Pack the items to
make the combined weight carried by the two bags as large as possible, and
return that total.

### Example 1

```text
Input: weights = [2,3,5,7], w1 = 8, w2 = 5
Output: 12
Explanation: Bag 1 takes the item of weight 7 and bag 2 the item of weight
5, together 12. No arrangement packs 13 or more while respecting both
limits.
```

### Example 2

```text
Input: weights = [4,9,2], w1 = 10, w2 = 3
Output: 11
Explanation: Bag 1 carries the item of weight 9 and bag 2 the item of
weight 2, so the load totals 11. The item of weight 4 fits in bag 1 but
would displace the 9 for a worse outcome.
```

### Example 3

```text
Input: weights = [10,20,30,40], w1 = 35, w2 = 35
Output: 60
Explanation: Bag 1 takes the item of weight 30 while bag 2 takes the items
of weights 10 and 20. The item of weight 40 exceeds either bag's limit on
its own, so it stays behind.
```

### Constraints

- `1 <= weights.length <= 100`
- `1 <= weights[i] <= 100`
- `1 <= w1, w2 <= 300`

## Hints

### Hint 1

Dynamic programming over both bags at once is the way through.

### Hint 2

Let a state `(i, j)` mean: some subset of the items seen so far fills bag 1
to exactly `i` and bag 2 to exactly `j`. A new item either stays out,
raises `i` by its weight, or raises `j` by its weight.
