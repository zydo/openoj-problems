# Substrings Without Any Repeats

## Description

You are given a string `s` of lowercase English letters. A substring
is repeat-free when no letter occurs twice within it — in `"motto"`,
the piece `"ot"` is repeat-free, while `"ott"` is not.

Count every repeat-free substring of `s` and return the total.

A substring is a contiguous run of characters taken from the string:
`"ran"` is a substring of `"orange"`, but `"one"` is not, because its
letters are not consecutive there.

### Example 1

```text
Input: s = "abcba"
Output: 11
Explanation: The repeat-free substrings are the 5 single letters;
the 4 pieces of length two, "ab", "bc", "cb", "ba"; and the 2 pieces
of length three, "abc" and "cba". Nothing longer avoids a repeat, so
the total is 5 + 4 + 2 = 11.
```

### Example 2

```text
Input: s = "zzzz"
Output: 4
Explanation: Any substring of length two or more repeats the letter
z, so only the four single letters count.
```

### Example 3

```text
Input: s = "abcabc"
Output: 15
Explanation: There are 6 single letters, 5 pieces of length two, and
4 pieces of length three ("abc", "bca", "cab", "abc"). Every window
of length four repeats a letter, so the total is 6 + 5 + 4 = 15.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of lowercase English letters.
