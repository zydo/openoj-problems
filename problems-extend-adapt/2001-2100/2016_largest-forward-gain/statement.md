# Largest Forward Gain

## Description

You are given an integer array `nums` of length `n`. Pick an earlier position
`i` and a later position `j` with `0 <= i < j < n` and `nums[i] < nums[j]`;
the gain of that pair is `nums[j] - nums[i]`.

Return the largest gain over all such pairs, or `-1` when no strictly rising
pair exists.

### Example 1

```text
Input: nums = [3,8,2,9]
Output: 7
Explanation: Buying at index 2 (value 2) and exiting at index 3 (value 9)
yields a gain of 9 - 2 = 7, the largest attainable.
```

### Example 2

```text
Input: nums = [6,6,6,6]
Output: -1
Explanation: Every element equals its predecessors, so no pair satisfies
nums[i] < nums[j].
```

### Example 3

```text
Input: nums = [4,1,3,7,2]
Output: 6
Explanation: The pair i = 1, j = 3 gives 7 - 1 = 6, which beats every other
valid pairing.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 1000`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Walk the array once and remember the smallest value encountered so far.

### Hint 2

Before folding the current element into that running minimum, check whether
it exceeds the minimum; if so, the difference is a candidate answer.
