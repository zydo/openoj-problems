# Subsequence Gap Length

## Description

You are given two strings `s` and `t` consisting of only lowercase English
letters.

Return the minimum number of characters that need to be appended to the end
of `s` so that `t` becomes a subsequence of `s`.

A subsequence is a string that can be derived from another string by
deleting some or no characters without changing the order of the remaining
characters.

### Example 1

```text
Input: s = "abc", t = "abc"
Output: 0
Explanation: t is already a subsequence of s, so nothing needs to be
appended.
```

### Example 2

```text
Input: s = "abc", t = "abd"
Output: 1
Explanation: Appending the single character "d" gives s = "abcd", in which
t appears as a subsequence. No zero-character append works.
```

### Example 3

```text
Input: s = "hello", t = "hello world"
Output: 6
Explanation: Appending " world" makes s = "hello world". Any shorter
append leaves at least one character of t unmatched.
```

### Example 4

```text
Input: s = "a", t = "ab"
Output: 1
Explanation: Appending "b" to s makes t a subsequence.
```

### Constraints

- `1 <= s.length, t.length <= 10⁵`
- `s` and `t` consist only of lowercase English letters.

## Hints

### Hint 1

Appending only extends `s`, so the part of `t` that can be matched for free
is some prefix of `t`.

### Hint 2

Find the longest prefix of `t` that is already a subsequence of `s`.

### Hint 3

Use two pointers, one into each string: on a match advance both, and on a
mismatch advance only the `s` pointer.

### Hint 4

The characters of `t` left after that greedy prefix scan are exactly the
characters that must be appended.
