# Longest Scattered Palindrome

## Description

You are given a string `s`. Pick letters out of `s` from left to right —
keeping their relative order but skipping as many as you like — and the
letters you picked form a **subsequence**. A subsequence that reads the same
in both directions is a mirror.

Return the length of the longest mirror you can pick out of `s`.

A single letter on its own is a mirror of length 1.

### Example 1

```text
Input: s = "acgtca"
Output: 5
Explanation: Skipping the 't' leaves "acgca", which mirrors around its
middle 'g'. Nothing longer is reachable.
```

### Example 2

```text
Input: s = "xoyyx"
Output: 4
Explanation: The whole string does not read the same in both directions,
but its first and last letters wrap the "yy" pair: picking the x's and the
y's gives "xyyx".
```

### Example 3

```text
Input: s = "qwerty"
Output: 1
Explanation: No letter occurs twice, so no mirror of length 2 or more
exists; any single letter is the best.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Look at any stretch of the string. A best mirror for that stretch either
uses both of its end letters, or it does without at least one of them.

### Hint 2

If the two end letters agree, they can sit at the outside of a mirror built
from the stretch strictly between them. If they differ, drop one end or the
other and keep whichever remainder does better.

### Hint 3

Let `dp[i][j]` score the stretch from `i` to `j`. Every stretch of length 1
scores 1. Fill the table in order of growing stretch length so the shorter
stretches each cell reads from are already final.
