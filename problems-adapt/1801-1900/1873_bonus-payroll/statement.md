# Bonus Payroll

## Description

Table: `Staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| full_name   | varchar |
| pay         | int     |

`staff_id` is the column with unique values for this table.

Each row describes one member of staff: their ID, their name, and
their pay.

A staff member collects a bonus worth their entire `pay` when their
`staff_id` is odd and their `full_name` does not begin with the letter
`'M'`. Every other staff member's bonus is `0`.

Report each staff member's ID together with their bonus, ordered by
`staff_id` in ascending order.

Each testcase's `dataset` seeds the `Staff` table with that testcase's
rows. The result format is in the following example.

### Example 1

```text
Input:
Staff table:
+----------+-----------+------+
| staff_id | full_name | pay  |
+----------+-----------+------+
| 11       | Riya      | 5200 |
| 12       | Marco     | 6100 |
| 13       | Amir      | 4800 |
| 14       | Mira      | 3900 |
| 15       | Noor      | 7200 |
| 8        | Lena      | 2600 |
+----------+-----------+------+
Output:
+----------+--------+
| staff_id | payout |
+----------+--------+
| 8        | 0      |
| 11       | 5200   |
| 12       | 0      |
| 13       | 4800   |
| 14       | 0      |
| 15       | 7200   |
+----------+--------+
Explanation:
Staff 8 and 12 hold even IDs, so both of their bonuses are 0. Staff
14 has an odd ID, but their name starts with 'M', so they get 0 as
well. Staff 11, 13, and 15 satisfy both conditions and collect a
bonus equal to their full pay.
```
