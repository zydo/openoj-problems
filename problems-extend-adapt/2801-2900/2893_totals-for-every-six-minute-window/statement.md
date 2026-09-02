# Totals For Every Six-Minute Window

## Description

Table: `MinuteCounts`

| Column Name   | Type |
| ------------- | ---- |
| minute_no     | int  |
| orders_placed | int  |

`minute_no` is the primary key of this table.
Each row of this table holds the number of orders received during that
specific minute. The total number of rows will be a multiple of 6.

Write a query that totals the orders into windows: each window is a
run of 6 consecutive minutes, with minutes 1 to 6 forming window 1,
minutes 7 to 12 forming window 2, and so on.

Return the result table ordered by `window_no` in ascending order.

Each testcase supplies its own `dataset`: the script seeds the
`MinuteCounts` table with that testcase's rows before your query runs.

The result format is in the following example.

### Example 1

```text
Input:
MinuteCounts table:
+-----------+---------------+
| minute_no | orders_placed |
+-----------+---------------+
| 1         | 5             |
| 2         | 0             |
| 3         | 3             |
| 4         | 7             |
| 5         | 2             |
| 6         | 9             |
| 7         | 4             |
| 8         | 1             |
| 9         | 6             |
| 10        | 0             |
| 11        | 8             |
| 12        | 3             |
+-----------+---------------+
Output:
+-----------+--------------+
| window_no | window_total |
+-----------+--------------+
| 1         | 26           |
| 2         | 22           |
+-----------+--------------+
Explanation:
- Window 1 covers minutes 1 to 6: the total orders in those six
minutes are (5 + 0 + 3 + 7 + 2 + 9) = 26.
- Window 2 covers minutes 7 to 12: the total orders in those six
minutes are (4 + 1 + 6 + 0 + 8 + 3) = 22.
```

Write your solution as a single `SELECT` query returning exactly two
columns, `window_no` then `window_total`: one row per window, in
ascending `window_no` order.

## Hints

### Hint 1

Because minutes are 1-based, minute `m` falls in window `(m - 1) / 6 +
1`: integer division by 6 maps minutes 1-6 to window 1, minutes 7-12
to window 2, and so on. Compute that window number per row and
`GROUP BY` it — every output column is a function of that one key.
