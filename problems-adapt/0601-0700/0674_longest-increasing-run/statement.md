# Longest Increasing Run

## Description

You are given an array of integers `nums` in no particular order. Return
the length of its longest contiguous run of strictly increasing values —
that is, the longest subarray `nums[l..r]` where `nums[i] < nums[i + 1]`
holds for every `i` from `l` up to `r - 1`.

Unlike an increasing subsequence, a run may not skip elements: it must be
an unbroken stretch of the array.

### Example 1

```text
Input: nums = [2,4,6,1,3,5,7,9]
Output: 5
Explanation: The run [1,3,5,7,9] has length 5. The earlier run [2,4,6] is
shorter, and no subarray bridges the drop from 6 down to 1.
```

### Example 2

```text
Input: nums = [8,8,8]
Output: 1
Explanation: No element strictly exceeds its neighbor, so every run has
length 1.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
