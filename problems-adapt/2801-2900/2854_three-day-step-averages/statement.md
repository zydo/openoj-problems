# Three-Day Step Averages

## Description

Table: `StepLog`

| Column Name | Type |
| ----------- | ---- |
| walker_id   | int  |
| day_steps   | int  |
| log_date    | date |

(`walker_id`, `log_date`) is the primary key for this table.
Each row of this table holds a walker's id, how many steps they walked
that day, and the date itself.

Write a query that computes 3-day rolling averages of the step counts,
one average per walker.

An n-day rolling average is defined this way:

For each day, average the step counts of the n consecutive days ending on
that day when all n of them exist in the table; if any of those days is
missing, the n-day rolling average is not defined for that day.

Output the walker's id, the date, and the rolling average, with the
average rounded to two decimal places.

Return the result table ordered by `walker_id`, then `log_date`, both in
ascending order.

Each testcase supplies its own `dataset`: the DDL seeds the `StepLog`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input:
StepLog table:
+-----------+-----------+------------+
| walker_id | day_steps | log_date   |
+-----------+-----------+------------+
| 4         | 500       | 2022-03-01 |
| 4         | 620       | 2022-03-02 |
| 4         | 580       | 2022-03-03 |
| 4         | 660       | 2022-03-04 |
| 4         | 700       | 2022-03-05 |
| 7         | 300       | 2022-03-02 |
| 7         | 420       | 2022-03-03 |
| 7         | 360       | 2022-03-04 |
| 9         | 250       | 2022-03-01 |
| 9         | 900       | 2022-03-04 |
+-----------+-----------+------------+

Output:
+-----------+------------+------------+
| walker_id | log_date   | mean_steps |
+-----------+------------+------------+
| 4         | 2022-03-03 | 566.67     |
| 4         | 2022-03-04 | 620        |
| 4         | 2022-03-05 | 646.67     |
| 7         | 2022-03-04 | 360        |
+-----------+------------+------------+

Explanation:
- For walker 4, the three consecutive days ending on 2022-03-03 all have
  rows, so the average is (500 + 620 + 580) / 3 = 566.67.
- For walker 4, the three consecutive days ending on 2022-03-04 all have
  rows, so the average is (620 + 580 + 660) / 3 = 620.
- For walker 4, the three consecutive days ending on 2022-03-05 all have
  rows, so the average is (580 + 660 + 700) / 3 = 646.67.
- For walker 7, the three consecutive days ending on 2022-03-04 all have
  rows, so the average is (300 + 420 + 360) / 3 = 360.
- Walker 9 has no day with both of the two preceding days present, and
  walker 4's earlier days (March 1 and 2) likewise lack a full window, so
  none of those dates appears in the output. The table is ordered by
  walker_id and then log_date, both ascending.
```

Write your solution as a single SELECT query returning one row per
qualifying day with three columns: `walker_id`, `log_date`, and
`mean_steps`. A day qualifies exactly when the same walker also has a row
on each of the two calendar days immediately before `log_date`, so a
window never crosses a missing day — "consecutive" means consecutive
calendar dates, and gaps or single-day holes simply leave those days out
of the output. The rolling average is the mean of the three step counts
rounded to two decimal places. Return the rows ordered by ascending
`walker_id`, then ascending `log_date`.
