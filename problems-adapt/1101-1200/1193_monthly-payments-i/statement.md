# Monthly Payments I

## Description

A checkout service logs every card payment it attempts, whether it ends
in success or not. Table: `Payments`

| Column Name | Type    |
| ----------- | ------- |
| payment_id  | int     |
| country     | varchar |
| status      | enum    |
| amount      | int     |
| paid_on     | date    |

`payment_id` is the primary key of this table.
Each row is one attempted payment: the country it was made in, the
amount charged, the date it was made, and how the attempt ended.
The `status` column is an enum of type `["approved", "declined"]`.

For every month and country, report four figures: how many payments
were attempted in that month and what they added up to, and then the
count and sum over the approved payments alone.

Return the result table in any order.

The result format is in the following examples.

### Example 1

```text
Input:
Payments table:
+------------+---------+----------+--------+------------+
| payment_id | country | status   | amount | paid_on    |
+------------+---------+----------+--------+------------+
| 201        | US      | approved | 120    | 2021-06-05 |
| 202        | US      | declined | 80     | 2021-06-09 |
| 203        | FR      | approved | 200    | 2021-06-14 |
| 204        | FR      | declined | 50     | 2021-07-01 |
| 205        | JP      | approved | 90     | 2021-07-18 |
| 206        | US      | approved | 60     | 2021-07-21 |
| 207        | JP      | declined | 30     | 2021-07-22 |
+------------+---------+----------+--------+------------+
Output:
+---------+---------+---------------+----------------+---------------+----------------+
| month   | country | payment_count | approved_count | payment_total | approved_total |
+---------+---------+---------------+----------------+---------------+----------------+
| 2021-06 | FR      | 1             | 1              | 200           | 200            |
| 2021-06 | US      | 2             | 1              | 200           | 120            |
| 2021-07 | FR      | 1             | 0              | 50            | 0              |
| 2021-07 | JP      | 2             | 1              | 120           | 90             |
| 2021-07 | US      | 1             | 1              | 60            | 60             |
+---------+---------+---------------+----------------+---------------+----------------+
Explanation: June's US attempts came to 200 in all, but only the 120
one was approved. In July nothing of France's single attempt went
through, so its approved count is 0 and its approved total an explicit
0, not a missing row.
```

### Example 2

```text
Input:
Payments table:
+------------+---------+----------+--------+------------+
| payment_id | country | status   | amount | paid_on    |
+------------+---------+----------+--------+------------+
| 301        | DE      | approved | 140    | 2020-12-30 |
| 302        | DE      | declined | 25     | 2020-12-31 |
| 303        | DE      | approved | 110    | 2021-01-02 |
| 304        | IT      | declined | 70     | 2021-01-05 |
| 305        | IT      | declined | 20     | 2021-01-19 |
+------------+---------+----------+--------+------------+
Output:
+---------+---------+---------------+----------------+---------------+----------------+
| month   | country | payment_count | approved_count | payment_total | approved_total |
+---------+---------+---------------+----------------+---------------+----------------+
| 2020-12 | DE      | 2             | 1              | 165           | 140            |
| 2021-01 | DE      | 1             | 1              | 110           | 110            |
| 2021-01 | IT      | 2             | 0              | 90            | 0              |
+---------+---------+---------------+----------------+---------------+----------------+
Explanation: The two December payments straddle the new year by only a
couple of days, yet they group together under `2020-12`; Italy's two
January attempts were both declined, leaving an approved total of 0.
```

Write your solution as a single `SELECT` query returning columns
`month, country, payment_count, approved_count, payment_total,
approved_total`.
