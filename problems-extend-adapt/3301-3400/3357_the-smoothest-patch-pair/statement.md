# The Smoothest Patch Pair

## Description

You are given an integer array `nums`, where some entries are missing and
marked `-1`. Pick a pair of positive integers `(x, y)` — just one pair —
and replace every missing entry with either `x` or `y`, your choice per
entry.

Afterward, look at the absolute differences of neighboring elements.
Choose the pair so that this largest difference is as small as possible,
and return that smallest achievable value.

### Example 1

```text
Input: nums = [5,-1,20,-1,-1,9]
Output: 8
Explanation: Choose `(x, y) = (1, 12)` and patch every hole with `12`:
`[5,12,20,12,12,9]`. The neighboring differences are `7, 8, 8, 0, 3`, so
the largest is `8`, and no pair can push it lower.
```

### Example 2

```text
Input: nums = [4,4,4]
Output: 0
Explanation: Nothing is missing, and every neighboring pair already
agrees, so the largest difference is `0`.
```

### Example 3

```text
Input: nums = [6,-1,7,-1,12]
Output: 3
Explanation: With `(x, y) = (1, 9)`, patch both holes with `9` to get
`[6,9,7,9,12]`, whose largest neighboring difference is `3`. The value
`9` sits within `3` of `7` as well as of `12`, which is what makes the
second hole workable.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `nums[i]` is `-1` or in the range `[1, 10⁹]`

## Hints

### Hint 1

Treat each maximal stretch of `-1`s on its own: only the known values at
its two ends constrain how it may be filled.

### Hint 2

A stretch takes either one value for its whole length — that value within
`d` of both ends — or, when it is at least two cells long, hands off from
`x` to `y` somewhere in the middle with `x` and `y` at most `d` apart.

### Hint 3

Feasibility of a largest difference `d` only improves as `d` grows, which
invites a binary search over `d`; each probe becomes the question of
whether two values can cover every stretch at once, an interval-stabbing
problem.
