# Largest Subarray Sum After Purging a Value

## Description

You are given an integer array `nums`.

You may perform the following step at most once:

- Choose an integer `x` whose removal would leave `nums` non-empty, and
  delete every occurrence of `x` from the array.

Take the array you end up with — the original, or one with a value purged —
and consider its non-empty contiguous subarrays. Return the largest subarray
sum achievable over every allowed choice of `x` (including the choice to do
nothing).

### Example 1

```text
Input: nums = [-2,5,-4,5,-4,6]
Output: 16
Explanation: Purging x = -4 leaves [-2, 5, 5, 6], whose best subarray is
5 + 5 + 6 = 16. Without purging, the best is 5 + (-4) + 5 + (-4) + 6 = 8, and
purging x = -2 only reaches 8 as well.
```

### Example 2

```text
Input: nums = [7,2,9]
Output: 18
Explanation: There is nothing worth purging: the whole array sums to 18.
```

### Example 3

```text
Input: nums = [-6,-6]
Output: -6
Explanation: Purging -6 would delete the entire array, which is not allowed,
so the best subarray is a single -6.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁶ <= nums[i] <= 10⁶`

## Hints

### Hint 1

Purging a value that is zero or positive can never raise a subarray sum, so
only the negative values are worth a second look.

### Hint 2

A subarray of the purged array is an original stretch with the `x`'s lifted
out of it: a difference of two prefix sums, plus `|x|` for every lifted
occurrence.

### Hint 3

Fold that correction into the prefix: for each candidate `x`, track the
smallest adjusted prefix seen so far, and let one Kadane-style sweep try every
candidate at every position.
