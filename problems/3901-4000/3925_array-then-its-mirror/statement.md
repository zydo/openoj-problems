# Array Then Its Mirror

## Description

Given an integer array `nums` of length `n`, build a new array `ans` of
length `2 * n`: the first half is `nums` exactly as it stands, and the
second half replays `nums` from back to front.

For every `0 <= i <= n - 1`:

- `ans[i] = nums[i]`
- `ans[i + n] = nums[n - i - 1]`

Return the array `ans`.

### Example 1

```text
Input: nums = [4,7,9,2]
Output: [4,7,9,2,2,9,7,4]
Explanation: The first four slots copy nums in order. The last four walk
the same values backwards: 2, then 9, then 7, then 4.
```

### Example 2

```text
Input: nums = [5,1]
Output: [5,1,1,5]
Explanation: The mirror of [5,1] is [1,5], so the result is the two halves
joined: [5,1] followed by [1,5].
```

### Example 3

```text
Input: nums = [8]
Output: [8,8]
Explanation: A single-element array is its own mirror, so the value simply
appears twice.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Write the result in two independent sweeps: one forward copy, one backward
copy.
