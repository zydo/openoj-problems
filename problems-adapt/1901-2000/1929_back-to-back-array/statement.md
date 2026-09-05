# Back-to-Back Array

## Description

You are given an integer array `nums` of length `n`. Assemble a new array
`ans` of length `2n` by laying down one copy of `nums` and then a second,
identical copy immediately after it. Formally, `ans[i] == nums[i]` and
`ans[i + n] == nums[i]` for every `0 <= i < n` (0-indexed).

Return the finished array `ans`.

### Example 1

```text
Input: nums = [5]
Output: [5,5]
Explanation: the single value is laid down twice in a row.
```

### Example 2

```text
Input: nums = [9,4]
Output: [9,4,9,4]
Explanation: ans holds the original pair followed by the same pair again.
```

### Example 3

```text
Input: nums = [2,7,3,8,6]
Output: [2,7,3,8,6,2,7,3,8,6]
```

### Constraints

- `n == nums.length`
- `1 <= n <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

The result has room for exactly two copies, and the value at index `i` also
belongs at index `i + n`.

### Hint 2

Pre-size the output to `2n` and fill both positions of each element in one
pass — or simply join two copies of the input.
