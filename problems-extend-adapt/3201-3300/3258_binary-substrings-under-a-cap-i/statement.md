# Binary Substrings Under A Cap I

## Description

You are given a binary string `s` and an integer `k`.

A binary string stays under the cap when at least one of its two character
counts is small enough:

- It contains at most `k` zeros, or
- it contains at most `k` ones.

Count how many substrings of `s` stay under the cap, and return that
number.

### Example 1

```text
Input: s = "1001", k = 1
Output: 9
Explanation: The only substring that holds two zeros and two ones at once
is the whole string "1001"; the other 9 substrings each keep one of their
counts at most 1.
```

### Example 2

```text
Input: s = "0000", k = 2
Output: 10
Explanation: No substring of `s` contains a one, so the ones count is 0 <=
k everywhere and all 10 substrings stay under the cap.
```

### Example 3

```text
Input: s = "10", k = 2
Output: 3
Explanation: With the cap as large as the string itself, every substring
trivially qualifies.
```

### Constraints

- `1 <= s.length <= 50`
- `1 <= k <= s.length`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

There are at most `n · (n + 1) / 2` substrings here, and each character
count can be maintained incrementally rather than recounted.

### Hint 2

Pin the left endpoint and grow the right end, adding `1` to a zero counter
whenever the incoming character is `'0'`; the one count is the window
length minus that.
