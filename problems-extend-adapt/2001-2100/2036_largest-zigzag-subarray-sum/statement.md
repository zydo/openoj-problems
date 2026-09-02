# Largest Zigzag Subarray Sum

## Description

Choose any contiguous, non-empty stretch of a 0-indexed integer array
`nums`, spanning indices `i` through `j` (with `0 <= i <= j < nums.length`).
Its zigzag sum flips sign from element to element, starting positive:

`nums[i] - nums[i + 1] + nums[i + 2] - ... +/- nums[j]`

Return the largest zigzag sum any stretch of `nums` can achieve.

### Example 1

```text
Input: nums = [6,-2,4,-1,3]
Output: 16
Explanation: The whole array is the best stretch:
6 - (-2) + 4 - (-1) + 3 = 16.
```

### Example 2

```text
Input: nums = [4,4,-5,5,-5]
Output: 19
Explanation: The stretch [4,-5,5,-5] scores 4 - (-5) + 5 - (-5) = 19, and
nothing beats it.
```

### Example 3

```text
Input: nums = [-2,-7]
Output: 5
Explanation: The two-element stretch scores -2 - (-7) = 5, which beats
taking either element alone.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`

## Hints

### Hint 1

Track two running bests as you scan: the top zigzag sum of a stretch ending
at the current index on a plus slot, and one ending on a minus slot.

### Hint 2

A plus-slot ending may always start fresh at the current element, or extend
the previous minus-slot best. A minus-slot ending has exactly one source —
the previous plus-slot best, shifted by subtracting the current element.
