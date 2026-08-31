# Peak Rotation Index

## Description

You are given an array `nums`. For a non-negative shift amount `k`, define
the rotated array as `nums` with its first `k` entries moved, in order, to
the end — that is,
`[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], ..., nums[k - 1]]`, where
`n = nums.length`. A rotated array earns one point for every position `i`
whose value is at most `i`.

Among all shift amounts `k` from `0` to `n - 1`, find the one that earns the
highest total score. If several shift amounts tie for the highest score,
return the smallest of them.

### Example 1

```text
Input: nums = [3,4,0,2,1]
Output: 1
Explanation: Scoring every shift:
k = 0, rotated = [3,4,0,2,1], score 3
k = 1, rotated = [4,0,2,1,3], score 4
k = 2, rotated = [0,2,1,3,4], score 4
k = 3, rotated = [2,1,3,4,0], score 2
k = 4, rotated = [1,3,4,0,2], score 2
The highest score, 4, is tied between k = 1 and k = 2, so the answer is
the smaller of the two, k = 1.
```

### Example 2

```text
Input: nums = [0,0,0,0]
Output: 0
Explanation: Every entry is 0, so every position scores regardless of how
the array is rotated — all four shifts tie at the maximum score of 4, and
the smallest shift, k = 0, wins.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] < nums.length`
