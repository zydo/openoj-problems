# Longest Product-Balanced Subarray

## Description

You are given an array of positive integers `nums`.

A contiguous subarray `sub` of `nums` is product-balanced when

```text
prod(sub) == gcd(sub) * lcm(sub)
```

where `prod(sub)` multiplies the subarray's elements together, `gcd(sub)`
is their greatest common divisor, and `lcm(sub)` is their least common
multiple.

Return the length of the longest product-balanced subarray of `nums`.

### Example 1

```text
Input: nums = [2,4,1,6]
Output: 2
Explanation: The subarray [2, 4] is product-balanced: prod = 8, gcd = 2,
lcm = 4, and 8 = 2 * 4. No longer subarray of this array qualifies.
```

### Example 2

```text
Input: nums = [3,5,7,9]
Output: 3
Explanation: The subarray [3, 5, 7] is product-balanced: prod = 105,
gcd = 1, and lcm = 105.
```

### Example 3

```text
Input: nums = [1,1,2,2,1]
Output: 3
Explanation: One product-balanced subarray of length 3 is [1, 1, 2]:
prod = 2, gcd = 1, lcm = 2.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10`

## Hints

### Hint 1

With every element at most 10, the LCM of any window divides 2520 and the
GCD is at most 10 — so `gcd * lcm` can never exceed a small constant.

### Hint 2

Fix the left end and stretch the right end, maintaining the product, GCD,
and LCM as running values. The product only grows, so once it passes that
constant no extension of the window can become product-balanced again.
