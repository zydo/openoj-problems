# Count Product-Divisible Pairs

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

Count the index pairs `(i, j)` with `0 <= i < j <= n - 1` whose product
`nums[i] * nums[j]` is a multiple of `k`.

### Example 1

```text
Input: nums = [3,6,2,8,4], k = 6
Output: 7
Explanation: A product is a multiple of 6 when it carries a factor 2 and a
factor 3. Every pair that includes the 6 qualifies — (3,6), (6,2), (6,8),
(6,4) — and the leading 3 combines with each even number: (3,2), (3,4),
(3,8). The pairs among the bare evens, (2,8), (2,4), (8,4), never gain a
factor 3, leaving 4 + 3 = 7 qualifying pairs.
```

### Example 2

```text
Input: nums = [2,7,11], k = 15
Output: 0
Explanation: The three products are 14, 22, and 77. A multiple of 15 needs
a factor 3 and a factor 5, and none of the elements supplies either, so no
pair qualifies.
```

### Example 3

```text
Input: nums = [6,6,12], k = 12
Output: 3
Explanation: All three pairs qualify: 6 · 6 = 36, 6 · 12 = 72, 6 · 12 = 72.
Note the first pair — two distinct positions can hold equal values, and
their product is judged like any other.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i], k <= 10^5`

## Hints

### Hint 1

Multiplying two whole numbers overshoots what you need. For a single value
`v`, what is the smallest factor the other element would have to supply for
the product to reach a multiple of `k`?

### Hint 2

That missing factor is `k / gcd(v, k)` — everything else about `v` is noise
for this divisibility test. So only `gcd(v, k)` distinguishes values.

### Hint 3

Bucket the values by their gcd with `k`; every bucket label divides `k`.
Two indices pair successfully exactly when their bucket labels multiply to a
multiple of `k`, so count pairs of buckets rather than pairs of elements.
