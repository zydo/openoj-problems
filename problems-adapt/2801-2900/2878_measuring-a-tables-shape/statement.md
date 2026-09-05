# Measuring A Table's Shape

## Description

Tables:

`RowLog`

| Column Name | Type |
| ----------- | ---- |
| row_no      | int  |

`ColumnLog`

| Column Name | Type |
| ----------- | ---- |
| col_no      | int  |
| col_label   | text |

Each testcase supplies its own `dataset`: the script seeds these two
tables before your query runs. Together they describe one data table's
shape. `ColumnLog` holds one row per column of that data table, with the
column's 1-based position in `col_no` and its label in `col_label`;
`RowLog` holds one row per row of the data table, with the row's 1-based
position in `row_no`.

Report the shape of the data table: return exactly one row of two
columns — the number of data rows first, then the number of data
columns.

The result format is in the following examples.

### Example 1

```text
Input:
RowLog table:
+--------+
| row_no |
+--------+
| 1      |
| 2      |
| 3      |
| 4      |
+--------+
ColumnLog table:
+--------+-----------+
| col_no | col_label |
+--------+-----------+
| 1      | city      |
| 2      | month     |
| 3      | rainfall  |
+--------+-----------+
Output:
+----------------+-------------------+
| number_of_rows | number_of_columns |
+----------------+-------------------+
| 4              | 3                 |
+----------------+-------------------+
Explanation:
The data table has 4 rows — one per `RowLog` entry — and 3 columns —
one per `ColumnLog` entry.
```

### Example 2

```text
Input:
RowLog table:
+--------+
| row_no |
+--------+
+--------+
ColumnLog table:
+--------+-----------+
| col_no | col_label |
+--------+-----------+
| 1      | plate     |
| 2      | vendor    |
| 3      | crates    |
| 4      | net_kg    |
+--------+-----------+
Output:
+----------------+-------------------+
| number_of_rows | number_of_columns |
+----------------+-------------------+
| 0              | 4                 |
+----------------+-------------------+
Explanation:
`RowLog` is empty — the data table has no rows at all — yet the shape
still has both dimensions: 0 rows and 4 columns, still reported as one
row.
```

Write your solution as a single `SELECT` query returning exactly one row
of two columns — the number of data rows, then the number of data
columns — whatever that shape turns out to be, including a shape with
zero rows.

## Hints

### Hint 1

Both dimensions are plain row counts of the seeded tables, so each is a
`COUNT(*)`: one over `RowLog`, one over `ColumnLog`. To set the two
counts side by side in a single row, compute each in its own aggregate
query — an aggregate without `GROUP BY` always produces exactly one row,
even when it counts an empty table — and cross join the two.
