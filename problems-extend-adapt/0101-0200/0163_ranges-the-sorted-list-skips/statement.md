# Ranges The Sorted List Skips

## Description

You get a window `[lower, upper]` — two inclusive bounds — and a sorted
array `nums` of distinct integers, every one of them guaranteed to fall
inside that window.

Think of the window as the full set of integers it contains, and of `nums`
as the handful of those integers that actually got picked. Every unpicked
integer counts as skipped. Report the skipped territory as compactly as
possible: return the shortest list of inclusive ranges that covers each
skipped integer exactly once, in increasing order. No picked integer may
appear inside any returned range, and every maximal run of consecutive
skipped integers should be a single `[start, end]` pair.

### Example 1

```text
Input: nums = [8,11,12,30], lower = 5, upper = 35
Output: [[5,7],[9,10],[13,29],[31,35]]
Explanation: Between consecutive picks of 8, 11, 12 and 30 — and on either
outer side of them — four separate stretches of the window carry no picks at
all.
```

### Example 2

```text
Input: nums = [], lower = 3, upper = 4
Output: [[3,4]]
Explanation: With nothing picked, the whole window is one skipped range.
```

### Example 3

```text
Input: nums = [2,3,4], lower = 2, upper = 4
Output: []
Explanation: Every integer of the window got picked, so nothing is skipped.
```

### Constraints

- `-10⁹ <= lower <= upper <= 10⁹`
- `0 <= nums.length <= 100`
- `lower <= nums[i] <= upper`
- Every element of `nums` is distinct.
