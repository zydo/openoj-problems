# Longest Letter Run

## Description

An alphabetical continuous string is one made of consecutive letters of the
alphabet — in other words, any substring of
`"abcdefghijklmnopqrstuvwxyz"`. For example, `"abc"` is continuous, while
`"acb"` and `"za"` are not.

Given a string `s` of lowercase English letters, return the length of the
longest alphabetical continuous substring within it.

### Example 1

```text
Input: s = "xyzabcde"
Output: 5
Explanation: The string breaks into the runs "xyz" and "abcde"; the latter
is longer.
```

### Example 2

```text
Input: s = "aceg"
Output: 1
Explanation: Every pair of neighboring letters skips a letter, so no run
exceeds a single character.
```

### Example 3

```text
Input: s = "abcz"
Output: 3
Explanation: The run "abc" has length 3; the following `z` starts a new
single-letter run.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of only English lowercase letters.

## Hints

### Hint 1

A character continues the current run exactly when it is one more than the
previous character.

### Hint 2

Track the length of the run ending at each position and keep the maximum
seen.
