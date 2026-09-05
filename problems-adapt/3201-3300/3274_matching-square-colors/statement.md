# Matching Square Colors

## Description

![diagram](figures/3274-1.svg)

Two coordinates `coordinate1` and `coordinate2` name squares of a
standard 8 x 8 chessboard. The board follows the usual alternating
paint: `"a1"` is black, and stepping to any adjacent square flips the
color — a square turns out black exactly when its column letter (with
`a` counting as 1 through `h` as 8) plus its row number sums to an even
value, and white otherwise.

Decide whether the two named squares wear the same color.

Each coordinate is a valid square, written with the column letter first
and the row number second.

### Example 1

```text
Input: coordinate1 = "b4", coordinate2 = "d6"
Output: true
Explanation: Both squares land on even column-plus-row sums, so both
are black.
```

### Example 2

```text
Input: coordinate1 = "g7", coordinate2 = "c2"
Output: false
Explanation: Square "g7" is black while "c2" is white.
```

### Example 3

```text
Input: coordinate1 = "e5", coordinate2 = "a1"
Output: true
Explanation: Both squares are black.
```

### Constraints

- `coordinate1.length == coordinate2.length == 2`
- `'a' <= coordinate1[0], coordinate2[0] <= 'h'`
- `'1' <= coordinate1[1], coordinate2[1] <= '8'`

## Hints

### Hint 1

Color is a parity question: adding the column's letter index and the row
number classifies the square, and only the parity of each sum matters.

### Hint 2

Character codes differ between the two squares' letters by even
offsets, so comparing `(letter + digit) % 2` for both coordinates
directly answers the question.
