# Adjacent Swaps To Split A Row

## Description

A row holds `n` stones in a line, and every stone is either dark or
light. The row is described by a binary string `s` of length `n`, where
`'1'` marks a dark stone and `'0'` a light one.

One move takes two neighboring stones and exchanges them.

Split the row: every light stone must end up left of every dark stone.
Return the smallest number of moves that achieves this.

### Example 1

```text
Input: s = "11010"
Output: 5
Explanation: Each dark stone must trade places with every light stone
sitting to its right: the first two dark stones each cross two light
stones, and the last one crosses one — five moves in total.
```

### Example 2

```text
Input: s = "0101"
Output: 1
Explanation: Swapping the middle two stones gives "0011", which is
fully split. Nothing else is out of place.
```

### Example 3

```text
Input: s = "000111"
Output: 0
Explanation: All light stones already sit to the left of all dark
stones, so no move is needed.
```

### Constraints

- `1 <= n == s.length <= 10^5`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

Same-colored stones never need to pass each other, so a move is useful
exactly when it swaps a dark stone with a light one on its right — and
each such pair swaps once.

### Hint 2

Sweep from the right while counting the light stones seen so far; each
time you meet a dark stone, add that count to the total.
