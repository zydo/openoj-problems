# Longest Common Subsequence

## Description

Given two lowercase strings `s` and `t`, return the length of their longest
common subsequence, or `0` if they share none.

A subsequence of a string keeps the left-to-right order of the original but
may skip characters — `"le"` is a subsequence of `"longest"`.

A common subsequence is a string that is a subsequence of both `s` and `t`.

### Example 1

```text
Input: s = "stone", t = "longest"
Output: 3
Explanation: "one" can be read out of both strings in order; no fourth
character extends it in both.
```

### Example 2

```text
Input: s = "sprint", t = "print"
Output: 5
Explanation: All of "print" sits inside "sprint".
```

### Example 3

```text
Input: s = "wolf", t = "tram"
Output: 0
Explanation: The two strings share no character, hence no subsequence.
```

### Constraints

- `1 <= s.length, t.length <= 1000`
- `s` and `t` consist of lowercase English letters.

## Hints

### Hint 1

Compare the strings prefix against prefix: what is the longest shared
subsequence of `s[:i]` and `t[:j]`?

### Hint 2

When the two prefixes end in the same letter, that letter can always close
a longest common subsequence; otherwise at least one of the two final
letters is expendable — drop whichever side helps more.

### Hint 3

Each row of that table depends only on the row before it, so two rows are
enough to carry the whole computation.
