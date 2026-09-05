# Subarrays That Trace A Trend I

## Description

You are given a 0-indexed integer array `nums` of length `n` and a
0-indexed integer array `pattern` of length `m` whose entries are each
`-1`, `0`, or `1`.

A subarray of `nums` spanning `m + 1` values traces the pattern when,
for every index `k` of `pattern`, the step from `nums[i + k]` to
`nums[i + k + 1]` agrees with `pattern[k]`:

- `pattern[k] == 1` requires `nums[i + k + 1] > nums[i + k]`;
- `pattern[k] == 0` requires `nums[i + k + 1] == nums[i + k]`;
- `pattern[k] == -1` requires `nums[i + k + 1] < nums[i + k]`.

Return how many subarrays of `nums` trace the pattern.

### Example 1

```text
Input: nums = [1,2,2,3,3,3], pattern = [1,0]
Output: 2
Explanation: The pattern asks for a rise followed by a level step.
Reading the array, the windows [1,2,2] and [3,3,3] each climb once and
then hold, so 2 subarrays trace the pattern.
```

### Example 2

```text
Input: nums = [3,4,4,2,7], pattern = [1,0,-1]
Output: 1
Explanation: The neighbouring relations here are up, flat, down, up.
Only the window [3,4,4,2] reads up, flat, down in succession, so
exactly 1 subarray matches.
```

### Example 3

```text
Input: nums = [4,1,1,5,5,2,2], pattern = [-1,0]
Output: 2
Explanation: The pattern asks for a drop followed by a level step. The
windows [4,1,1] and [5,2,2] both fall once and then stay level, giving
2 matches.
```

### Constraints

- `2 <= n == nums.length <= 100`
- `1 <= nums[i] <= 10⁹`
- `1 <= m == pattern.length < n`
- `-1 <= pattern[i] <= 1`

## Hints

### Hint 1

Reduce each neighbouring pair of values to its relation — rise, tie, or
fall — and then slide a window of length `m` over that shorter array,
comparing it against the pattern directly.
