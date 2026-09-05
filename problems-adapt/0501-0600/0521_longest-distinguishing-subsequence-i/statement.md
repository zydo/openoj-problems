# Longest Distinguishing Subsequence I

## Description

You are given two strings `a` and `b`. A **distinguishing
subsequence** between them is a string that can be formed by deleting
zero or more characters from exactly one of `a` or `b`, while being
impossible to form the same way from the other. Return the length of
the longest distinguishing subsequence, or `-1` if none exists.

### Example 1

```text
Input: a = "hello", b = "world"
Output: 5
Explanation: "hello" itself works, since it is a subsequence of "hello"
but not of "world". "world" is an equally valid longest answer.
```

### Example 2

```text
Input: a = "cat", b = "caterpillar"
Output: 11
Explanation: "caterpillar" is a subsequence of itself but not of the
shorter "cat", so its own length wins.
```

### Example 3

```text
Input: a = "kite", b = "kite"
Output: -1
Explanation: Every subsequence obtainable from a is also obtainable
from b and vice versa, since the two strings are identical, so no
distinguishing subsequence exists.
```

### Constraints

- `1 <= a.length, b.length <= 100`
- `a` and `b` consist only of lowercase English letters.

## Hints

### Hint 1

The answer never requires enumerating actual subsequences.

### Hint 2

If `a` and `b` are the same string, no distinguishing subsequence can
exist, so the answer is `-1`.

### Hint 3

Otherwise one of the two full strings is always itself a valid
answer — figure out which one and why nothing longer can beat it.
