# Contains Every Binary Form

## Description

The binary form of an integer is its usual binary spelling with no
leading zeros: 1 is "1", 2 is "10", 5 is "101". Given a string `s` of
0s and 1s together with a positive integer `n`, decide whether `s`
contains the binary form of every integer from 1 through `n` as a
contiguous run of its characters. Return `true` when nothing in that
range is missing, and `false` as soon as one binary form is absent.

### Example 1

```text
Input: s = "1100", n = 2
Output: true
Explanation: "1" and "10" both occur inside "1100", covering 1 and 2.
```

### Example 2

```text
Input: s = "101", n = 3
Output: false
Explanation: 3 spells "11" in binary, and "11" never appears in "101".
```

### Example 3

```text
Input: s = "110100", n = 4
Output: true
Explanation: "1", "10", "11" and "100" are all substrings of "110100".
```

### Constraints

- `1 <= s.length <= 1000`
- `s[i]` is either `'0'` or `'1'`.
- `1 <= n <= 10^9`

## Hints

### Hint 1

Values up to 10^9 spell out at most 30 binary digits, so every form that
needs checking is short — which also bounds how much of `s` any single
lookup can touch.
