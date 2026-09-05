# The Smallest String One Reversal Can Make II

## Description

You are handed a string `s` of length `n` over the lowercase English
alphabet. You must make exactly one move, and the move has a fixed shape:
pick a length `k` with `1 <= k <= n`, then reverse either the block formed
by the first `k` characters of `s` or the block formed by the last `k`
characters of `s`. Everything outside the chosen block stays where it was.

Over every string one such move can produce, return the lexicographically
smallest one.

### Example 1

```text
Input: s = "bcaf"
Output: "acbf"
Explanation: With k = 3, reversing the first 3 characters turns "bca" into
"acb", so s becomes "acbf" — no other single move sorts lower.
```

### Example 2

```text
Input: s = "aacb"
Output: "aabc"
Explanation: With k = 2, reversing the last 2 characters turns "cb" into
"bc", so s becomes "aabc".
```

### Example 3

```text
Input: s = "hcag"
Output: "achg"
Explanation: With k = 3, reversing the first 3 characters turns "hca" into
"ach", so s becomes "achg".
```

### Constraints

- `1 <= n == s.length <= 10⁵`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

A single move leaves 2n candidate strings on the table, and many of them
agree on a long prefix. Comparing every pair character by character is too
slow; precompute hashes so each pairwise comparison binary-searches the
longest common prefix instead.
