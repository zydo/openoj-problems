# Pixel Text Wrap

## Description

A lowercase letter's width in pixels is given by `widths`: `widths[0]`
is the width of `'a'`, `widths[1]` is the width of `'b'`, and so on.

Write the characters of `s` from left to right on lines that can hold at
most 100 pixels. Put each character on the current line whenever it fits;
otherwise start a new line with that character. Return `[lineCount,
lastLineWidth]`, where `lineCount` is the number of lines used and
`lastLineWidth` is the pixel width occupied on the final line.

### Example 1

```text
Input: widths = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], s = "abcdefghijklmnopqrstuvw"
Output: [2,15]
Explanation: The first 20 letters occupy 100 pixels, and the final three
letters occupy 15 pixels on a second line.
```

### Example 2

```text
Input: widths = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,10], s = "zzzzzzzzzzz"
Output: [2,10]
```

### Constraints

- `widths.length == 26`
- `2 <= widths[i] <= 10`
- `1 <= s.length <= 1000`
- `s` contains only lowercase English letters.
