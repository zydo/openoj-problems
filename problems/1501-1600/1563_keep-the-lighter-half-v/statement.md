# Keep the Lighter Half V

## Description

A row of stones sits on a table; `stoneValue[i]` is the worth of the
`i`-th stone. Alice plays round after round against one fixed rule:

- She cuts the current row into a left part and a right part, both
  non-empty and contiguous.
- The two parts are weighed. The heavier part is thrown away, and
  Alice's score grows by the weight of the part that survives.
- If the parts weigh the same, Alice chooses which one is thrown away —
  either choice adds that shared weight to her score, but which part
  survives changes what is left to score in later rounds.

The surviving part becomes the row for the next round, and play stops
once a single stone remains (a one-stone row cannot be cut). Alice's
score starts at zero.

Return the largest total score Alice can earn by choosing every cut —
and every tie-break — optimally.

### Example 1

```text
Input: stoneValue = [3,1,4,1,5]
Output: 7
Explanation: Cut [3,1,4,1,5] into [3,1,4] (weight 8) and [1,5] (weight
6); the heavier left part is discarded and Alice scores 6, leaving the
row [1,5]. Cutting that row into [1] and [5] discards the heavier right
part, scoring 1 more — 7 in all. The single stone [1] remains and the
game ends.
```

### Example 2

```text
Input: stoneValue = [8,3,4,6]
Output: 14
Explanation: Cut [8,3,4,6] into [8,3] (weight 11) and [4,6] (weight 10);
keeping the lighter right part scores 10. The row [4,6] then splits into
[4] and [6]; the left part survives this time, adding 4 — 14 in all.
```

### Example 3

```text
Input: stoneValue = [9,1,2]
Output: 4
```

### Constraints

- `1 <= stoneValue.length <= 500`
- `1 <= stoneValue[i] <= 10⁶`

## Hints

### Hint 1

Every row the game can ever reach is a contiguous slice of the original
row, so think about computing the best continuing score for each possible
slice on its own.

### Hint 2

A slice's weight is one prefix-sum subtraction away, and the best score
from a slice depends only on the slice itself — record it once instead of
re-deriving it inside every larger row.
