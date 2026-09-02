# Sort Each Column Its Own Way

## Description

Table: `Pairs`

| Column Name | Type |
| ----------- | ---- |
| left_value  | int  |
| right_value | int  |

Rows may repeat exactly.

Report every stored pair again, but with the two columns rearranged under
opposite rules: `left_value` must read top-to-bottom in ascending order,
while `right_value` must read top-to-bottom in descending order. The two
columns are handled independently — a row's original partner is thrown away,
and the k-th smallest `left_value` simply ends up beside the k-th largest
`right_value`.

### Example 1

```text
Input:
Pairs table:
+------------+-------------+
| left_value | right_value |
+------------+-------------+
| 6          | 3           |
| 1          | 8           |
| 6          | 3           |
| -2         | 4           |
+------------+-------------+
Output:
+------------+-------------+
| left_value | right_value |
+------------+-------------+
| -2         | 8           |
| 1          | 4           |
| 6          | 3           |
| 6          | 3           |
+------------+-------------+
```

The `left_value` column ascends (-2, 1, 6, 6) and the `right_value` column
descends (8, 4, 3, 3); nothing ties the two columns back to their original
rows.

### Example 2

```text
Input:
Pairs table:
+------------+-------------+
| left_value | right_value |
+------------+-------------+
| 0          | -1          |
| -5         | -1          |
| 9          | -7          |
+------------+-------------+
Output:
+------------+-------------+
| left_value | right_value |
+------------+-------------+
| -5         | -1          |
| 0          | -1          |
| 9          | -7          |
+------------+-------------+
```
