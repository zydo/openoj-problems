# Queries To Spare While Zeroing

## Description

You are given an integer array `nums` and a list of ranges `queries`,
where `queries[i] = [li, ri]`.

Carrying out a range works as follows: for every index inside `[li, ri]`
you may lower that element by 1, or leave it alone. Each index decides
independently, so one carried range can shave any subset of its slice.

The goal is an array of nothing but zeros.

Some ranges may be redundant. Return the largest number of ranges you
can throw away while the ranges you keep still bring every element of
`nums` down to zero. If even all the ranges together cannot zero the
array, return `-1`.

### Example 1

```text
Input: nums = [1,0,2], queries = [[0,2],[0,1],[1,2]]
Output: 1
Explanation: Keep [0,2] and [1,2] — carry [0,2] to lower indices 0 and
2, then carry [1,2] to lower index 2 again, reaching [0,0,0]. The range
[0,1] never has to be carried, so 1 range can be thrown away.
```

### Example 2

```text
Input: nums = [0,0], queries = [[0,1],[0,0]]
Output: 2
Explanation: Every element is already zero, so no range has to be
carried at all and both can be discarded.
```

### Example 3

```text
Input: nums = [2,2], queries = [[0,1],[0,1]]
Output: 0
Explanation: Each element must drop by 2, yet a carried range lowers any
index at most once. Both ranges are required, so nothing is droppable.
```

### Example 4

```text
Input: nums = [1,3], queries = [[0,1],[0,0],[1,1]]
Output: -1
Explanation: The element at index 1 would have to fall 3 steps, but only
two ranges ever touch it, so keeping every range still cannot zero the
array.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 2`
- `0 <= li <= ri < nums.length`

## Hints

### Hint 1

A kept set succeeds exactly when every index is covered by at least
`nums[i]` of the kept ranges — the per-index freedom means only coverage
counts, never which range does the shaving.

### Hint 2

Sweep the indices left to right with ranges sorted by start. When an
index runs short of coverage, commit the available range that reaches
farthest to the right — a max-heap on right endpoints supplies it — and
the answer is the range count minus the number of commits.
