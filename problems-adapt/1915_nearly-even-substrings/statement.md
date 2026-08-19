# Nearly Even Substrings

## Description

Call a string **nearly even** when no more than one of its distinct
letters occurs an odd number of times. Every letter's count may be even,
or exactly one letter may be odd — nothing stricter.

- `"bccb"` is nearly even (both counts even), `"aab"` is too (one odd
  letter), but `"abc"` is not (three odd letters).

The string `word` uses only the first ten lowercase letters, `'a'`
through `'j'`. Count its nearly even non-empty substrings, treating
repeated occurrences as separate: a substring that shows up twice counts
twice. (A substring is a run of consecutive characters.)

### Example 1

```text
Input: word = "abc"
Output: 3
Explanation: "a", "b", and "c" qualify — each has exactly one odd letter.
Every longer substring has two or three odd letters.
```

### Example 2

```text
Input: word = "abba"
Output: 8
Explanation: The qualifying substrings are "a", "b", "b", "a", "bb",
"abb", "bba", and "abba" — the last three because they have at most the
one odd letter.
```

### Example 3

```text
Input: word = "jjj"
Output: 6
Explanation: All six substrings consist of j's only, so the letter j is
the sole odd-or-even count in each: "j", "j", "j", "jj", "jj", "jjj".
```

### Constraints

- `1 <= word.length <= 10^5`
- `word` contains only lowercase letters `'a'` through `'j'`.

## Hints

### Hint 1

Track, for each prefix, which letters have appeared an odd number of
times so far — a 10-bit mask is enough for ten letters.

### Hint 2

A substring is nearly even exactly when the masks at its two bounding
prefixes are identical, or differ in one bit alone.
