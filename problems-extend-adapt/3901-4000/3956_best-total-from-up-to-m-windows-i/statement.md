# Best Total From Up To M Windows I

## Description

You are given an integer array `nums` of length `n` and three integers `m`,
`l`, and `r`.

Pick a non-empty set of at most `m` windows — contiguous pieces of `nums` —
obeying two rules:

- No two picked windows may share a position, and every picked window must
  span somewhere between `l` and `r` positions, bounds included.
- A window's contribution is the sum of the elements it covers, and the
  overall score is the sum of every window's contribution.

Maximize that score over all legal ways of picking the windows, and return
the best score.

### Example 1

```text
Input: nums = [2,-1,5,3], m = 2, l = 1, r = 2
Output: 10
Explanation: Pick the window [2] covering 2 and the window [5, 3] covering
5 + 3 = 8. Both spans fall inside [l, r], the two windows do not overlap,
and together they score 2 + 8 = 10, which no other legal choice beats.
```

### Example 2

```text
Input: nums = [6,0,2,8], m = 2, l = 1, r = 2
Output: 16
Explanation: Pick the window [6, 0] covering 6 + 0 = 6 and the window
[2, 8] covering 2 + 8 = 10. Both spans are legal and disjoint, so the
score is 6 + 10 = 16.
```

### Example 3

```text
Input: nums = [-2,9,-3], m = 1, l = 2, r = 3
Output: 7
Explanation: With only one window allowed, the candidates are [-2, 9]
scoring -2 + 9 = 7, [9, -3] scoring 6, and the full array scoring 4. The
best of these is 7.
```

### Example 4

```text
Input: nums = [-5,-6,-2], m = 2, l = 1, r = 2
Output: -2
Explanation: Every legal window here has a negative score, so the answer is
the least damaging one: the single-element window [-2], worth -2.
```

### Constraints

- `1 <= n == nums.length <= 1000`
- `-10⁹ <= nums[i] <= 10⁹`
- `1 <= m <= n`
- `1 <= l <= r <= n`

## Hints

### Hint 1

Work layer by layer over positions: let `dp[c][i]` store the best score
reachable within the first `i` elements once at most `c` windows have been
laid down.

### Hint 2

A window closing at position `i` and opening at position `j` is legal
exactly when `l <= i - j <= r`, and it adds `prefix[i] - prefix[j]` to the
score.

### Hint 3

Regroup the transition into `prefix[i] + (dp[c - 1][j] - prefix[j])`; the
parenthesized term only needs its running maximum over the sliding start
range, which a monotonic deque maintains in amortized constant time.
