# Nearest Pair in the Plane

## Description

Table: `GridPoints`

| Column Name | Type |
| ----------- | ---- |
| horizontal  | int  |
| vertical    | int  |

The pair `(horizontal, vertical)` is unique and identifies one point on a
two-dimensional plane.

Find the smallest Euclidean distance between any two points. Return one row
with the numeric column `nearest_distance`, rounded to two decimal places.
Every dataset contains at least two points.

### Example 1

```text
Input: GridPoints
horizontal  vertical
-4          2
2           8
-3          2
6           -1

Output:
nearest_distance
1.0
```

The points `(-4, 2)` and `(-3, 2)` are one unit apart, which is smaller than
every other pairwise distance.

Write one `SELECT` query returning the rounded minimum distance.

### Constraints

- Each coordinate is an integer.
- No two rows describe the same point.
- There are at least two points.

## Hints

### Hint 1

Self-join the table using a strict lexicographic coordinate ordering so every
unordered pair appears once.

### Hint 2

Compute squared coordinate differences, take `SQRT`, reduce with `MIN`, and
round the final value to two decimal places.
