# Longest Stitched Palindrome II

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

- `1 <= s.length, t.length <= 1000`
- `s` and `t` consist of lowercase English letters.

## Hints

### Hint 1

Let `dp[i][j]` be the length of the best stitch that begins with `s[i]`
and ends with `t[j]`.

### Hint 2

Precompute `p[i]`, the longest palindrome that starts at `s[i]`.

### Hint 3

Precompute `q[j]`, the longest palindrome that ends at `t[j]`.

### Hint 4

When `s[i] != t[j]`, the two ends cannot pair off, so
`dp[i][j] = max(p[i], q[j])`.

### Hint 5

When `s[i] == t[j]`, the pair wraps around the inner answer:
`dp[i][j] = max(p[i], q[j], 2 + dp[i + 1][j - 1])`. Each cell only needs
its neighbour on the same diagonal, so one scalar per anti-diagonal suffices.
