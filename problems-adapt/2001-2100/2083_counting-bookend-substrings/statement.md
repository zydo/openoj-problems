# Counting Bookend Substrings

## Description

Take a string `s` of lowercase English letters. A bookend substring is a
non-empty contiguous chunk of `s` whose first and last characters are the
same letter; a single character qualifies on its own, since its two ends
coincide.

Count the bookend substrings of `s`. Occurrences matter, not spellings:
chunks taken from different positions count separately even when they read
identically.

### Example 1

```text
Input: s = "dabcda"
Output: 8
Explanation:
All 6 single characters qualify. The repeats add two longer ones: the d's
bracket "dabcd" and the a's bracket "abcda". Total = 6 + 2 = 8.
```

### Example 2

```text
Input: s = "zzz"
Output: 6
Explanation:
The three single "z"s qualify, plus "zz" starting at index 0, "zz"
starting at index 1, and "zzz". Total = 3 + 3 = 6.
```

### Example 3

```text
Input: s = "abcde"
Output: 5
Explanation: No letter ever repeats, so only the five single-character
substrings count.
```

### Example 4

```text
Input: s = "racecar"
Output: 10
Explanation:
The 7 single characters qualify, and each of `r`, `a`, and `c` occurs
twice, bracketing "racecar", "aceca", and "cec". Total = 7 + 3 = 10.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

Work letter by letter: a substring is bookend exactly when its two ends
carry the same letter, so the answer splits into one independent count per
letter of the alphabet.

### Hint 2

A letter appearing `c` times anchors all `c` one-letter substrings plus
every pair of distinct occurrences — `c * (c + 1) / 2` substrings in
total.

### Hint 3

The per-letter counts can be folded into a single scan: when a character
shows up for its k-th time, it closes exactly `k` bookend substrings, one
for each occurrence up to and including itself.
