# Apply a Permutation Twice

## Description

You are given `nums`, a zero-based permutation: the integers `0` through
`nums.length - 1` each appearing exactly once. Build an array `ans` of the
same length whose every entry follows one nested lookup,
`ans[i] = nums[nums[i]]`, and return it.

### Example 1

```text
Input: nums = [1,2,3,0]
Output: [2,3,0,1]
Explanation: ans[0] = nums[nums[0]] = nums[1] = 2, and continuing the same
double lookup gives ans[1] = 3, ans[2] = 0, ans[3] = 1.
```

### Example 2

```text
Input: nums = [2,0,1]
Output: [1,2,0]
Explanation: ans[0] = nums[nums[0]] = nums[2] = 1, ans[1] = nums[nums[1]] =
nums[0] = 2, and ans[2] = nums[nums[2]] = nums[1] = 0.
```

### Example 3

```text
Input: nums = [4,2,0,3,1]
Output: [1,0,4,3,2]
Explanation: Position 3 holds its own value, so it stays put under the
double lookup; the remaining entries permute as the lookups dictate.
```

### Example 4

```text
Input: nums = [1,0]
Output: [0,1]
Explanation: The double lookup swaps the pair: ans[0] = nums[nums[0]] =
nums[1] = 0 and ans[1] = nums[nums[1]] = nums[0] = 1.
```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < nums.length`
- The entries of `nums` are all distinct — every index appears exactly once.

### Follow-up

Can you produce the answer with no working storage beyond the output array
itself (`O(1)` extra space)?

## Hints

### Hint 1

The definition carries the whole solution: since every `nums[i]` is itself a
valid index, the nested lookup is always in range.

### Hint 2

Write results into a separate array. Overwriting `nums` as you go destroys
values that later positions still need as indices.
