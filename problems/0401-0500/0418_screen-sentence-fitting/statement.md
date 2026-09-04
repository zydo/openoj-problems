# Screen Sentence Fitting

## Description

A screen with `rows` rows and `cols` columns must display a `sentence`, a
list of words, typed left to right and top to bottom. Words must keep their
relative order, no word may be split across lines or rows, and every pair of
words on the same line must have exactly one space between them.

Count how many complete passes over the sentence the screen can fit, given
that typing continues row after row and resumes the sentence where the
previous row stopped.

### Example 1

```text
Input: sentence = ["a","b","c"], rows = 3, cols = 5
Output: 3
```

### Example 2

```text
Input: sentence = ["hello","world"], rows = 2, cols = 10
Output: 1
```

### Constraints

- `1 <= sentence.length <= 100`
- `1 <= sentence[i].length <= 10`
- `sentence[i]` consists of lowercase English letters.
- `1 <= rows, cols <= 2 * 10⁴`
