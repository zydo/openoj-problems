# Longest Stitched Palindrome I

## Description

You are given two strings, `s` and `t`.

Stitch a new string together by cutting one substring out of `s` and one
substring out of `t` — either piece may be empty — and joining them with
the `s`-piece in front.

Return the length of the longest palindrome some stitch of this form can
produce.

### Example 1

```text
Input: s = "ca", t = "ab"
Output: 2
Explanation: Stitching the "a" from s onto the "a" from t makes "aa", a
palindrome of length 2.
```

### Example 2

```text
Input: s = "xyz", t = "q"
Output: 1
Explanation: The two strings share no letters, so no stitch of length 2 or
more can be a palindrome; any single character already gives the best
answer, 1.
```

### Example 3

```text
Input: s = "de", t = "eefd"
Output: 3
Explanation: Stitching "de" from s onto the trailing "d" from t makes
"ded", a palindrome of length 3.
```

### Example 4

```text
Input: s = "aba", t = "caba"
Output: 7
Explanation: Taking all of s and all of t gives "abacaba", which reads the
same in both directions — length 7.
```

### Constraints

- `1 <= s.length, t.length <= 30`
- `s` and `t` consist of lowercase English letters.

## Hints

### Hint 1

The strings are tiny — enumerate every pair of substrings and test each
stitch directly.

### Hint 2

A stitch `s[i..i2] + t[j..j2]` is a palindrome exactly when the shorter
piece mirrors the longer one character-for-character and whatever is left
over of the longer piece is itself a palindrome.

### Hint 3

Because a piece may be empty, the answer also covers palindromic
substrings that live entirely inside `s` or entirely inside `t`.
