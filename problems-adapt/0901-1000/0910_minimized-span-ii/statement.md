# Minimized Span II

## Description

Given an integer array `nums` and an integer `k`, change every element exactly
once: each `nums[i]` must become either `nums[i] + k` or `nums[i] - k`.
Leaving a value unchanged, or moving it by a smaller amount, is not allowed.

The span of an array is its largest value minus its smallest value. Return the
minimum span possible after all required changes.

### Example 1

```text
Input: nums = [2,7,12], k = 4
Output: 5
```

### Example 2

```text
Input: nums = [1,4,10], k = 3
Output: 3
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 10⁴`
- `0 <= k <= 10⁴`
