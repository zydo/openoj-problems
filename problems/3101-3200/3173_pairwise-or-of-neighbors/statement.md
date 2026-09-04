# Pairwise OR Of Neighbors

## Description

You are given an array `nums` of `n` integers. Build an array `answer` of
`n - 1` integers where each slot folds one neighboring pair together:

`answer[i] = nums[i] | nums[i + 1]`, with `|` denoting bitwise OR.

Return `answer`.

### Example 1

```text
Input: nums = [9,6,12,10]
Output: [15,14,14]
Explanation: 9 | 6 = 15, 6 | 12 = 14, and 12 | 10 = 14.
```

### Example 2

```text
Input: nums = [1,2]
Output: [3]
```

### Example 3

```text
Input: nums = [7,7,7,7]
Output: [7,7,7]
```

### Constraints

- `2 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

## Hints

### Hint 1

One sweep suffices: each output slot is just the OR of the two input
neighbors at that position.
