# Cheapest Summit Triplet I

## Description

You are given a 0-indexed integer array `nums`.

Call a triplet of indices `(i, j, k)` a summit when:

- `i < j < k`
- `nums[i] < nums[j]` and `nums[k] < nums[j]`

so the middle position towers strictly over both of its companions.

Among all summit triplets, return the smallest value of
`nums[i] + nums[j] + nums[k]`. If the array contains no summit triplet at
all, return `-1`.

### Example 1

```text
Input: nums = [6,3,9,4,8]
Output: 16
Explanation: Indices (1, 2, 3) form a summit: 1 < 2 < 3 and
nums[1] < nums[2] while nums[3] < nums[2]. The sum is
nums[1] + nums[2] + nums[3] = 3 + 9 + 4 = 16, and no summit triplet sums
lower.
```

### Example 2

```text
Input: nums = [2,10,7,5,9]
Output: 14
Explanation: Indices (0, 2, 3) form a summit: 0 < 2 < 3 and
nums[0] < nums[2] while nums[3] < nums[2]. The sum is
nums[0] + nums[2] + nums[3] = 2 + 7 + 5 = 14, and no summit triplet sums
lower.
```

### Example 3

```text
Input: nums = [9,7,5,3]
Output: -1
Explanation: The values only decrease from left to right, so no middle
element can tower over a companion on each side.
```

### Constraints

- `3 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

The array is tiny, so try every combination of three indices directly.

### Hint 2

For each candidate triplet just check the two strict inequalities and
keep the smallest qualifying sum.
