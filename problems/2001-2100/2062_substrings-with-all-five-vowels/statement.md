# Substrings With All Five Vowels

## Description

A substring is any non-empty run of consecutive characters taken from a
string.

Call a substring _pan-vocalic_ when it is made up solely of the vowels
`'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and every one of those five letters
appears in it at least once.

Given a string `word`, count how many of its substrings are pan-vocalic.

### Example 1

```text
Input: word = "aeioua"
Output: 3
Explanation: The pan-vocalic substrings are:
- "aeiou" (the first five letters)
- "aeioua" (the whole string)
- "eioua" (dropping the leading a)
```

### Example 2

```text
Input: word = "sequoia"
Output: 0
Explanation: The longest vowel-only stretch is "uoia", which never
contains an 'e', so no substring collects all five vowels.
```

### Example 3

```text
Input: word = "uoeia"
Output: 1
Explanation: Exactly one substring — the entire string — contains all
five vowels.
```

### Constraints

- `word` holds between 1 and 100 lowercase English letters.

## Hints

### Hint 1

Fix a starting index and extend the substring letter by letter; once a
consonant appears, can any longer substring from that same start still
qualify?

### Hint 2

A five-bit mask (or letter counter) tracks which vowels have been seen,
letting each substring be judged in constant time.
