# Vowels Per Consonant

## Description

A string `s` is built from lowercase English letters, spaces, and
digits.

Count its letters: `v` is how many of the characters are vowels — one
of `'a'`, `'e'`, `'i'`, `'o'`, `'u'` — and `c` is how many are any of
the remaining lowercase letters. Spaces and digits count toward
neither.

Rate the string by how vowel-rich it is:

- When at least one consonant is present, the rating is
  `floor(v / c)`, the vowel count divided by the consonant count and
  rounded down.
- With no consonant anywhere, the rating is `0`.

Return that rating.

### Example 1

```text
Input: s = "a good idea"
Output: 2
Explanation: The vowels are 'a', 'o', 'o', 'i', 'e', 'a' — six of
them — while 'g', 'd', and 'd' are the three consonants. The rating
is floor(6 / 3) = 2.
```

### Example 2

```text
Input: s = "open door 9"
Output: 1
Explanation: Four vowels ('o', 'e', 'o', 'o') face four consonants
('p', 'n', 'd', 'r'), and the digit is ignored. The rating is
floor(4 / 4) = 1.
```

### Example 3

```text
Input: s = "ea 105"
Output: 0
Explanation: Besides the two vowels, the string holds only a space and
digits, so there is no consonant to divide by and the rating is 0.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters, spaces and digits.

## Hints

### Hint 1

Walk the string once and keep two counters: one that grows on each of
the five vowels, one that grows on any other lowercase letter.

### Hint 2

Characters that are neither a lowercase letter nor a vowel — spaces
and digits — leave both counters untouched.

### Hint 3

The answer is integer division of the two counters, watching for the
consonant counter being zero.
