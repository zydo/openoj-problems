# Best Pair Value After Removing the GCD

## Description

You are given an integer array `nums`.

For any pair of distinct indices `i` and `j`, define the pair's value as
`(nums[i] * nums[j]) / gcd(nums[i], nums[j])²` — the product of the two
values divided out by the square of their greatest common divisor.

Return the largest such value over every pair of distinct indices.

### Example 1

```text
Input: nums = [3,7,2]
Output: 21
Explanation: Pairing 3 and 7 gives (3 * 7) / gcd(3, 7)² = 21 / 1 = 21,
which beats every other pairing here since none of these three values
share a common factor.
```

### Example 2

```text
Input: nums = [6,10,15]
Output: 15
Explanation: Pairing 6 and 10 gives (6 * 10) / gcd(6, 10)² = 60 / 4 = 15,
the best among the three available pairings.
```

### Example 3

```text
Input: nums = [5,5]
Output: 1
Explanation: The only pair available is the two 5s, giving
(5 * 5) / gcd(5, 5)² = 25 / 25 = 1.
```

### Constraints

- `2 <= nums.length <= 2000`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

With at most `2000` values, every distinct pair can simply be tried
directly.

### Hint 2

Multiply the two chosen values using a 64-bit accumulator before dividing,
so nothing overflows along the way.
