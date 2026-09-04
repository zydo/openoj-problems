# Flipping Words That Share the Vowel Count

## Description

A sentence `s` is given as lowercase English words separated by single
spaces, with nothing extra before the first word or after the last.

Take the sentence's opening word and count its vowels — the letters `a`,
`e`, `i`, `o`, and `u`. That count is the benchmark for the rest of the
sentence: every word after the first whose own vowel count equals the
benchmark is written backwards, and every other word stays exactly as it
was.

Return the sentence after these flips. Word order and spacing are never
disturbed; individual words are either reversed or left alone.

### Example 1

```text
Input: s = "read a book tonight"
Output: "read a koob thginot"
Explanation: The opening word "read" holds 2 vowels. "a" has only 1, so
it stays. Both "book" and "tonight" hold 2 as well, so they are flipped
to "koob" and "thginot".
```

### Example 2

```text
Input: s = "sky is blue"
Output: "sky is blue"
Explanation: The opening word "sky" has no vowels at all. Neither "is"
(1 vowel) nor "blue" (2 vowels) matches that count of 0, so the sentence
comes back untouched.
```

### Example 3

```text
Input: s = "ab ba ab"
Output: "ab ab ba"
Explanation: The opening word "ab" has 1 vowel, and both later words
match it, so each is reversed in place.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters and spaces.
- Words in `s` are separated by a single space.
- `s` has no leading or trailing spaces.

## Hints

### Hint 1

Break the sentence into its words once; the first word only supplies the
target count, and each later word needs one vowel tally to decide its
fate.
