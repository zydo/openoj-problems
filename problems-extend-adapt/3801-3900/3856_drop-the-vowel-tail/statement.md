# Drop the Vowel Tail

## Description

You are given a string `s` of lowercase English letters.

A vowel is one of the letters `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`. Peel
vowels off the end of `s` — as many as appear there consecutively — and
return whatever remains. A string that already ends in a consonant stays
untouched, and a string made entirely of vowels becomes empty.

### Example 1

```text
Input: s = "piano"
Output: "pian"
Explanation: The last letter `o` is a vowel and is removed; the next
letter from the right, `n`, is not, so the removal stops there.
```

### Example 2

```text
Input: s = "mosaic"
Output: "mosaic"
Explanation: The string ends in the consonant `c`, so nothing is removed.
```

### Example 3

```text
Input: s = "oui"
Output: ""
Explanation: Every letter is a vowel, so peeling the tail empties the
string.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Start at the last character and walk backwards for as long as the current
character is one of the five vowels; the untouched prefix up to that
stopping point is the answer.
