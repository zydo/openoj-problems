# Best Total From Up To M Windows II

## Description

You are given an integer array `nums` of length `n` and three integers `m`,
`l`, and `r`.

Lay out a non-empty selection of at most `m` windows over `nums`, where a
window is a contiguous stretch of the array. The selection is valid when no
position is covered twice and when each window's span — its number of
elements — is one of the values from `l` through `r`.

A window is worth the total of the elements inside it, and a selection
scores the combined worth of all its windows. Find the highest score any
valid selection can reach and return it.

### Example 1

```text
Input: nums = [3,-2,7,1], m = 2, l = 1, r = 2
Output: 11
Explanation: Take the window [3] worth 3 and the window [7, 1] worth
7 + 1 = 8. The spans are legal, the windows stay disjoint, and the score
3 + 8 = 11 cannot be improved by any other valid selection.
```

### Example 2

```text
Input: nums = [5,1,4,9], m = 2, l = 1, r = 2
Output: 19
Explanation: Take the window [5, 1] worth 6 together with the window [4, 9]
worth 13. Both spans sit inside [l, r] and the windows do not overlap, so
the score is 6 + 13 = 19.
```

### Example 3

```text
Input: nums = [-4,8,-5], m = 1, l = 2, r = 3
Output: 4
Explanation: A single window must span 2 or 3 elements: [-4, 8] scores 4,
[8, -5] scores 3, and the whole array scores -1. The best choice is 4.
```

### Example 4

```text
Input: nums = [-7,-3,-9], m = 2, l = 1, r = 2
Output: -3
Explanation: Each legal window has a negative worth here, so the best move
is to take the mildest one, the window [-3], and lose only 3.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
- `1 <= m <= n`
- `1 <= l <= r <= n`

## Hints

### Hint 1

Imagine paying a fee for every window you keep. The more windows cost, the
fewer an optimal plan keeps — the cap on the count has become a dial.

### Hint 2

For one fixed fee `x`, sweep left to right with `dp` over prefixes, keeping
the best adjusted score (raw score minus `x` per window) and, among equal
scores, the largest window count.

### Hint 3

Inside that sweep, a window closing at `i` and opening at `j` changes the
score by `prefix[i] - prefix[j] - x`; a monotonic deque answers the best
`dp[j] - prefix[j]` for openings `l..r` positions back.

### Hint 4

Because the kept count drops as the fee climbs, binary-search the smallest
fee at which the count falls to at most `m`, then add `fee * m` back to the
adjusted score to undo the charges.

### Hint 5

If even a zero fee leaves every window unprofitable, no fee helps — a
separate deque scan finds the single least negative legal window, which
satisfies the must-pick-one rule.
