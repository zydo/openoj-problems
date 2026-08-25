# Minimum Operations to Make the Array Beautiful

## Description

You are given an integer array `nums`.

An array is called beautiful if for every index `i > 0`, the value at
`nums[i]` is divisible by `nums[i - 1]`.

In one operation, you may increment any element `nums[i]` (with `i > 0`) by 1.

Return the minimum number of operations required to make the array beautiful.

### Example 1

```text
Input: nums = [3,7,9]
Output: 2
Explanation: Applying the operation twice on nums[1] makes the array
beautiful: [3,9,9].
```

### Example 2

```text
Input: nums = [1,1,1]
Output: 0
Explanation: The given array is already beautiful.
```

### Example 3

```text
Input: nums = [4]
Output: 0
Explanation: The array has only one element, so it's already beautiful.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

Use dynamic programming.

### Hint 2

For each index `i`, compute `dp[i][val]`, the minimum number of increments
needed to make position `i` equal to `val`.

### Hint 3

Carefully combine DP states for index `i` with those for index `i - 1`.
