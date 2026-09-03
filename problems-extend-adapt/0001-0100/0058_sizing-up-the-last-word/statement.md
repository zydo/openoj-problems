# Sizing Up The Last Word

## Description

A string `s` is made up of English words separated by spaces. Measure the
final word: report how many letters it contains.

A word is the longest possible stretch of characters that are not spaces.
Spaces may pile up anywhere in the string — leading, trailing, or between
words — but none of them belong to a word, and the string is guaranteed to
contain at least one.

### Example 1

```text
Input: s = "The lighthouse blinks at dawn"
Output: 4
Explanation: The rightmost word is "dawn", which spans 4 letters.
```

### Example 2

```text
Input: s = "   keep   it   rolling   "
Output: 7
Explanation: Trailing spaces are ignored, so the last word is "rolling"
with 7 letters.
```

### Example 3

```text
Input: s = "wonder"
Output: 6
Explanation: With a single word and no spaces at all, the whole string is
the answer.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` holds only English letters and the space character `' '`.
- `s` contains at least one word.

## Hints

### Hint 1

Start reading from the right edge — the word you need is the first thing
that isn't a space.

### Hint 2

Two leftward passes are enough: one to walk past the trailing spaces, one
to count letters until you hit a space or run off the start.
