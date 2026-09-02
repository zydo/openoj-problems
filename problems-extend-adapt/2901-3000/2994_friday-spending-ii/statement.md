# Friday Spending II

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
7th, week 2 the 8th through the 14th, and so on. This report is a complete
calendar: every one of the month's four Fridays gets a row, and a Friday
with no spending reports `0` instead of being dropped.

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
| 8          | 2023-11-02 | 460          |
| 2          | 2023-11-03 | 1200         |
| 5          | 2023-11-09 | 300          |
| 7          | 2023-11-17 | 95           |
| 4          | 2023-11-26 | 1500         |
| 9          | 2023-11-24 | 2050         |
+------------+------------+--------------+
Output:
+---------------+------------+--------------+
| week_of_month | spend_date | total_amount |
+---------------+------------+--------------+
| 1             | 2023-11-03 | 1200         |
| 2             | 2023-11-10 | 0            |
| 3             | 2023-11-17 | 95           |
| 4             | 2023-11-24 | 2050         |
+---------------+------------+--------------+
Explanation:
- Week 1's Friday, 2023-11-03, has the single purchase of 1200.
- Week 2's Friday, 2023-11-10, has no purchases at all, so the calendar
  still lists the week but reports 0.
- Week 3's Friday, 2023-11-17, has the single purchase of 95.
- Week 4's Friday, 2023-11-24, has the single purchase of 2050.
Output table is ordered by week_of_month in ascending order.
```

### Example 2

```text
Input:
SpendLog table:
+------------+------------+--------------+
| shopper_id | spend_date | spend_amount |
+------------+------------+--------------+
| 31         | 2023-11-01 | 88           |
| 32         | 2023-11-03 | 540          |
| 33         | 2023-11-03 | 210          |
| 34         | 2023-11-10 | 75           |
| 35         | 2023-11-13 | 260          |
| 36         | 2023-11-18 | 430          |
| 37         | 2023-11-24 | 1900         |
| 38         | 2023-11-29 | 615          |
| 39         | 2023-11-30 | 77           |
+------------+------------+--------------+
Output:
+---------------+------------+--------------+
| week_of_month | spend_date | total_amount |
+---------------+------------+--------------+
| 1             | 2023-11-03 | 750          |
| 2             | 2023-11-10 | 75           |
| 3             | 2023-11-17 | 0            |
| 4             | 2023-11-24 | 1900         |
+---------------+------------+--------------+
Explanation:
- Week 1's Friday, 2023-11-03, has two purchases (540 and 210) that sum to
  750.
- Week 3's Friday, 2023-11-17, has nothing, so it reports 0.
- Spending on other weekdays — 2023-11-01, 2023-11-13, 2023-11-18,
  2023-11-29, 2023-11-30 — never reaches the output.
Output table is ordered by week_of_month in ascending order.
```

Unlike a per-day total read straight off the table, this calendar must show
Fridays that have no rows at all — a Friday absent from `SpendLog` still
owed a `0` row, and the data alone cannot supply it. November 2023 holds
exactly four Fridays — the 3rd, 10th, 17th, and 24th — one per week of the
month, so ordering by `week_of_month` ascending never ties. Write your
solution as a single `SELECT` query returning three columns —
`week_of_month`, `spend_date`, and `total_amount`, in that order, with the
weeks ascending.

## Hints

### Hint 1

The missing Fridays are not in the data, so generate the calendar yourself:
a recursive CTE walking `DATE('2023-11-01')` forward with `DATE(d, '+1
day')` up to `2023-11-30` yields all thirty days of the month.

### Hint 2

Keep only the generated Fridays (`strftime('%w', d) = '5'` on the calendar
side, before any join) and `LEFT JOIN SpendLog` on the date, so
purchase-free Fridays survive as rows with nulls.

### Hint 3

`COALESCE(SUM(spend_amount), 0)` turns a Friday that matched no purchases
into the required `0`, and `(CAST(strftime('%d', d) AS INTEGER) + 6) / 7`
labels each Friday with its week of the month for the final ordering.
