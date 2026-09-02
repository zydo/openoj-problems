# The Leanest Pair-Free Array

## Description

You are given two integers, `n` and `k`. Call an array of distinct positive
integers pair-free for `k` when no two of its distinct elements ever add up
to `k`.

Among all pair-free arrays of length `n`, find the one with the smallest
possible element sum, and return that sum.

### Example 1

```text
Input: n = 5, k = 7
Output: 21
Explanation: The array [1,2,3,7,8] is pair-free for 7 — its pairs sum to
3, 4, 5, 8, 9, 10, 11, and 15, and none hits 7 — and its sum is
1 + 2 + 3 + 7 + 8 = 21. No pair-free array of length 5 sums to less.
```

### Example 2

```text
Input: n = 1, k = 2
Output: 1
Explanation: A lone element pairs with nothing, so the array [1] is legal
and its sum, 1, is the smallest any positive integer can be.
```

### Example 3

```text
Input: n = 10, k = 5
Output: 71
Explanation: Below 5 only one of each clashing pair {1,4} and {2,3} can be
kept, so the cheapest picks are 1 and 2; everything from 5 up is free, and
the rest of the length is filled by 5, 6, ..., 12. The sum is
1 + 2 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 = 71, and nothing cheaper exists.
```

### Constraints

- `1 <= n, k <= 50`

## Hints

### Hint 1

Values `k` and above are always safe: their partner `k − x` would have to
be zero or negative.

### Hint 2

Below `k`, clashes come in complementary pairs {1, k−1}, {2, k−2}, ...,
and each pair contributes at most one element.

### Hint 3

Taking the smaller side of every pair is the cheapest way to spend the
space below `k`; fill whatever length remains by climbing from `k`.

### Hint 4

With `m = min(n, ⌊k/2⌋)`, the answer is the sum 1 + 2 + ... + m plus the
arithmetic run `k, k+1, ..., k+(n−m−1)` — closed forms only.
