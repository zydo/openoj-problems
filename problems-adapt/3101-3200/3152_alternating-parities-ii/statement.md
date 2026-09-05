# Alternating Parities II

## Description

Bundle I asked whether a whole array is parity-alternating; this sequel
repeats the check over many slices of one array. A stretch is
parity-alternating when adjacent elements never match in parity there —
moving along it, even and odd values take turns with no exception. A
single element is trivially parity-alternating.

You are given an integer array `nums` and a list of windows `queries`,
where `queries[i] = [start_i, end_i]`. Decide, for each window, whether
the slice `nums[start_i..end_i]` is parity-alternating from end to end.

Return a boolean array `answer` in which `answer[i]` reports the verdict
for `queries[i]`.

### Example 1

```text
Input: nums = [6,3,2,5,4], queries = [[0,4],[1,3]]
Output: [true,true]
Explanation: Even and odd values take turns across the entire array, so
both windows alternate from start to finish.
```

### Example 2

```text
Input: nums = [9,4,7,7,2,1,6], queries = [[0,6],[2,4],[4,5],[0,2]]
Output: [false,false,true,true]
Explanation:
- The two 7s sit side by side, so every window that crosses that pair
  fails; that rejects [0,6] and [2,4].
- Window [4,5] covers [2,1] and window [0,2] covers [9,4,7]. Neither
  touches the doubled 7s, and each switches parity at every step.
```

### Example 3

```text
Input: nums = [2,2,4], queries = [[0,1],[1,2]]
Output: [false,false]
Explanation: Every element is even, so no adjacent pair anywhere
differs in parity.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 2`
- `0 <= queries[i][0] <= queries[i][1] <= nums.length - 1`

## Hints

### Hint 1

A parity-alternating window is exactly one with no adjacent same-parity pair.
Scan the array once and record, for every index, the leftmost position
from which the alternating run ending at that index reaches.

### Hint 2

Window `[start_i, end_i]` is parity-alternating precisely when the run ending at
`end_i` starts at or before `start_i`, which turns every query into a
single constant-time comparison.
