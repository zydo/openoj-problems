# Same-Day Dispatch Rate

## Description

Table: `Dispatches`

| Column Name | Type |
| ----------- | ---- |
| dispatch_id | int  |
| client_id   | int  |
| placed_on   | date |
| wanted_on   | date |

`dispatch_id` is the column with unique values of this table. Every row is
one order a client placed: it was placed on `placed_on`, and the client
asked to have it dispatched on `wanted_on` — that request date is always
the order date or later.

A dispatch counts as same-day when the date it was wanted is exactly the
date it was placed; otherwise it was pushed to a later day.

For every distinct `placed_on` date, work out the percentage of that day's
dispatches that were same-day, rounded to 2 decimal places.

Return the result table ordered by `placed_on` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Dispatches` before your query executes. The result format is in the
following examples.

### Example 1

```text
Input:
Dispatches table:
+-------------+-----------+------------+------------+
| dispatch_id | client_id | placed_on  | wanted_on  |
+-------------+-----------+------------+------------+
| 1           | 101       | 2023-03-01 | 2023-03-01 |
| 2           | 102       | 2023-03-01 | 2023-03-04 |
| 3           | 103       | 2023-03-02 | 2023-03-02 |
| 4           | 101       | 2023-03-02 | 2023-03-09 |
| 5           | 104       | 2023-03-02 | 2023-03-02 |
| 6           | 105       | 2023-03-03 | 2023-03-11 |
+-------------+-----------+------------+------------+
Output:
+------------+---------------+
| placed_on  | same_day_pct  |
+------------+---------------+
| 2023-03-01 | 50.00         |
| 2023-03-02 | 66.67         |
| 2023-03-03 | 0.00          |
+------------+---------------+
Explanation:
- On 2023-03-01 one of the two dispatches was wanted the same day, so the
  rate is 50.
- On 2023-03-02 two of three were same-day, giving 66.67 after rounding.
- On 2023-03-03 the single dispatch was pushed to a later day, so the rate
  is 0.
```

### Example 2

```text
Input:
Dispatches table:
+-------------+-----------+------------+------------+
| dispatch_id | client_id | placed_on  | wanted_on  |
+-------------+-----------+------------+------------+
| 11          | 201       | 2023-07-10 | 2023-07-10 |
| 12          | 202       | 2023-07-10 | 2023-07-10 |
| 13          | 203       | 2023-07-10 | 2023-07-10 |
| 14          | 204       | 2023-07-10 | 2023-07-12 |
| 15          | 205       | 2023-07-11 | 2023-07-11 |
| 16          | 206       | 2023-07-11 | 2023-07-14 |
| 17          | 207       | 2023-07-11 | 2023-07-15 |
+-------------+-----------+------------+------------+
Output:
+------------+---------------+
| placed_on  | same_day_pct  |
+------------+---------------+
| 2023-07-10 | 75.00         |
| 2023-07-11 | 33.33         |
+------------+---------------+
Explanation:
- On 2023-07-10 three of the four dispatches were wanted immediately, so
  the rate is 75.
- On 2023-07-11 only one of three was same-day; 100/3 rounds to 33.33.
```

The output holds exactly one row per distinct `placed_on`, and the
ascending order over those dates is total, so the row sequence is fully
determined. Write your solution as a single `SELECT` query returning two
columns — `placed_on` and `same_day_pct`, in that order — with the rows
ordered by `placed_on` ascending.
