# Uniform Substring Tally

## Description

Count the substrings of `s` in which every character is the same letter —
that is, substrings containing exactly one distinct character. Substrings
at different positions count separately, even when they look identical.

### Example 1

```text
Input: s = "aabbb"
Output: 9
Explanation: Splitting at the letter changes, the string is the runs "aa"
and "bbb". "aa" holds 3 uniform substrings ("a" twice, "aa" once) and
"bbb" holds 6 ("b" three times, "bb" twice, "bbb" once), for 3 + 6 = 9.
```

### Example 2

```text
Input: s = "aba"
Output: 3
Explanation: No two adjacent letters match, so the only uniform
substrings are the three single characters.
```

### Example 3

```text
Input: s = "xxyxxx"
Output: 10
Explanation: The runs are "xx", "y", and "xxx", contributing
3 + 1 + 6 = 10.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

A substring with a single distinct letter can never cross a position
where the character changes, so the maximal same-letter runs of `s`
partition the answer.

### Hint 2

A run of length `L` accounts for `L(L+1)/2` substrings; alternatively,
extend the current run length one character at a time and add it to the
total at each step — the two counts come out identical.
