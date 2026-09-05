# Segment Triangle Check

## Description

Table: `SegmentSets`

| Column Name | Type |
| ----------- | ---- |
| side_a      | int  |
| side_b      | int  |
| side_c      | int  |

Each row contains the lengths of three segments. The combination of all
three side columns is unique.

For every row, determine whether the three segments can form a nondegenerate
triangle. Return `side_a`, `side_b`, `side_c`, and `forms_triangle`, whose
value is `Yes` or `No`. Result order does not matter.

### Example 1

```text
Input: SegmentSets
side_a  side_b  side_c
5       5       9
2       3       5
7       10      12

Output:
side_a  side_b  side_c  forms_triangle
5       5       9       Yes
2       3       5       No
7       10      12      Yes
```

The second row is degenerate because 2 + 3 equals 5. In the other two rows,
every pair of segments is longer than the remaining segment.

Write one `SELECT` query returning one verdict per input row.

### Constraints

- A valid triangle requires every pairwise sum to be strictly greater than
  the remaining side.

## Hints

### Hint 1

Use a `CASE` expression for the verdict.

### Hint 2

Test all three pairwise inequalities. Equality must produce `No`.
