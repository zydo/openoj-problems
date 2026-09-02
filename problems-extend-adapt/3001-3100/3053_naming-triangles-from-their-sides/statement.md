# Naming Triangles From Their Sides

## Description

Table: `SideLengths`

| Column Name | Type |
| ----------- | ---- |
| side1       | int  |
| side2       | int  |
| side3       | int  |

`(side1, side2, side3)` is the primary key for this table.
Each row holds the lengths of a candidate triangle's three sides; the
columns are positional and carry no ordering of their own.

Classify each row by comparing its side lengths. Output one of the
following for every row:

- `Equilateral`: all three sides have the same length.
- `Isosceles`: exactly two of the sides share a length.
- `Scalene`: all three lengths differ.
- `Not A Triangle`: the three lengths cannot form a triangle at all.

Return the result table in any order.

Every test case ships its own `dataset`: the statements inside it
populate `SideLengths` before your query executes. The result format
is in the following example.

### Example 1

```text
Input:
SideLengths table:
+-------+-------+-------+
| side1 | side2 | side3 |
+-------+-------+-------+
| 3     | 4     | 5     |
| 6     | 6     | 6     |
| 8     | 12    | 8     |
| 5     | 5     | 10    |
| 1     | 2     | 9     |
+-------+-------+-------+
Output:
triangle_type
Scalene
Equilateral
Isosceles
Not A Triangle
Not A Triangle
Explanation: 3, 4, 5 are all different, so the first row is Scalene.
The second row's three equal lengths make it Equilateral, and the
third row's two 8s make it Isosceles. The last two rows fail the
triangle inequality: 5 + 5 equals the remaining side 10 exactly, and
1 + 2 never reaches 9, so neither pair of lengths closes into a
triangle.
```

Write your solution as a single `SELECT` query returning one column —
`triangle_type` — with one row for every row in the `SideLengths`
table.

## Hints

### Hint 1

Before any equality counting, a row must pass the triangle inequality:
every pair of sides must sum to strictly more than the remaining one.
A single failing pair — usually the two shorter sides against the
longest — makes the row `Not A Triangle`, whatever its equalities look
like.

### Hint 2

Order a `CASE` so validity is decided first, then let the equality
pattern name the triangle: `side1 = side2 AND side2 = side3` yields
`Equilateral`, any single pair equal yields `Isosceles`, and all three
lengths differing falls through to `Scalene`.

### Hint 3

The comparisons are strict on purpose: a row whose two sides sum to
exactly the third collapses onto a straight line and reads
`Not A Triangle` even when two of its sides are equal, and a zero or
negative side fails the same three comparisons without a special case.
No `ORDER BY` is needed: the judge compares result rows as an
unordered multiset.
