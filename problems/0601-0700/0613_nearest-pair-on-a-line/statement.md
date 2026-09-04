# Nearest Pair on a Line

## Description

Table: `AxisPoints`

| Column Name | Type |
| ----------- | ---- |
| coordinate  | int  |

`coordinate` is unique. Each row represents one point on a number line.

Return the minimum distance between any two points as the single column
`nearest_distance`. Every dataset contains at least two points.

### Example 1

```text
Input: AxisPoints
coordinate
-10
-4
3
7

Output:
nearest_distance
4
```

The closest pair is at coordinates 3 and 7, separated by four units.

Write one `SELECT` query returning exactly one row.

### Constraints

- All coordinates are distinct integers.
- Each dataset contains at least two points.

## Hints

### Hint 1

A pair's distance is the absolute difference of its coordinates.

### Hint 2

A self-join can keep only pairs with the larger coordinate on the left, so
the subtraction is already positive before applying `MIN`.
