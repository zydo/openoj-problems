# Substrings Spanning All Three Letters

## Description

You are given a string `s` made only of the letters `a`, `b` and `c`.

Count the substrings in which all three letters occur at least once.

### Example 1

```text
Input: s = "abcab"
Output: 6
Explanation: The qualifying substrings are "abc", "abca", "abcab", "bca",
"bcab" and "cab".
```

### Example 2

```text
Input: s = "ccbaa"
Output: 4
Explanation: The qualifying substrings are "ccba", "ccbaa", "cba" and
"cbaa".
```

### Example 3

```text
Input: s = "bca"
Output: 1
Explanation: Only the whole string qualifies.
```

### Constraints

- `3 <= s.length <= 5 * 10^4`
- `s` consists only of the letters `'a'`, `'b'` and `'c'`.

## Hints

### Hint 1

Fix a left endpoint and slide right: once all three letters have gone by,
every extension of that substring qualifies too, so each start position
contributes all endings from the position where the third letter finally
appears onward.

### Hint 2

Equivalently, scan once and remember where each letter was last seen: the
substrings ending at the current position are exactly those starting at or
before the oldest of the three last-seen spots, contributing
`min(last_a, last_b, last_c) + 1`.
