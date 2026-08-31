# Abbreviation Match Check

## Description

A word may be abbreviated by replacing some of its substrings — non-empty,
non-adjacent runs of characters — with the digit string of their lengths. A
length may not have a leading zero.

For example, `"substitution"` may be abbreviated as `"sub4u4"` (the middle
`"stit"` and `"tio"` become `4` and `4`), as `"s10n"`, or as `"12"` (the whole
word skipped). Abbreviations like `"s55n"` (two adjacent replacements fused)
and `"s010n"` (leading zero) are invalid.

Given `word` and an abbreviation `abbr`, decide whether `abbr` is a valid
abbreviation of `word`.

### Example 1

```text
Input: word = "substitution", abbr = "sub4u4"
Output: true
```

### Example 2

```text
Input: word = "substitution", abbr = "s55n"
Output: false
Explanation: This reads as a single 55-character skip, which overruns the
word.
```

### Example 3

```text
Input: word = "word", abbr = "w0rd"
Output: false
Explanation: A skip may not start with 0.
```

### Constraints

- `1 <= word.length <= 20`
- `word` consists of only lowercase English letters.
- `1 <= abbr.length <= 10`
- `abbr` consists of lowercase English letters and digits.
- All integers written in `abbr` fit in a 32-bit integer.
