# Fewest Factor-Sharing Segments

## Description

You are given an integer array `nums`.

A split of `nums` into contiguous, non-empty subarrays is called _valid_
when every subarray shares a common factor across its two ends:

- the greatest common divisor of the first and last element of each
  subarray is greater than `1`, and
- each element of `nums` belongs to exactly one subarray.

Return the fewest subarrays a valid split of `nums` can use. If no valid
split exists, return `-1`.

A subarray is a contiguous, non-empty part of the array, and the greatest
common divisor of two numbers is the largest positive integer that divides
both evenly.

### Example 1

```text
Input: nums = [4,6,15,35]
Output: 2
Explanation: Split as [4,6] | [15,35]. The first segment's ends 4 and 6
have gcd 2; the second's ends 15 and 35 have gcd 5. One segment would
need gcd(4, 35) = 1, so 2 is minimal.
```

### Example 2

```text
Input: nums = [2,3,2]
Output: 1
Explanation: The whole array works as a single segment, since the ends 2
and 2 have gcd 2.
```

### Example 3

```text
Input: nums = [7,11]
Output: 2
Explanation: A single segment would need gcd(7, 11) = 1, which is not
allowed. Splitting into [7] and [11] is valid because each one-element
segment has gcd 7 and 11 with itself, both greater than 1.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Let `dp[i]` be the fewest segments needed to validly split the first `i`
elements, with `dp[0] = 0`.

### Hint 2

For each split of a prefix, the final segment ends at `i - 1` and starts
at some `j`; it is valid exactly when `gcd(nums[j], nums[i - 1]) > 1`.

### Hint 3

Try every start `j < i` with a shared factor and take
`dp[i] = min(dp[i], dp[j] + 1)`.
