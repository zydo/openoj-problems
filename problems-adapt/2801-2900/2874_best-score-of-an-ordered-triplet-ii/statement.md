# Best Score Of An Ordered Triplet II

## Description

You are given a 0-indexed integer array `nums`.

Choose three indices `i < j < k` — a triplet that climbs strictly left
to right. Its score is

`(nums[i] - nums[j]) * nums[k]`.

Return the greatest score any such triplet achieves, or `0` when every
triplet's score is negative.

### Example 1

```text
Input: nums = [7,2,9,4,10,1]
Output: 50
Explanation: Picking i = 0, j = 1, k = 4 scores
(nums[0] - nums[1]) * nums[4] = (7 - 2) * 10 = 50, and nothing beats it.
```

### Example 2

```text
Input: nums = [1000000,1,999999]
Output: 999998000001
Explanation: The only triplet is i = 0, j = 1, k = 2, scoring
(1000000 - 1) * 999999 = 999998000001.
```

### Example 3

```text
Input: nums = [4,6,2]
Output: 0
Explanation: The single triplet scores (4 - 6) * 2 = -4, which is
negative, so the answer is 0.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Scan the largest value to the left of each position and the largest
value to its right; a full pass in each direction records both.

### Hint 2

With those two tables, the triplet anchored at a middle index `j` is
best when `i` takes the running maximum before `j` and `k` takes the
running maximum after `j`, so one final sweep settles the answer.
