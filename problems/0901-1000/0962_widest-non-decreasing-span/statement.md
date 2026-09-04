# Widest Non-Decreasing Span

## Description

Pick two positions in an integer array `nums`: a span is a pair of
indices `(i, j)` with `i < j` whose end values step the right way — the
later element does not fall below the earlier one, `nums[i] <= nums[j]`.
A span's width is the index distance `j - i` between its two ends.

Measure `nums` and return the width of its widest span, or `0` when no
qualifying pair exists. Equal values count: the test is `<=`, so a later
copy of an earlier value can close a span.

### Example 1

```text
Input: nums = [7,2,9,4,3,6]
Output: 4
Explanation: The widest span runs from the 2 at index 1 to the 6 at
index 5 — 2 <= 6, and the distance is 5 - 1 = 4.
```

### Example 2

```text
Input: nums = [3,8,4,1,4,9,1,3]
Output: 7
Explanation: The pair (0, 7) qualifies through equal values — 3 <= 3 —
so the width climbs to 7 - 0 = 7.
```

### Example 3

```text
Input: nums = [6,5,4]
Output: 0
Explanation: Every later element sits below all of its predecessors, so
no pair qualifies and the widest width is 0.
```

### Constraints

- `2 <= nums.length <= 5 * 10⁴`
- `0 <= nums[i] <= 5 * 10⁴`
