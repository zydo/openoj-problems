# Largest Minimum Price Gap

## Description

A candy shelf lists `n` prices in the array `price`, where `price[i]` is what
the `i`th candy costs. You also get a positive integer `k`.

A basket holds `k` distinct candies from the shelf. Its **minimum gap** is the
smallest difference between the prices of any two candies sitting in it.

Across every possible basket, return the largest minimum gap.

### Example 1

```text
Input: price = [4,17,2,9,25,6], k = 3
Output: 8
Explanation: Take the candies priced 2, 17 and 25. Their pairwise differences
are 15, 8 and 23, so the basket's minimum gap is 8. Any other triple of
candies contains two prices closer together than 8.
```

### Example 2

```text
Input: price = [2,8,2,8,2], k = 2
Output: 6
Explanation: Repeated prices are fine — the candies are distinct even when
their prices match. A two-candy basket only has one pair, so pick one candy
priced 2 and one priced 8 for a gap of 6.
```

### Example 3

```text
Input: price = [6,6,6,10], k = 3
Output: 0
Explanation: Only two distinct prices exist, so any three candies repeat one
of them, and that repeated price puts a pair at difference 0.
```

### Constraints

- `2 <= k <= price.length <= 10^5`
- `1 <= price[i] <= 10^9`

## Hints

### Hint 1

Ask a yes/no question instead: can some basket keep every pair at least `x`
apart? If the answer is yes for `x`, it stays yes for anything below `x` —
which makes `x` itself searchable.

### Hint 2

Testing one candidate `x` is a selection problem: fit as many candies as
possible so that consecutive chosen prices differ by at least `x`.

### Hint 3

Sort the prices and sweep left to right, taking a candy whenever its price is
at least `x` above the last one taken.

### Hint 4

A gap of `x` is achievable exactly when that sweep takes `k` or more candies.
