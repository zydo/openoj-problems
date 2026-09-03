# Digit Runs In Threes

## Description

Table: `Skus`

| Column Name | Type    |
| ----------- | ------- |
| sku_id      | int     |
| label       | varchar |

`sku_id` is the unique key for this table.
Each row describes one stock unit in a warehouse catalog: `sku_id` is
its identifier and `label` is the free-form text printed on the shelf
tag.

A label's digit runs are its maximal stretches of consecutive digits —
stretches that a neighboring non-digit cannot extend. Write a query that
returns every SKU whose label contains at least one digit run, and in
which every digit run is exactly three digits long. A label with no
digits at all never qualifies, and neither does one carrying any run of
length one, two, or four-or-more — even if it also has a run of three.

Return the result ordered by `sku_id` in ascending order.

The result format is in the following example.

### Example 1

```text
Input:
Skus table:
+--------+---------------+
| sku_id | label         |
+--------+---------------+
| 11     | Desk447Lamp   |
| 12     | ModelX9       |
| 13     | Cab-808-Only  |
| 14     | Batch2024Rev  |
| 15     | 741           |
| 16     | Line66Zone8   |
| 17     | Zone331End    |
+--------+---------------+
Output:
+--------+---------------+
| sku_id | label         |
+--------+---------------+
| 11     | Desk447Lamp   |
| 13     | Cab-808-Only  |
| 15     | 741           |
| 17     | Zone331End    |
+--------+---------------+
Explanation: Desk447Lamp has the single run 447, Cab-808-Only has 808,
741 is one run spanning the whole label, and Zone331End has 331 — each
run is exactly three digits, so all four qualify. ModelX9 carries a
one-digit run, Batch2024Rev carries the four-digit run 2024, and
Line66Zone8 carries runs of two digits and one digit, so all three are
excluded. Rows are ordered by sku_id.
```

Write your solution as a single `SELECT` query returning the `sku_id`
and `label` of every qualifying SKU, ordered by `sku_id` in ascending
order. A label qualifies when it contains at least one maximal run of
digits and every maximal run of digits in it has length exactly three —
so `447x808y` qualifies while `447x8088y`, `4x808`, and `Batch2024Rev`
do not. Each testcase supplies its own `dataset`: the script seeds the
`Skus` table before your query runs.
