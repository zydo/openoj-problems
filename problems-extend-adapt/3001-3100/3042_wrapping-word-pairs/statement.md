# Wrapping Word Pairs

## Description

Say that a word `a` wraps a word `b` when `a` caps both ends of `b`: it is a
prefix of `b` and, reading the same characters from the far end, its suffix
too. For instance, `aba` wraps `ababa`, because the longer word both starts
and ends with `aba`; `abc` does not wrap `abcd`, since it opens the longer
word but fails to close it.

Given a 0-indexed array of words, count the index pairs `(i, j)` with `i < j`
such that `words[i]` wraps `words[j]`.

### Example 1

```text
Input: words = ["ab","abab","ba","ababab"]
Output: 3
Explanation: The counted pairs are:
i = 0 and j = 1, because "ab" wraps "abab".
i = 0 and j = 3, because "ab" wraps "ababab".
i = 1 and j = 3, because "abab" wraps "ababab".
The remaining pairs fail the check, so the answer is 3.
```

### Example 2

```text
Input: words = ["xy","yx","xyxy"]
Output: 1
Explanation: Only the pair i = 0 and j = 2 survives: "xyxy" both starts and
ends with "xy". "xy" does not wrap "yx", and "yx" fails both ends of
"xyxy", so the answer is 1.
```

### Example 3

```text
Input: words = ["caa","caa","caac"]
Output: 1
Explanation: The equal words at i = 0 and j = 1 count — a word is a prefix
and a suffix of itself. "caa" opens "caac" but does not close it, so no
other pair qualifies.
```

### Constraints

- `1 <= words.length <= 50`
- `1 <= words[i].length <= 10`
- Every word consists solely of lowercase English letters.

## Hints

### Hint 1

There are at most fifty words, so simply walk every index pair `(i, j)` with
`i < j` and test each one in turn.

### Hint 2

`words[i]` wraps `words[j]` exactly when `words[i]` is no longer than
`words[j]` and the first and last `words[i].length` characters of
`words[j]` both spell out `words[i]`.
