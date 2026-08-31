# Unique Palindromic Subsequences

## Description

Given a string `s`, count how many distinct non-empty palindromic
subsequences it has, returning the count modulo `10⁹ + 7` (the true count
can be astronomically large).

A subsequence is what remains after deleting zero or more characters
from `s` without disturbing the order of what's left. A sequence is a
palindrome when it reads the same forwards and backwards. Two candidate
subsequences count as different whenever they differ in at least one
position — so a palindrome that can be picked out of `s` in several ways
(different sets of positions) is still counted only once.

### Example 1

```text
Input: s = "abba"
Output: 6
Explanation: The 6 distinct non-empty palindromic subsequences are 'a',
'b', 'aa', 'bb', 'aba', 'abba'. Even though 'a' and 'aba' can each be
picked out in more than one way, each distinct sequence is counted only
once.
```

### Example 2

```text
Input: s = "dabcdabcdabcdabcdabcdabcdabcdabcdcbadcbadcbadcbadcbadcbadcbadcba"
Output: 695180463
Explanation: There are 2695180477 distinct non-empty palindromic
subsequences, which is 695180463 modulo 10⁹ + 7.
```

### Constraints

- `1 <= s.length <= 1000`
- `s[i]` is one of `'a'`, `'b'`, `'c'`, or `'d'`.

## Hints

### Hint 1

Let `dp(i, j)` count the distinct palindromic subsequences (including the
empty one) of the substring `s[i..j]`. The answer combines the number of
distinct characters appearing in `s[i..j]` with palindromes shaped like
`"a_a"`, `"b_b"`, `"c_c"`, and `"d_d"`, where `"_"` stands for zero or
more characters in between.
