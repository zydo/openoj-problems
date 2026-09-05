# Ascending Triple Detector

## Description

You are given an integer array `nums`. Determine whether it contains
three positions `i < j < k` whose values are strictly increasing, that
is `nums[i] < nums[j] < nums[k]`. Return `true` if such a triple
exists anywhere in the array, and `false` otherwise.

### Example 1

```text
Input: nums = [4,8,2,9,1,7]
Output: true
Explanation: Indices 0, 1, 3 give 4 < 8 < 9, an ascending triple.
```

### Example 2

```text
Input: nums = [9,7,5,3,1]
Output: false
Explanation: The array is non-increasing, so no ascending triple can
exist.
```

### Example 3

```text
Input: nums = [3,1,4,1,5,9,2,6]
Output: true
Explanation: Indices 1, 2, 4 give 1 < 4 < 5, an ascending triple.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`

### Follow-up

Could you solve it using `O(n)` time and only `O(1)` extra space?
