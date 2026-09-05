# Three-Piece Palindrome Split IV

## Description

Given a string `s`, decide whether it can be cut into three non-empty
pieces, each of which reads the same forwards and backwards. Return
`true` when such a cut exists and `false` otherwise.

### Example 1

```text
Input: s = "xyzzyxqq"
Output: true
Explanation: "xyzzyx" | "q" | "q" — a palindromic head followed by two
single letters.
```

### Example 2

```text
Input: s = "abcabc"
Output: false
Explanation: Only the one-letter prefixes are palindromes, so any cut
is forced to leave a tail like "cabc", which is not one.
```

### Example 3

```text
Input: s = "eeee"
Output: true
Explanation: "e" | "e" | "ee" works; every repeated-letter string of
length 3 or more can be cut this way.
```

### Constraints

- `3 <= s.length <= 2000`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Preprocess palindrome answers so any substring can be tested in constant
time.

### Hint 2

The first piece is a prefix and the last piece is a suffix — try every
pair of cut positions and let the table settle the rest.
