# Longest Neighbor-Value Subsequence

## Description

Call two integers _neighbors_ when they differ by exactly `1`. Given an
integer array `nums`, you may delete any number of its elements (keeping
the relative order of what remains) to form a subsequence. A subsequence
is a _neighbor-value run_ when its largest element and its smallest
element are neighbors.

Return the length of the longest neighbor-value run that can be formed
from `nums`. If no such subsequence exists, return `0`.

### Example 1

```text
Input: nums = [12,15,14,14,12,14,15,12,14,15,9,14]
Output: 8
Explanation: Keeping every 14 and every 15 gives a run of length 8, since
14 and 15 are neighbors and no wider run exists.
```

### Example 2

```text
Input: nums = [10,11,12,20]
Output: 2
Explanation: [10,11] and [11,12] are both neighbor-value runs of length 2,
and no run can be longer.
```

### Example 3

```text
Input: nums = [4,4,4]
Output: 0
Explanation: Every element equals 4, so no subsequence spans a gap of 1.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
