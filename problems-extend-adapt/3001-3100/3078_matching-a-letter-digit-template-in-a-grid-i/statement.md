# Matching a Letter-Digit Template in a Grid I

## Description

You are given a 2D grid of digits `board` (every `board[r][c]` is between 0
and 9) and a 2D template `pattern`, whose every cell is either a digit or a
lowercase English letter. Locate a submatrix of `board` that fits the
template.

Call a submatrix of `board` a fit when its shape matches `pattern`'s and
the cells correspond under this reading of the template:

- a digit cell must sit above the very same digit;
- every cell above one particular letter must hold one common value, and
  cells above different letters must hold different values — in other
  words, the letters map one-to-one onto the values beneath them.

Return the `[row, column]` coordinates of the upper-left corner of a
fitting submatrix. When several submatrices fit, prefer the one with the
smallest row index, breaking any remaining tie by the smallest column
index. When nothing fits, return `[-1, -1]`.

### Example 1

```text
Input: board = [[1,4,6],[4,1,5],[2,7,3]], pattern = ["ab","ba"]
Output: [0,0]
Explanation: With the mapping "a" -> 1 and "b" -> 4, the submatrix at
corner (0,0) reads 1,4 / 4,1 — the a-cells all hold 1, the b-cells all
hold 4, mirroring the ab/ba template. It is the first candidate the
row-major scan reaches, so [0,0] is returned.
```

### Example 2

```text
Input: board = [[9,1,2],[3,7,4],[5,6,6]], pattern = ["ab","66"]
Output: [1,1]
Explanation: The literal 6s force the submatrix's bottom row onto the
grid's last row, so only corner (1,1) survives: its top row holds 7 and 4,
two different values for the different letters a and b ("a" -> 7,
"b" -> 4).
```

### Example 3

```text
Input: board = [[1,2],[3,4]], pattern = ["aa"]
Output: [-1,-1]
Explanation: The template "aa" demands two equal values side by side, but
every horizontal pair in this grid differs, so nothing fits.
```

### Constraints

- `1 <= board.length <= 50`
- `1 <= board[i].length <= 50`
- `0 <= board[i][j] <= 9`
- `1 <= pattern.length <= 50`
- `1 <= pattern[i].length <= 50`
- Every cell of `pattern` is a single digit or a single lowercase English
  letter.

## Hints

### Hint 1

Every upper-left corner is a candidate; an exhaustive scan over all of
them is small enough.

### Hint 2

Check a candidate with one pass that builds a letter-to-digit mapping as
it goes, and reject the corner the moment a cell contradicts the mapping
already built.
