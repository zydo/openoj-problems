# Sliding Window Average I

## Description

You are given an integer array `nums` with `n` elements and an integer
`k`.

Among all contiguous subarrays of `nums` whose length is exactly `k`,
find the one with the largest average value and return that average.
Any answer within `10⁻⁵` of the true value is accepted.

### Example 1

```text
Input: nums = [4,-2,9,10,-1,6], k = 3
Output: 6.00000
Explanation: The best window is [9,10,-1], averaging (9 + 10 - 1) / 3 = 6.
```

### Example 2

```text
Input: nums = [7], k = 1
Output: 7.00000
```

### Constraints

- `n == nums.length`
- `1 <= k <= n <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`
