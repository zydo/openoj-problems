# Dates Written Out In Full

## Description

Table: `Events`

| Column Name | Type |
| ----------- | ---- |
| event_day   | date |

`event_day` is the column with unique values for this table. Each row
carries one calendar date.

Write a solution to render every `event_day` written out in full — the string

```text
weekday_name, month_name day_number, year
```

where `weekday_name` and `month_name` are the full English names, and
`day_number` keeps no leading zero (July 4, not July 04). The rendering
is case-sensitive exactly as written above.

Return the result table in any order.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Events` rows (whichever are present) before your query
runs. The result format is in the following example.

### Example 1

```text
Input:
Events table:
+------------+
| event_day  |
+------------+
| 2019-02-27 |
| 2024-02-29 |
| 1999-12-31 |
| 2000-01-01 |
| 2016-07-04 |
+------------+
Output:
+-------------------------------+
| long_form                     |
+-------------------------------+
| Wednesday, February 27, 2019  |
| Thursday, February 29, 2024   |
| Friday, December 31, 1999     |
| Saturday, January 1, 2000     |
| Monday, July 4, 2016          |
+-------------------------------+
Explanation: The names are full English weekday and month names, and
the day number drops any leading zero — January 1, 2000 renders with a
bare 1. 2024-02-29 is a leap day and renders as a real Thursday.
```

Write your solution as a single `SELECT` query producing the `long_form`
string for every row.
