# Smallest Largest Group Sum

## Description

You are given an integer array `nums` and an integer `k`. Every entry of
`nums` must be placed into one of `k` groups; entries cannot be divided,
and a group may stay empty.

The cost of a grouping is the largest sum held by any one group.

Return the smallest cost achievable over all groupings.

### Example 1

```text
Input: nums = [6,13,9,17,6], k = 2
Output: 26
Explanation: Group [17,9] sums to 26 and [6,13,6] sums to 25, so the
cost is max(26, 25) = 26.
The entries total 51, and two groups cannot both stay at 25 or below,
so no grouping costs less.
```

### Example 2

```text
Input: nums = [10,4,6,3], k = 2
Output: 13
Explanation: Group [10] alone sums to 10, and [4,6,3] sums to 13 —
cost 13. ([10,3] beside [4,6] does just as well.) Cost 12 is
impossible: the entries total 23, which would need one group summing to
11 and the other to 12, and no selection of these entries sums to
either.
```

### Example 3

```text
Input: nums = [7,2,9,4,5], k = 3
Output: 9
Explanation: [9], [7,2] and [4,5] all sum to at most 9. The entries
total 27, so three groups force one to carry at least 9 — the bound is
met exactly.
```

### Constraints

- `2 <= nums.length <= 8`
- `1 <= nums[i] <= 10^5`
- `2 <= k <= nums.length`

## Hints

### Hint 1

Every entry has to go somewhere, and there are at most `k^8` assignments
in total. What stops you from just trying them all with recursion?

### Hint 2

While placing entries one at a time, track each group's running sum; the
moment the last entry lands, the largest of those sums is the cost of
that grouping.

### Hint 3

Cut the recursion two ways: abandon a branch whose running maximum can
no longer beat the best complete grouping found so far, and never try
two groups whose current sums are equal.
