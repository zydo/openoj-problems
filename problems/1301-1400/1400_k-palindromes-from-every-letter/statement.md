# K Palindromes From Every Letter

## Description

You are given a string `s` of lowercase letters and an integer `k`.
Decide whether every character of `s` can be dealt out into exactly `k`
non-empty strings, each reading the same forwards and backwards. The
characters may be arranged in any order within a string, but each one
must be used exactly once.

Return `true` when such a split exists and `false` otherwise.

### Example 1

```text
Input: s = "onion", k = 2
Output: true
Explanation: "oo" and "nin" together use every character of "onion",
and both are palindromes.
```

### Example 2

```text
Input: s = "abcde", k = 2
Output: false
Explanation: Each of the five letters occurs once, and a letter with an
odd count has to sit at the middle of its own palindrome, so at least
five palindromes would be needed.
```

### Example 3

```text
Input: s = "aabbccdd", k = 3
Output: true
Explanation: "aa", "bb", and "ccddcc" spend all eight characters across
three palindromes.
```

### Example 4

```text
Input: s = "telescope", k = 4
Output: false
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters.
- `1 <= k <= 10⁵`

## Hints

### Hint 1

With fewer characters than strings the split is impossible — every
string must be non-empty.

### Hint 2

A palindrome can hold at most one letter whose overall count is odd — at
most its middle position — so the odd-count letters force a minimum
number of strings.

### Hint 3

That minimum is the only obstacle: whenever `k` is at least the
odd-count total (and at most the length), a split into exactly `k`
palindromes can always be built.
