# Largest Displayable Font Size

## Description

A sentence `text` must be shown on a screen `w` pixels wide and `h`
pixels tall, on a single line. Among the candidate sizes listed in
`fonts`, which arrive in strictly ascending order, you want the biggest
one the sentence still fits in.

How much room a size consumes is described by two lookup tables:
`widths[i][c]` is the horizontal space the letter `'a' + c` occupies
when drawn at size `fonts[i]`, and `heights[i]` is the height of the
text line at that size. The sentence's width at size `fonts[i]` is the
sum of its characters' widths taken from row `i`, and its height is
`heights[i]`. A size **fits** when that width is at most `w` and that
height is at most `h`. Listing the tables as plain data spells out
everything a live per-character metrics service could answer — each
answer is fixed in advance, so the two forms are interchangeable.

Both tables are **monotonic** along the font list: each letter is at
least as wide at `fonts[i + 1]` as at `fonts[i]`, and
`heights[i + 1] >= heights[i]`. Enlarging the font never shrinks the
rendering, so as soon as one size stops fitting, every larger size
fails too.

Return the largest entry of `fonts` that fits. If even the smallest
entry does not fit, return `-1`.

### Example 1

```text
Input:
  text = "abc"
  w = 9, h = 20
  fonts = [10, 20]
  widths = [[3,5,1] + [2]*23, [7,11,2] + [5]*23]
  heights = [12, 26]
Output: 10
Explanation: At size 10 the sentence measures 3 + 5 + 1 = 9 pixels
  wide and 12 tall, so it fits. At size 20 it measures 7 + 11 + 2 =
  20 pixels wide, past the 9-pixel budget, so it fails. The largest
  fitting size is 10.
```

### Example 2

```text
Input:
  text = "code"
  w = 30, h = 25
  fonts = [4, 8, 14]
  widths = [[2]*26, [4]*26, [8]*26]   (one shared width per letter)
  heights = [3, 6, 11]
Output: 8
Explanation: Sizes 4 and 8 render at widths 8 and 16 and heights 3
  and 6, all within the screen. Size 14 would need 4 * 8 = 32 pixels
  of width, more than the 30 available.
```

### Example 3

```text
Input:
  text = "zz"
  w = 15, h = 100
  fonts = [2, 4, 6]
  widths = [[3]*26, [7]*26, [12]*26]
  heights = [5, 9, 15]
Output: 4
Explanation: Size 6 needs 2 * 12 = 24 pixels of width, over the 15
  allowed. Size 4 needs only 14, and its height 9 is fine, so 4 is
  the answer.
```

### Example 4

```text
Input:
  text = "a"
  w = 1, h = 1
  fonts = [3]
  widths = [[2]*26]
  heights = [4]
Output: -1
Explanation: The only candidate already needs 2 pixels of width and
  4 of height, so no size fits.
```

### Constraints

- `1 <= text.length <= 2000`
- `text` contains only lowercase English letters.
- `1 <= w <= 20000`
- `1 <= h <= 2000`
- `1 <= fonts.length <= 500`
- `fonts` is strictly ascending and has no duplicates.
- `1 <= fonts[i] <= 100000`
- `widths.length == fonts.length`, and each `widths[i]` holds exactly
  26 entries.
- `1 <= widths[i][c] <= 1000`
- `heights.length == fonts.length`
- `1 <= heights[i] <= 1000`
- For every `0 <= i < fonts.length - 1` and every `0 <= c <= 25`:
  `widths[i][c] <= widths[i + 1][c]` and
  `heights[i] <= heights[i + 1]`.

## Hints

### Hint 1

Fitting is monotone along the font list — a failing size condemns
every larger one — so the answer sits at a boundary that can be
searched for rather than scanned for.

### Hint 2

Binary search over positions in `fonts`. Testing one position is a
single pass over `text` that adds up widths from that position's row,
plus one height lookup.
