# Most Common Admissible Substring

## Description

Pick any fragment of the string `s` that obeys both rules:

- it uses at most `maxLetters` distinct letters;
- its length lies between `minSize` and `maxSize`, inclusive.

Fragments may overlap, and every starting position counts as a separate
occurrence. Return how many times the most frequent admissible fragment
appears in `s` — or `0` when no fragment qualifies.

### Example 1

```text
Input: s = "xaxaxa", maxLetters = 1, minSize = 1, maxSize = 2
Output: 3
Explanation: The letter "x" appears three times; any longer window
mixes in "a" and breaks the distinct-letter cap.
```

### Example 2

```text
Input: s = "bcabcab", maxLetters = 2, minSize = 2, maxSize = 3
Output: 2
Explanation: "bc", "ca", and "ab" each occur twice, and nothing occurs
more often.
```

### Example 3

```text
Input: s = "abc", maxLetters = 1, minSize = 2, maxSize = 2
Output: 0
Explanation: Every length-2 window spans two letters, so no fragment
is admissible.
```

### Constraints

- `1 <= s.length <= 10^5`
- `1 <= maxLetters <= 26`
- `1 <= minSize <= maxSize <= min(26, s.length)`
- `s` holds only lowercase English letters.

## Hints

### Hint 1

Compare a qualifying fragment with its own `minSize`-length prefix:
wherever the fragment occurs, that shorter prefix occurs too — so a
longer fragment can never win.

### Hint 2

Count only windows of exactly `minSize`: slide one across the string,
maintain a 26-slot letter table for the distinct-count test, and tally
each qualifying window's text in a hash map.
