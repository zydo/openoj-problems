# Zeroing Down To The Budget

## Description

Two equal-length, 0-indexed integer arrays `nums1` and `nums2` are given.
Time advances one second at a time, and each second unfolds in two stages.
First comes the growth stage: every element of `nums1` gains its companion
rate, so `nums1[i]` increases by `nums2[i]` for every `i`. Then comes your
move: you may pick one index and reset that single element of `nums1` to
zero. Resetting is optional — on any second you may skip the move entirely.

You are also given an integer `x`.

Return the fewest seconds after which the total of all `nums1` elements can
be made `x` or smaller, or `-1` when no sequence of moves ever gets there.

### Example 1

```text
Input: nums1 = [4,6,2], nums2 = [1,3,2], x = 10
Output: 1
Explanation: During the first second the arrays grow to [5,9,4]; zeroing
the 9 leaves [5,0,4], whose sum is 9, within the budget of 10.
```

### Example 2

```text
Input: nums1 = [3,1,4], nums2 = [1,5,2], x = 6
Output: 3
Explanation: Zero the 3 during the first second, the 4 during the second,
and the 1 during the third; the sums after each move are 12, 12, and 4, and
the final 4 clears the budget. One or two seconds cannot get under 6, so 3
is the minimum.
```

### Example 3

```text
Input: nums1 = [1,2,3], nums2 = [2,2,2], x = 5
Output: -1
Explanation: Every tick pumps 6 into the total, and even erasing every
element once still leaves a residual sum of 6, so the total can never fall
to 5 or below.
```

### Constraints

- `1 <= nums1.length == nums2.length <= 10³`
- `1 <= nums1[i] <= 10³`
- `0 <= nums2[i] <= 10³`
- `0 <= x <= 10⁶`

## Hints

### Hint 1

An exchange argument shows a well-run schedule never zeroes the same index
twice: dropping the earlier of two zeroings and sliding the rest one second
earlier is never worse.

### Hint 2

A second exchange argument orders the zeroings: when several indices are
chosen, doing the ones with smaller `nums2` earlier and larger `nums2`
later is always at least as good, since a zeroing at second `j` cancels
`nums1[i] + nums2[i] * j` of the running total.

### Hint 3

Sort the indices by rate. With `dp[i][j]` = the largest total amount that
the first `i` indices can strip from the eventual sum using `j` zeroings,
`dp[i][j] = max(dp[i-1][j], dp[i-1][j-1] + nums2[i-1] * j + nums1[i-1])`.

### Hint 4

The answer is the smallest `t` with `0 <= t <= n` such that
`sum(nums1) + sum(nums2) * t - dp[n][t] <= x`; if no such `t` exists,
return `-1`.
