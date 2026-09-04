# Minimized Span I

## Description

Given an integer array `nums` and an integer `k`, you may adjust every array
position independently at most once. An adjustment replaces `nums[i]` with
`nums[i] + x` for any integer `x` in `[-k, k]`; leaving a position unchanged
is also allowed.

The span of an array is its maximum value minus its minimum value. Return the
smallest span achievable after the allowed adjustments.

### Example 1

```text
Input: nums = [2,14,7,9], k = 3
Output: 6
```

### Example 2

```text
Input: nums = [0,5,10], k = 1
Output: 8
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 10⁴`
- `0 <= k <= 10⁴`
