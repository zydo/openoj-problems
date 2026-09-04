# Max Palindrome Chunks

## Description

You are given a string `s` and a positive integer `k`.

A chunk is a contiguous substring of `s`. Choose as many chunks as you can
such that:

- The chunks do not overlap.
- Every chunk is a palindrome.
- Every chunk has length at least `k`.

Return the maximum number of chunks in such a selection.

A substring is a contiguous sequence of characters within a string.

### Example 1

```text
Input: s = "xyzyxw", k = 3
Output: 1
Explanation: The substring "yzy" (indices 1-3) is a palindrome of length at
least 3, and the longer palindrome "xyzyx" (indices 0-4) is also valid.
Either way only one chunk can be chosen, because no second disjoint
palindrome of length at least 3 exists.
```

### Example 2

```text
Input: s = "abacdc", k = 2
Output: 2
Explanation: The palindromes "aba" (indices 0-2) and "cdc" (indices 3-5)
are disjoint and both have length at least 2, so two chunks are possible.
No selection reaches three chunks.
```

### Example 3

```text
Input: s = "abcd", k = 2
Output: 0
Explanation: No substring of length at least 2 is a palindrome, so no
chunk can be chosen.
```

### Constraints

- `1 <= k <= s.length <= 2000`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Model the choice with dynamic programming over prefixes: let `dp[i]` be the
answer for the prefix `s[0..i-1]`.

### Hint 2

When several palindromes end at the same index, the one that starts latest
is always at least as good as any earlier start.

### Hint 3

Grow every palindrome outward from its center — odd and even lengths
separately — and record, for each right endpoint, the latest start that
yields a palindrome of length at least `k`.
