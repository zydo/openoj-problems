# Minimum Reorder Window

## Description

You are given an integer array `nums`. Somewhere inside it sits a single
contiguous stretch that, if re-sorted into non-decreasing order in place,
would make the entire array non-decreasing. Every element outside that
stretch is already exactly where a fully sorted array would put it.

Find that stretch and report how many elements it spans. If the array is
already non-decreasing, no stretch is needed at all.

### Example 1

```text
Input: nums = [3,9,5,12,11,14,20]
Output: 4
Explanation: Re-sorting [9,5,12,11] into [5,9,11,12] leaves the whole
array non-decreasing.
```

### Example 2

```text
Input: nums = [7,8,9,10]
Output: 0
```

### Example 3

```text
Input: nums = [42]
Output: 0
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-10⁵ <= nums[i] <= 10⁵`

### Follow-up

Can you find the window in `O(n)` time?
