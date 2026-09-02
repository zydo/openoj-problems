# Friday Spending I

## Description

Table: `SpendLog`

| Column Name  | Type |
| ------------ | ---- |
| shopper_id   | int  |
| spend_date   | date |
| spend_amount | int  |

(`shopper_id`, `spend_date`, `spend_amount`) is the primary key (combination
of columns with unique values) for this table. `spend_date` falls between
November 1, 2023 and November 30, 2023, both included. Each row records one
shopper's spending on one day.

Report how much was spent on each Friday of November 2023, labeled with the
week of the month that Friday belongs to: week 1 covers the 1st through the
7th, week 2 the 8th through the 14th, and so on. A week whose Friday has no
spending at all does not appear in the report.

Return the result table ordered by week of month in ascending order.

Each testcase carries its own `dataset`: the DDL creates the `SpendLog`
table and loads it with that testcase's rows before your query runs. The
result format is shown in the examples below.

### Example 1

```text
Input:
SpendLog table:
+------------+------------+--------------+
| shopper_id | spend_date | spend_amount |
+------------+------------+--------------+
| 4          | 2023-11-01 | 320          |
| 9          | 2023-11-03 | 1500         |
| 2          | 2023-11-03 | 275          |
| 7          | 2023-11-14 | 980          |
| 5          | 2023-11-17 | 4200         |
| 11         | 2023-11-24 | 60           |
| 6          | 2023-11-25 | 880          |
| 3          | 2023-11-29 | 150          |
+------------+------------+--------------+
Output:
+---------------+------------+--------------+
| week_of_month | spend_date | total_amount |
+---------------+------------+--------------+
| 1             | 2023-11-03 | 1775         |
| 3             | 2023-11-17 | 4200         |
| 4             | 2023-11-24 | 60           |
+---------------+------------+--------------+
Explanation:
- Week 1's Friday is 2023-11-03: shoppers 9 and 2 spent 1500 and 275 that
  day, a total of 1775.
- Week 2's Friday is 2023-11-10, and no row in the table carries that date,
  so week 2 is skipped.
- Week 3's Friday is 2023-11-17, with the single purchase of 4200.
- Week 4's Friday is 2023-11-24, with the single purchase of 60.
Output table is ordered by week_of_month in ascending order.
```

### Example 2

```text
Input:
SpendLog table:
+------------+------------+--------------+
| shopper_id | spend_date | spend_amount |
+------------+------------+--------------+
| 21         | 2023-11-01 | 725          |
| 22         | 2023-11-03 | 140          |
| 23         | 2023-11-08 | 300          |
| 24         | 2023-11-10 | 2210         |
| 25         | 2023-11-15 | 95           |
| 26         | 2023-11-17 | 640          |
| 27         | 2023-11-17 | 1605         |
| 28         | 2023-11-23 | 875          |
| 29         | 2023-11-24 | 3330         |
| 30         | 2023-11-30 | 410          |
+------------+------------+--------------+
Output:
+---------------+------------+--------------+
| week_of_month | spend_date | total_amount |
+---------------+------------+--------------+
| 1             | 2023-11-03 | 140          |
| 2             | 2023-11-10 | 2210         |
| 3             | 2023-11-17 | 2245         |
| 4             | 2023-11-24 | 3330         |
+---------------+------------+--------------+
Explanation:
- All four Fridays of the month carry spending, so all four weeks appear.
- Week 3's Friday, 2023-11-17, has two purchases (640 and 1605) that sum to
  2245.
- Rows dated on other weekdays, such as 2023-11-01 or 2023-11-30, never
  reach the output.
Output table is ordered by week_of_month in ascending order.
```

November 2023 holds exactly four Fridays — the 3rd, 10th, 17th, and 24th —
and each one lands in a different week of the month, so a week number never
repeats in the output and ordering by `week_of_month` ascending never ties.
Only the four Friday dates themselves can produce rows; spending on any
other weekday is ignored. Write your solution as a single `SELECT` query
returning three columns — `week_of_month`, `spend_date`, and
`total_amount`, in that order.

## Hints

### Hint 1

Filter to Fridays before anything else: in SQLite
`strftime('%w', spend_date)` returns the weekday with Sunday = 0, so Friday
is `'5'`.

### Hint 2

One output row per spending Friday: `GROUP BY spend_date` with
`SUM(spend_amount)` totals the day, and a Friday without spending forms no
group because its rows were filtered away — which is exactly the rule that
empty weeks stay out of the report.

### Hint 3

Derive `week_of_month` from the day of the month:
`CAST(strftime('%d', spend_date) AS INTEGER)` is the day, and the integer
expression `(day + 6) / 7` is its ceiling over sevens — November's Fridays
(3, 10, 17, 24) map to weeks 1, 2, 3, 4.
