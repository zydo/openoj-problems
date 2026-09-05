# Cheapest Trimmed Split of an Array

## Description

You are given an integer array `nums` and an integer `k`. Cut `nums`
into one or more non-empty contiguous pieces. Each piece is then
scored individually: trimming a piece deletes every value that occurs
exactly once inside it, and the piece's importance is `k` plus the
length of what remains. The cost of a split is the total importance
of all its pieces, and you should report the smallest cost any way of
cutting the array can achieve.

For a concrete illustration, the piece `[5,6,5,7]` trims down to
`[5,5]`, because `6` and `7` appear only once inside it. With
`k = 3` that piece's importance would be `3 + 2 = 5` — its two
one-time visitors contribute nothing.

### Example 1

```text
Input: nums = [2,3,2,3], k = 1
Output: 2
Explanation: Cut into [2,3] and [2,3]. Neither piece contains a
repeated value, so each trims to nothing and scores 1 + 0 = 1, for a
total of 2.
```

### Example 2

```text
Input: nums = [1,1,1], k = 3
Output: 6
Explanation: Keeping the array whole is best here: [1,1,1] trims to
itself, scoring 3 + 3 = 6. Every cut would strand a 1 in a piece
where it still counts.
```

### Example 3

```text
Input: nums = [7,7,8,9,8], k = 2
Output: 6
Explanation: One piece wins: [7,7,8,9,8] trims to [7,7,8,8], scoring
2 + 4 = 6. The lone 9 is the only element trimming discards.
```

### Constraints

- `1 <= nums.length <= 1000`
- Every element satisfies `0 <= nums[i] < nums.length`.
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Name a state: let `g[r]` be the cheapest cost of covering exactly the
first `r` elements. If you knew every `g` before position `r`, what
candidates could produce `g[r]`?

### Hint 2

The last piece of an optimal split ending at `r` starts at some `l`,
so `g[r]` is the minimum of `g[l] + importance(l..r)` over all
`l < r`. Evaluating each importance from scratch costs linear time and
there are quadratic-many windows — a cubic total.

### Hint 3

All windows that share a right endpoint are related to one another.
Instead of scoring each window independently, grow them one element at
a time and update a running tally.

### Hint 4

Walk `l` from `r-1` down to `0` with one frequency table. When the
counted value is new it contributes nothing (trimming will drop it);
its second occurrence contributes 2, since both copies become
keepers in the same instant; every later copy contributes 1. Each
right endpoint then costs a single linear sweep, `O(n²)` overall.
