# Strip the Vowels

## Description

You are given a lowercase string `s`. Delete every occurrence of the five
vowel letters — `'a'`, `'e'`, `'i'`, `'o'`, and `'u'` — while leaving all
other characters in their original order, and return what remains.

### Example 1

```text
Input: s = "violence"
Output: "vlnc"
```

### Example 2

```text
Input: s = "rhythm"
Output: "rhythm"
```

Nothing is removed here: the letter `'y'` is not one of the five vowels,
so the word survives intact.

### Example 3

```text
Input: s = "sequoia"
Output: "sq"
```

Only the two consonants outlast the sweep.

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Walk the string once and decide each character's fate independently.

### Hint 2

Membership in a five-element vowel set is a constant-time test; copy a
character into the answer only when it fails the test.
