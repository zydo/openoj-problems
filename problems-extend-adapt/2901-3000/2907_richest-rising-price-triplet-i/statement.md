# Richest Rising-Price Triplet I

## Description

A shop keeps `n` items on its shelves; item `i` sells for `prices[i]` and
earns `profits[i]` when picked, both supplied as 0-indexed arrays of
length `n`.

One pick consists of three items whose indices and prices both climb
together: indices `i < j < k` with `prices[i] < prices[j] < prices[k]`.
Picking those three items earns the combined profit
`profits[i] + profits[j] + profits[k]`.

Return the largest combined profit any single pick can earn, or `-1` when
no trio of items satisfies the ordering.

### Example 1

```text
Input: prices = [7,13,5,9,21], profits = [4,1,8,2,6]
Output: 16
Explanation: Only three trios of indices qualify: (0,1,4) earns
4 + 1 + 6 = 11, (0,3,4) earns 4 + 2 + 6 = 12, and (2,3,4) earns
8 + 2 + 6 = 16, so the best pick earns 16.
```

### Example 2

```text
Input: prices = [2,4,6,8,10], profits = [9,1,8,2,7]
Output: 24
Explanation: Prices climb along the array, so every trio of indices is
valid and the answer is simply the three largest profits combined:
9 + 8 + 7 = 24.
```

### Example 3

```text
Input: prices = [6,5,4,3], profits = [10,20,30,40]
Output: -1
Explanation: Prices only fall from left to right, so no trio of indices
satisfies the ordering.
```

### Constraints

- `3 <= prices.length == profits.length <= 2000`
- `1 <= prices[i] <= 10⁶`
- `1 <= profits[i] <= 10⁶`

## Hints

### Hint 1

Treat each item in turn as the middle of the trio and ask what the best
partner on each side would be.

### Hint 2

For a fixed middle `j`, the right partner is the most profitable item
after `j` whose price strictly exceeds `prices[j]`, and the left partner
is the most profitable earlier item priced strictly below `prices[j]`.

### Hint 3

Compress the prices into ranks, then sweep left to right inserting each
item into a prefix-maximum structure keyed by rank; the "best earlier
cheaper item" question becomes one lookup.

### Hint 4

A second sweep from right to left over reversed ranks answers the
mirrored question for the right partner.

### Hint 5

Every profit is positive, so a lookup returning zero proves no partner
exists on that side, and item `j` yields a candidate only when both
sides found one.

### Hint 6

The answer is the largest candidate over all middles, or `-1` if no
middle ever finds two partners.
