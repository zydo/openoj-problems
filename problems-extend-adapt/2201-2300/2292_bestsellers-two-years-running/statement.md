# Bestsellers Two Years Running

## Description

Table: `Sales`

| Column Name | Type |
| ----------- | ---- |
| sale_id     | int  |
| item_id     | int  |
| units       | int  |
| sale_date   | date |

`sale_id` contains unique values. Each row records one sale: the sale's own
id, the item that was sold, how many units moved, and the date the sale was
made.

Report the IDs of every item that sold three or more times in two
consecutive calendar years.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Sales` table
with that testcase's rows. The result format is in the following example.

### Example 1

```text
Input:
Sales table:
+---------+---------+-------+------------+
| sale_id | item_id | units | sale_date  |
+---------+---------+-------+------------+
| 1       | 3       | 2     | 2020-02-10 |
| 2       | 3       | 1     | 2020-07-19 |
| 3       | 3       | 4     | 2020-11-30 |
| 4       | 3       | 2     | 2021-01-05 |
| 5       | 3       | 1     | 2021-06-14 |
| 6       | 3       | 9     | 2021-09-09 |
| 7       | 8       | 1     | 2021-03-03 |
| 8       | 8       | 1     | 2021-08-08 |
| 9       | 8       | 1     | 2022-02-02 |
| 10      | 8       | 1     | 2022-05-05 |
| 11      | 15      | 6     | 2022-04-01 |
| 12      | 15      | 6     | 2022-07-01 |
| 13      | 15      | 6     | 2022-10-01 |
+---------+---------+-------+------------+
Output:
+---------+
| item_id |
+---------+
| 3       |
+---------+
Explanation:
Item 3 sold three times in 2020 and three times again in 2021, so it made
the bar in two consecutive years and is reported. Item 8 managed only two
sales in 2021 and two in 2022, and item 15 sold three times but all within
2022 alone, leaving neither a second year.
```

An item qualifies when some year y and the year after it, y + 1, each hold at
least three of its sales. Sales are counted one per row of the table, filed
under the calendar year of `sale_date` alone — the month, day, and `units`
figure nowhere — so two sales on the same day still count as two. The bar
clears at exactly three in both years, and a pair of strong years that are
not adjacent (three sales in 2020, three in 2022, almost nothing in 2021)
does not qualify. An item sold heavily across three or more straight years
clears the bar through several adjacent pairs at once but is still reported
once. Write your solution as a single `SELECT` query returning one column —
`item_id` — with one row for every item that qualifies, in any order.

### Example 2

```text
Input:
Sales table:
+---------+---------+-------+------------+
| sale_id | item_id | units | sale_date  |
+---------+---------+-------+------------+
| 1       | 6       | 1     | 2019-05-15 |
| 2       | 6       | 1     | 2019-06-15 |
| 3       | 6       | 1     | 2019-07-15 |
| 4       | 6       | 1     | 2020-05-15 |
| 5       | 6       | 1     | 2020-06-15 |
| 6       | 6       | 1     | 2020-07-15 |
| 7       | 6       | 1     | 2021-05-15 |
| 8       | 6       | 1     | 2021-06-15 |
| 9       | 6       | 1     | 2021-07-15 |
| 10      | 9       | 1     | 2019-01-01 |
| 11      | 9       | 1     | 2019-02-01 |
| 12      | 9       | 1     | 2019-03-01 |
| 13      | 9       | 1     | 2021-01-01 |
| 14      | 9       | 1     | 2021-02-01 |
| 15      | 9       | 1     | 2021-03-01 |
| 16      | 4       | 2     | 2020-03-03 |
| 17      | 4       | 2     | 2020-06-06 |
| 18      | 4       | 2     | 2020-09-09 |
+---------+---------+-------+------------+
Output:
+---------+
| item_id |
+---------+
| 6       |
+---------+
Explanation:
Item 6 sold three times in 2019, 2020, and 2021 — two adjacent pairs — and
is reported once. Item 9 had three sales in 2019 and three in 2021, but
2020 in between stayed quiet, so its strong years never touch. Item 4 had
three sales in 2020 with no following year at three.
```
