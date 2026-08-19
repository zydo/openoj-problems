# Count Distinct-Prime Product Subsets

## Description

You are given an integer array `nums`. Choose some of its positions and
multiply the values you kept; call that the product of the choice. A choice
**qualifies** when its product factors into one or more distinct primes —
every prime in the factorization appears exactly once, and the product is
therefore larger than 1.

Choices are distinguished by positions, not values: picking the left `2` of
`[2, 2]` and picking the right one are two different choices.

For `nums = [1, 2, 3, 10]`, keeping `{2, 3}` qualifies (product `6 = 2·3`),
and so does `{3, 10}` (product `30 = 2·3·5`), while `{2, 10}` does not
(`20 = 2·2·5` repeats the prime 2). A kept `1` leaves the product alone, so
`{1, 3}` qualifies exactly when `{3}` does.

Return the number of qualifying choices modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [2,3,5]
Output: 7
Explanation: Every non-empty choice qualifies: the products are
2, 3, 5, 6, 10, 15, and 30 — each a product of distinct primes.
```

### Example 2

```text
Input: nums = [1,2,3,10]
Output: 10
Explanation: The qualifying choices among {2,3,10} have products
2, 3, 10, 6, and 30 — five of them. The single 1 may be added to any of
those five without touching the product, doubling the count to 10.
```

### Example 3

```text
Input: nums = [4,9,25]
Output: 0
Explanation: 4 = 2·2, 9 = 3·3, and 25 = 5·5 each repeat a prime, so every
product built from them does too. No choice qualifies.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 30`

## Hints

### Hint 1

A value that already contains a repeated prime factor — 4, 8, 9, 12, and so
on — can never appear in a qualifying choice. Which values up to 30 remain?

### Hint 2

Every value is at most 30, so at most 30 distinct values exist. Counting
occurrences of each value first turns the array into a small table without
losing any choices.

### Hint 3

A choice qualifies exactly when no prime is used twice. Which primes have
been used so far is a set of at most ten primes — small enough to carry
through a dynamic program as a bitmask.

### Hint 4

Each `1` is optional ballast: it never changes the product, so `k` copies of
`1` multiply the final count by `2^k`.
