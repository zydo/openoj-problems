# Cheapest Summit Triplet II

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
Input: nums = [4,3,8,6,9,2,7]
Output: 11
Explanation: Indices (1, 3, 5) form a summit: 1 < 3 < 5,
nums[1] = 3 < nums[3] = 6, and nums[5] = 2 < 6. The sum is
3 + 6 + 2 = 11, and no summit triplet sums lower.
```

### Example 2

```text
Input: nums = [5,5,5,9,1]
Output: 15
Explanation: Only index 3 towers over its neighbors, and the cheapest
companions are the 5 on its left (indices 0-2 all qualify equally) and
the 1 on its right, giving 5 + 9 + 1 = 15.
```

### Example 3

```text
Input: nums = [7,7,7,7]
Output: -1
Explanation: Every value is equal, so no element towers strictly over
anything — the array holds no summit triplet.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁸`

## Hints

### Hint 1

Whatever the summit's middle index `j` is, the cheapest valid companions
are the smallest value anywhere to its left and the smallest value
anywhere to its right.

### Hint 2

Precompute a prefix-minimum array and a suffix-minimum array; the two
companions of each candidate middle are then single lookups.

### Hint 3

Watch the strictness: an equal value on either side does not qualify as
a companion.
