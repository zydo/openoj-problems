# Best Score Of An Ordered Triplet I

## Description

You are given a 0-indexed integer array `nums`.

Pick any three indices `i`, `j` and `k` that rise strictly from left to
right (`i < j < k`). That choice of indices scores

`(nums[i] - nums[j]) * nums[k]`.

Return the largest score any rising triplet of indices can reach, or `0`
if every triplet scores below zero.

### Example 1

```text
Input: nums = [8,3,6,2,9]
Output: 54
Explanation: Taking i = 0, j = 3, k = 4 scores
(nums[0] - nums[3]) * nums[4] = (8 - 2) * 9 = 54, and no rising triplet
scores higher.
```

### Example 2

```text
Input: nums = [3,1,4,1,5,9,2,6]
Output: 42
Explanation: The best pick is i = 5, j = 6, k = 7, scoring
(nums[5] - nums[6]) * nums[7] = (9 - 2) * 6 = 42.
```

### Example 3

```text
Input: nums = [5,9,4]
Output: 0
Explanation: The only rising triplet here scores
(nums[0] - nums[1]) * nums[2] = (5 - 9) * 4 = -16, which is negative,
so the answer is 0.
```

### Constraints

- `3 <= nums.length <= 100`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

With only 100 entries, checking every combination of `i < j < k` with
three nested loops is fast enough — evaluate each triplet's formula and
keep the best non-negative result.
