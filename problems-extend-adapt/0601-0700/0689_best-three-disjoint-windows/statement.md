# Best Three Disjoint Windows

## Description

Given an integer array `nums` and a positive integer `k`, choose exactly
three non-overlapping contiguous windows, each containing exactly `k`
elements. Their scores are the sums of the elements they cover.

Return the three 0-indexed starting positions that give the greatest
combined score. Return the starts in increasing order. If several
choices tie for the greatest total, choose the lexicographically
smallest list of starts: compare the first starts first, then the second
if those match, then the third.

### Example 1

```text
Input: nums = [4,1,3,2,8,9,6,2,3], k = 2
Output: [0,3,5]
Explanation: The chosen windows are [4,1], [2,8], and [9,6]. Their sums
are 5, 10, and 15, for a combined score of 30.
```

### Example 2

```text
Input: nums = [3,3,3,3,3,3,3], k = 1
Output: [0,1,2]
Explanation: Every selection of three distinct single-element windows
has the same total. [0,1,2] wins because it is lexicographically first.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] < 2¹⁶`
- `1 <= k <= ⌊nums.length / 3⌋`
