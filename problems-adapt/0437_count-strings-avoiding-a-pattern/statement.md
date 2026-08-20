# Count Strings Avoiding a Pattern

## Description

You are given two strings `s1` and `s2`, each of length `n`, with `s1 <= s2`,
and a string `pattern`.

Count the strings `w` of length `n` over the lowercase alphabet such that:

- `s1 <= w <= s2` in alphabetical order, and
- `pattern` never occurs inside `w` as a contiguous substring.

The count can be enormous; return it **modulo** `10^9 + 7`.

### Example 1

```text
Input: n = 2, s1 = "af", s2 = "cd", pattern = "b"
Output: 24
Explanation: The range "af".."cd" holds 51 strings: "af".."az" (21), "ba".."bz"
(26), and "ca".."cd" (4). Every string of the middle block contains "b", and so
does "cb" — 27 exclusions in all, leaving 51 - 27 = 24.
```

### Example 2

```text
Input: n = 3, s1 = "aba", s2 = "abz", pattern = "ab"
Output: 0
Explanation: Every string between "aba" and "abz" begins with "ab", which is
the pattern itself, so nothing in the range qualifies.
```

### Example 3

```text
Input: n = 3, s1 = "oxo", s2 = "oxo", pattern = "ow"
Output: 1
Explanation: The range is the single string "oxo", and "ow" does not occur in
it, so the count is 1.
```

### Constraints

- `s1.length == n` and `s2.length == n`
- `s1 <= s2`
- `1 <= n <= 500`
- `1 <= pattern.length <= 50`
- All three strings consist of lowercase English letters.

## Hints

### Hint 1

This is digit DP with the digits drawn from `a..z`. Build `w` left to right
and carry two flags: does the prefix written so far still equal `s1`'s prefix
(pinning the next character from below), and does it still equal `s2`'s
(pinning it from above)? A flag clears the moment the prefix diverges from
its boundary string.

### Hint 2

Fighting the substring ban without rescanning takes one more state component:
the length of the longest suffix of the built prefix that is also a prefix of
`pattern`. Precompute `pattern`'s failure function so each appended character
advances that component along failure links.
