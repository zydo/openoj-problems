# Rectangle Ratio Pairs

## Description

Each row of the given array `rectangles` is a two-entry list
`[width, height]` describing one rectangle. Rows `i` and `j` with `i < j`
are a matching pair when one rectangle is a scaled copy of the other — that
is, `width_i / height_i` and `width_j / height_j` compare equal as real
numbers. An integer-truncated comparison does not decide the match.

Count the matching pairs among the given rectangles.

### Example 1

```text
Input: rectangles = [[6,10],[3,5],[12,20],[7,4],[14,8]]
Output: 4
Explanation: Rows 0, 1 and 2 all reduce to the ratio 3/5, giving three
pairs; rows 3 and 4 both reduce to 7/4, giving one more.
```

### Example 2

```text
Input: rectangles = [[9,14],[4,7],[2,3]]
Output: 0
Explanation: The ratios 9/14, 4/7 and 2/3 are pairwise different, so no two
rows match.
```

### Example 3

```text
Input: rectangles = [[5,2]]
Output: 0
Explanation: One rectangle alone forms no pair.
```

### Constraints

- `1 <= rectangles.length <= 10⁵`
- `rectangles[i].length == 2`
- `1 <= width, height <= 10⁵`

## Hints

### Hint 1

Divide each rectangle's two sides by their greatest common divisor; two
rectangles match exactly when the reduced side pairs are identical.

### Hint 2

Make one pass with a map from reduced ratio to how many rectangles have been
seen with it: add the stored count for the current ratio, then record the
new rectangle under it.
