# Count Even-Product Compositions

## Description

You are given two positive integers `n` and `k`.

A sequence of `k` positive integers is called valid when its entries add up
to `n` and its entries multiply to an even number.

Two sequences count as different whenever they disagree at some position —
`[1, 1, 2]` and `[1, 2, 1]` are two distinct sequences, not one.

Return how many valid sequences there are, modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 4, k = 3
Output: 3
Explanation: The length-3 sequences of positive integers summing to 4 are
[1,1,2], [1,2,1], and [2,1,1]. Every one of them contains a 2, so every
product is even, and the answer is 3.
```

### Example 2

```text
Input: n = 6, k = 4
Output: 6
Explanation: Ten length-4 sequences of positive integers sum to 6; six of
them contain at least one even entry, and the answer counts exactly those.
```

### Example 3

```text
Input: n = 3, k = 3
Output: 0
Explanation: The only length-3 sequence of positive integers summing to 3
is [1,1,1], whose product 1 is odd, so no valid sequence exists.
```

### Constraints

- `1 <= n <= 5 * 10⁵`
- `1 <= k <= n`

## Hints

### Hint 1

First count every sequence with the right sum, ignoring parity, then
subtract however many of them have an odd product.

### Hint 2

The stars-and-bars identity counts ordered compositions of `n` into `k`
positive parts as `C(n - 1, k - 1)`.

### Hint 3

A product is odd exactly when every entry is odd. Writing each entry as
`2 * x + 1` turns "all entries odd, summing to `n`" into a count of
non-negative integer solutions to a smaller sum.

### Hint 4

That smaller count is zero whenever `n - k` is odd (an all-odd composition
cannot exist then); otherwise it equals `C((n + k) / 2 - 1, k - 1)`, which
should be subtracted from the unrestricted total.
