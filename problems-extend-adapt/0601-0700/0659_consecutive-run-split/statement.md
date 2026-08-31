# Consecutive Run Split

## Description

You are given an integer array `nums` sorted in non-decreasing order.

Decide whether `nums` can be partitioned into one or more runs, each
satisfying both of these rules:

- A run is a consecutive increasing sequence: every value in it is
  exactly one greater than the value before it.
- Every run has at least 3 elements.

Return `true` if such a partition exists, or `false` otherwise.

A run here is a subsequence of `nums` — formed by deleting zero or more
elements without disturbing the relative order of the rest (so `[1,3,5]`
is a subsequence of `[1,2,3,4,5]`, but `[1,3,2]` is not).

### Example 1

```text
Input: nums = [1,2,3,3,4,5,6,7]
Output: true
Explanation: nums splits into two runs:
[1,2,3,3,4,5,6,7] --> 1, 2, 3
[1,2,3,3,4,5,6,7] --> 3, 4, 5, 6, 7
```

### Example 2

```text
Input: nums = [2,3,3,4,4,5,5]
Output: true
Explanation: nums splits into two runs:
[2,3,3,4,4,5,5] --> 2, 3, 4, 5
[2,3,3,4,4,5,5] --> 3, 4, 5
```

### Example 3

```text
Input: nums = [2,2,3,4,5]
Output: false
Explanation: No partition of nums into runs of length 3 or more, each
consecutive and increasing, is possible.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-1000 <= nums[i] <= 1000`
- `nums` is sorted in non-decreasing order.
