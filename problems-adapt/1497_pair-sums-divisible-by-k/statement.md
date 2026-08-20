# Pair Sums Divisible by k

## Description

You are given an integer array `nums` of even length `n` and an integer
`k`.

The array must be broken into exactly `n / 2` disjoint pairs, and every
pair's two values must add up to a multiple of `k`.

Return `true` when such a split exists and `false` otherwise.

### Example 1

```text
Input: nums = [3,6,9,4,7,1], k = 5
Output: true
Explanation: (3,7), (6,4) and (9,1) each sum to 10.
```

### Example 2

```text
Input: nums = [-2,2,-5,5], k = 3
Output: true
Explanation: (-2,5) sums to 3 and (2,-5) sums to -3 — a negative sum is
fine as long as k divides it, and negative values take remainders the
same way.
```

### Example 3

```text
Input: nums = [2,4,6,8], k = 6
Output: false
Explanation: The 6 alone is a multiple of 6, so it needs a partner that is
also a multiple of 6 — none exists, and no other pairing covers everyone.
```

### Constraints

- `nums.length == n`
- `1 <= n <= 100,000`
- `n` is even
- `-1,000,000,000 <= nums[i] <= 1,000,000,000`
- `1 <= k <= 100,000`

## Hints

### Hint 1

Only the remainder mod `k` of each value matters. Tally how many values
fall into each remainder class, taking care that negative values land
correctly.

### Hint 2

A value with remainder `r` can only pair with one of remainder `k - r`,
and a value already divisible by `k` can only pair with another such
value.

### Hint 3

So the class counts must line up: class `r` and class `k - r` equally
populous, and the classes that pair with themselves — remainder `0`, and
remainder `k / 2` when `k` is even — holding even counts. Counts are also
sufficient: any pairing inside matched classes works.
