# Longest Ones Run

## Description

Given a binary array `nums`, find the length of the longest consecutive block
of `1`s contained in it.

A run of ones is a maximal span of entries all equal to `1`. If the array
holds no `1`, the answer is `0`.

### Example 1

```text
Input: nums = [0,1,1,0,1,1,1,0]
Output: 3
Explanation: The longest block of ones spans three entries near the middle.
```

### Example 2

```text
Input: nums = [1,1,0,0,0]
Output: 2
Explanation: The only run of ones has length 2.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- Each `nums[i]` is `0` or `1`.

## Hints

### Hint 1

Think in terms of windows: a run begins at a `1` and continues while the next
entry is also a `1`. Once you can recognize both ends of each run, tracking
the longest one is the only work that remains.