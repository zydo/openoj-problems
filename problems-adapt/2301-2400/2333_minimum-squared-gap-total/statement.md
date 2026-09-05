# Minimum Squared Gap Total

## Description

You are given two integer arrays `nums1` and `nums2`, both of length `n`,
whose entries may be zero or positive. Score the pairing position by
position: the squared gap total is the sum of `(nums1[i] - nums2[i])²`
over every index `i`.

You may reshape the pairing with single-step edits. Any entry of `nums1`
may be changed by `+1` or `-1`, at most `k1` edits in total, and any entry
of `nums2` likewise, at most `k2` edits in total; every individual `+1` or
`-1` spends one unit of its budget. Edited entries are allowed to become
negative.

Return the smallest squared gap total reachable after spending at most
`k1` edits on `nums1` and at most `k2` edits on `nums2`.

### Example 1

```text
Input: nums1 = [3,1,4], nums2 = [1,5,0], k1 = 2, k2 = 0
Output: 22
Explanation: The position gaps are 2, 4, and 4. Pouring both edits into
one gap would leave 2, 2, 4 for a total of 24, but easing each 4-gap down
by one leaves 2, 3, 3 — a total of 4 + 9 + 9 = 22, which is the best
achievable.
```

### Example 2

```text
Input: nums1 = [2,5], nums2 = [7,1], k1 = 0, k2 = 0
Output: 41
Explanation: Neither budget allows an edit, so the pairing stands:
(2 - 7)² + (5 - 1)² = 25 + 16 = 41.
```

### Example 3

```text
Input: nums1 = [1,1], nums2 = [6,6], k1 = 3, k2 = 0
Output: 25
Explanation: Both gaps start at 5. Three edits ease them to 3 and 4 — for
instance raising the two entries of nums1 to 3 and 2 — for a total of
9 + 16 = 25.
```

### Constraints

- `nums1` and `nums2` share the same length `n`.
- `1 <= n <= 10^5`
- Every entry of both arrays lies in `[0, 10^5]`.
- `0 <= k1, k2 <= 10^9`

## Hints

### Hint 1

Only the size of each gap matters: a `+1` on one array and a `-1` on the
other move a gap in the same direction, so the two budgets pool into one
spent on absolute gaps.

### Hint 2

Shrinking the current largest gap by one always removes the most from the
total, and an edit should never push a gap past zero — beyond that the
absolute value grows again. Work level by level, largest gap first.

### Hint 3

Buckets of equal gaps can be lowered one level together while the budget
covers them; only the bucket the budget dies inside has to be split.
