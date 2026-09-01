# Running Totals by House

## Description

A games club splits its members into two houses, and every scored
round of the season is logged in one table. `Rounds` holds one row per
scoring round: who played, which house they belong to, the day the
round was held, and how many points they earned.

Table: `Rounds`

| Column Name | Type    |
| ----------- | ------- |
| entrant     | varchar |
| house       | varchar |
| round_on    | date    |
| points      | int     |

`(house, round_on)` is the primary key (combination of columns with
unique values) for this table, so a house appears at most once per
day.
Each row records an entrant, the house coded in `house`, the day of
the round, and the points earned in it.

For each house, report every day on which it scored together with the
house's running total — the sum of that house's `points` over all its
rounds up to and including that day.

Return the result rows ordered by `house` in ascending order, then by
`round_on` in ascending order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Rounds table:
+---------+-------+------------+--------+
| entrant | house | round_on   | points |
+---------+-------+------------+--------+
| Otto    | Oak   | 2023-02-27 | 14     |
| Mira    | Elm   | 2023-02-27 | 6      |
| Nadia   | Elm   | 2023-03-04 | 9      |
| Paul    | Oak   | 2023-03-11 | 7      |
| Sara    | Elm   | 2023-03-11 | 5      |
| Theo    | Oak   | 2023-03-18 | 3      |
+---------+-------+------------+--------+
Output:
+-------+------------+-------+
| house | round_on   | total |
+-------+------------+-------+
| Elm   | 2023-02-27 | 6     |
| Elm   | 2023-03-04 | 15    |
| Elm   | 2023-03-11 | 20    |
| Oak   | 2023-02-27 | 14    |
| Oak   | 2023-03-11 | 21    |
| Oak   | 2023-03-18 | 24    |
+-------+------------+-------+
Explanation:
For house Elm:
The first day is 2023-02-27, Mira earned 6 points and the running
total is 6.
The second day is 2023-03-04, Nadia earned 9 points and the running
total is 15.
The third day is 2023-03-11, Sara earned 5 points and the running
total is 20.

For house Oak:
The first day is 2023-02-27, Otto earned 14 points and the running
total is 14.
The second day is 2023-03-11, Paul earned 7 points and the running
total is 21.
The third day is 2023-03-18, Theo earned 3 points and the running
total is 24.
```

### Example 2

```text
Input:
Rounds table:
+---------+-------+------------+--------+
| entrant | house | round_on   | points |
+---------+-------+------------+--------+
| Ivy     | Elm   | 2023-01-02 | 12     |
+---------+-------+------------+--------+
Output:
+-------+------------+-------+
| house | round_on   | total |
+-------+------------+-------+
| Elm   | 2023-01-02 | 12    |
+-------+------------+-------+
Explanation:
House Elm's only round is also its first, so the running total is
simply the 12 points Ivy earned.
```

Write your solution as a single `SELECT` query returning `house`,
`round_on`, and `total`.
