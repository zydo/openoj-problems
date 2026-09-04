# One-Fix Monotonic Array

## Description

You are given an integer array `nums` of length `n`. Determine whether it can
be turned into a non-decreasing array by changing the value of at most one
element.

An array is non-decreasing when `nums[i] <= nums[i + 1]` holds for every
0-based index `i` with `0 <= i <= n - 2`.

### Example 1

```text
Input: nums = [5,3,6]
Output: true
Explanation: Changing the first 5 down to 3 (or lower) gives [3,3,6], which is
non-decreasing.
```

### Example 2

```text
Input: nums = [7,3,1]
Output: false
Explanation: No single change fixes both drops — 7 > 3 and 3 > 1 — at once.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁴`
- `-10⁵ <= nums[i] <= 10⁵`
