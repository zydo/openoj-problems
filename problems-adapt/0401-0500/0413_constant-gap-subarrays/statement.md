# Constant-Gap Subarrays

## Description

An array is **even-stepped** when it has at least three elements and every
pair of consecutive elements differs by the same amount. For example,
`[1,3,5,7]`, `[4,4,4,4]`, and `[10,7,4,1]` are all even-stepped.

Given an integer array `nums`, count how many contiguous subarrays of
`nums` are even-stepped.

### Example 1

```text
Input: nums = [1,3,5,7]
Output: 3
Explanation: The even-stepped subarrays are [1,3,5], [3,5,7], and the whole
array [1,3,5,7].
```

### Example 2

```text
Input: nums = [1,2,3,8,13]
Output: 2
Explanation: The valid subarrays are [1,2,3] (gap 1) and [3,8,13] (gap 5).
```

### Example 3

```text
Input: nums = [1]
Output: 0
```

### Constraints

- `1 <= nums.length <= 5000`
- `-1000 <= nums[i] <= 1000`
