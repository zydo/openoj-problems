# Splitting Into Tight Segments

## Description

You are given an integer array `nums` and an integer `k`. Cut the array
into one or more consecutive, non-empty pieces — every element stays in
exactly one piece and the pieces read left to right in array order —
with one restriction: inside each piece, the largest and smallest values
may differ by no more than `k`.

Count the distinct ways to place the cuts. The total can be enormous, so
report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [10,1,4,7], k = 6
Output: 4
Explanation: The value 10 is 9 away from 1, so the opening piece is
forced to be [10] by itself. The tail [1,4,7] spans exactly 6 and can be
cut four ways: [[10],[1],[4],[7]], [[10],[1],[4,7]],
[[10],[1,4],[7]], and [[10],[1,4,7]].
```

### Example 2

```text
Input: nums = [6,2,9], k = 4
Output: 2
Explanation: Only two cut sets keep every piece within a spread of 4:
[[6],[2],[9]] and [[6,2],[9]]. Any piece holding both 6 and 9 spans 7.
```

### Example 3

```text
Input: nums = [2,8], k = 1
Output: 1
Explanation: The pair 2, 8 differs by 7, so joining them is impossible —
the only partition is [[2],[8]].
```

### Constraints

- `2 <= nums.length <= 5 * 10⁴`
- `1 <= nums[i] <= 10⁹`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

Scan the cut positions from left to right. The number of ways to have a
cut exactly at one index depends only on cuts further left — a dynamic
program over cut points, not over arbitrary subsets.

### Hint 2

Let `dp[i + 1]` count the partitions of the first `i + 1` entries. Its
final piece is some `nums[j..i]`, and the starts `j` that keep that
piece's spread within `k` form one contiguous range whose left edge only
slides forward as `i` grows.

### Hint 3

A sliding window over the array, fed by two monotonic deques of indices,
exposes the current window's minimum and maximum; prefix sums of `dp`
collapse the range sum to a single subtraction.
