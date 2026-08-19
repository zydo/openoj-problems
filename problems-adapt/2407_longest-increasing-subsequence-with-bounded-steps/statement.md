# Longest Increasing Subsequence With Bounded Steps

## Description

Two inputs arrive: an array `nums` and a step bound `k`. From `nums` pick a
subsequence — order preserved, elements skipped freely — that climbs strictly
upward and never jumps far: each element may exceed the one before it by at
most `k`.

Return the length of the longest such subsequence. A lone element qualifies
on its own.

### Example 1

```text
Input: nums = [3,1,4,7,2,5,9], k = 3
Output: 4
Explanation: [1,4,7,9] climbs by 3, 3, and 2 — every step within the bound.
No fifth element exists to extend it, and rival chains top out shorter:
[2,5,9] breaks down at the last step, since 9 - 5 = 4 exceeds the bound.
```

### Example 2

```text
Input: nums = [2,4,6,8], k = 1
Output: 1
Explanation: Every value sits 2 above its predecessor, so no two elements can
be adjacent in a subsequence; the best is a lone element.
```

### Example 3

```text
Input: nums = [5,1,4,2,6], k = 4
Output: 3
Explanation: [1,4,6] rises by 3 and then 2, both within the bound. Chains
built on the leading 5 manage only [5,6], since 5 arrives after 1, 4, and 2
have passed and nothing else can follow.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i], k <= 10⁵`

**Follow-up:** Can you finish in `O(n log(m))` time, where `m` is the largest
value in `nums`?

## Hints

### Hint 1

Move the bookkeeping from index space to value space: track, for each value
`v`, the longest qualifying subsequence among the elements read so far that
ends on `v`.

### Hint 2

An element `x` may follow only values in `[x - k, x - 1]`, so its entry is one
plus the largest tracked length in that window — a range-maximum query.

### Hint 3

A max segment tree spanning the values `1` through `10⁵` answers the window
query and the write in logarithmic time — one of each per element.
