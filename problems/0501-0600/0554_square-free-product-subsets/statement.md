# Square-Free Product Subsets

## Description

You are given an array `nums` of positive integers.

An integer is **square-free** when no perfect square greater than `1` divides
it — equivalently, no prime appears twice in its factorization. Call a subset
of `nums` square-free when the product of the chosen elements is a
square-free integer.

Count the non-empty square-free subsets of `nums`, modulo `10⁹ + 7`.

Subsets are distinguished by position: two subsets picking copies at
different indices are different subsets, even when the values are equal.

### Example 1

```text
Input: nums = [5,6,7]
Output: 7
Explanation: Every product of a non-empty subset of {5, 6, 7} is square-free
(5, 6, 7, 30, 35, 42, 210), so all 2^3 - 1 = 7 subsets count.
```

### Example 2

```text
Input: nums = [1,1,4]
Output: 3
Explanation: 4 is divisible by 2², so it can appear in no square-free subset.
The product of one or both 1s is 1, which divides by no square above 1, so
the three subsets drawn from the two 1s all count.
```

### Example 3

```text
Input: nums = [1,2,2]
Output: 5
Explanation: A subset may hold at most one of the two 2s, since 2 * 2 = 4
divides by 2². The counting subsets are [1], [2], [2], [1,2] and [1,2].
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 30`

## Hints

### Hint 1

With values capped at 30, only ten primes can ever divide a product, so the
factorization of any subset fits in ten bits.

### Hint 2

Record, for every value, the set of primes dividing it. A subset's product is
square-free exactly when the chosen elements' prime sets are pairwise
disjoint — and a value divisible by a prime square never qualifies at all.

### Hint 3

Let `dp[mask]` count the subsets (drawn from values above 1, at most one copy
per value) whose combined prime set is exactly `mask`; a value with prime set
`m` extends every state disjoint from `m`.

### Hint 4

Copies of the value 1 join any subset freely — multiply by `2` per copy —
and the empty subset must be dropped at the very end.
