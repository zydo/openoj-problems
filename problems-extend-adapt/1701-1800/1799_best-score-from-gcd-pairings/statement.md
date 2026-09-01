# Best Score From GCD Pairings

## Description

The array `nums` holds `2 * n` positive integers, and you will carry
out exactly `n` pairing moves on it.

Move `i` (counted from 1) works like this:

- Pick any two remaining values, `x` and `y`.
- Bank `i * gcd(x, y)` points, where `gcd` is the greatest common
  divisor.
- Take both values out of `nums`.

Choose the pairings to make the banked points as large as possible,
and return that largest total.

### Example 1

```text
Input: nums = [4,6]
Output: 2
Explanation: There is a single move: pair 4 with 6 for
1 * gcd(4, 6) = 2.
```

### Example 2

```text
Input: nums = [2,6,4,8]
Output: 10
Explanation: A best plan pairs (2, 6) first and (4, 8) second:
(1 * gcd(2, 6)) + (2 * gcd(4, 8)) = 2 + 8 = 10.
```

### Example 3

```text
Input: nums = [5,10,3,6,7,14]
Output: 34
Explanation: A best plan runs (3, 6), then (5, 10), then (7, 14):
(1 * gcd(3, 6)) + (2 * gcd(5, 10)) + (3 * gcd(7, 14)) = 3 + 10 + 21
= 34.
```

### Constraints

- `1 <= n <= 7`
- `nums.length == 2 * n`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

With at most 14 elements, the state worth tracking is just which
positions are still unused — every plan is a perfect matching on the
array.

### Hint 2

The move number is implied by how many pairs are already gone, so a
bitmask dynamic program can sweep all states: extend any state by one
fresh pair and add the move's weight times the pair's gcd.
