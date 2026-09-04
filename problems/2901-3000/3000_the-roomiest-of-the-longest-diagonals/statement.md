# The Roomiest Of The Longest Diagonals

## Description

You are given a 0-indexed 2D integer array `dimensions`, where
`dimensions[i] = [length, width]` describes rectangle `i`.

Among all the rectangles, find the one whose diagonal
`sqrt(length² + width²)` is longest, and return its area. If several
rectangles share that longest diagonal, return the largest area among
them.

### Example 1

```text
Input: dimensions = [[12,5],[6,8],[7,7]]
Output: 60
Explanation: The squared diagonals are 12² + 5² = 169, 6² + 8² = 100,
and 7² + 7² = 98. The first rectangle owns the longest diagonal
(sqrt(169) = 13), so its area 12 x 5 = 60 is returned.
```

### Example 2

```text
Input: dimensions = [[4,3],[6,6],[8,1]]
Output: 36
Explanation: The squared diagonals are 25, 72, and 65, so the square
6 x 6 carries the longest diagonal and the answer is its area, 36.
```

### Example 3

```text
Input: dimensions = [[5,5],[1,7],[7,1]]
Output: 25
Explanation: All three rectangles share the same squared diagonal, 50,
so the tie is broken by area: 25, 7, and 7 — the 5 x 5 square wins.
```

### Constraints

- `1 <= dimensions.length <= 100`
- `dimensions[i].length == 2`
- `1 <= dimensions[i][0], dimensions[i][1] <= 100`

## Hints

### Hint 1

The square root never needs to be taken: `sqrt` is increasing, so
comparing `length² + width²` ranks diagonals exactly, in pure integers.

### Hint 2

Sweep the list once, keeping the best `(diagonal², area)` pair seen so
far and replacing it on any strictly better key.
