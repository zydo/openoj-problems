# Counting K-Heavy Substrings I

## Description

Call a substring of `s` **k-heavy** when at least one letter occurs at
least `k` times inside it. Given a string `s` and an integer `k`, count
how many of `s`'s substrings are k-heavy.

### Example 1

```text
Input: s = "dcded", k = 2
Output: 5
Explanation: The 2-heavy substrings are:

- "dcd" (the letter 'd' occurs 2 times).
- "dcde" ('d' occurs 2 times).
- "dcded" ('d' occurs 3 times).
- "cded" ('d' occurs 2 times).
- "ded" ('d' occurs 2 times).
```

### Example 2

```text
Input: s = "xyz", k = 1
Output: 6
Explanation: With k = 1 every letter in a substring meets the bar
automatically, so all 6 substrings count.
```

### Constraints

- `1 <= s.length <= 3000`
- `1 <= k <= s.length`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Validity only grows with size: once a window holds some letter `k`
times, stretching it either way cannot take that letter below `k`.

### Hint 2

So for each left start there is an earliest right end where the window
first becomes k-heavy — search for it with a per-letter tally that only
moves forward.

### Hint 3

Every right end past that earliest one keeps the window k-heavy too, so
the left start contributes all of those endings at once; summing over
the starts answers the count.
