# November Conditions by Nation

## Description

Table: `Nations`

| Column Name | Type    |
| ----------- | ------- |
| nation_id   | int     |
| nation_name | varchar |

`nation_id` is the primary key (column with unique values) for this table.
Each row of this table holds the ID and the name of one nation.

Table: `Conditions`

| Column Name     | Type |
| --------------- | ---- |
| nation_id       | int  |
| condition_level | int  |
| condition_day   | date |

`(nation_id, condition_day)` is the primary key (combination of columns
with unique values) for this table.
Each row of this table records the atmospheric condition level measured in
a nation on one day.

Write a solution to classify the weather of each nation for November 2019.

A nation's November is:

- Cold when the average `condition_level` over the month is at most 15,
- Hot when that average is at least 25, and
- Warm the rest of the time.

Return the result table in any order.

A nation whose November average cannot be computed (no November rows)
does not appear in the result.

The result format is shown in the following example.

### Example 1

```text
Input:
Nations table:
+-----------+-------------+
| nation_id | nation_name |
+-----------+-------------+
| 1         | Kenya       |
| 4         | Chile       |
| 6         | Norway      |
| 9         | Oman        |
+-----------+-------------+
Conditions table:
+-----------+-----------------+---------------+
| nation_id | condition_level | condition_day |
+-----------+-----------------+---------------+
| 6         | 8               | 2019-11-03    |
| 6         | 12              | 2019-11-17    |
| 6         | 20              | 2019-12-05    |
| 9         | 28              | 2019-11-08    |
| 9         | 34              | 2019-11-21    |
| 9         | 10              | 2019-10-31    |
| 4         | 17              | 2019-11-05    |
| 4         | 19              | 2019-11-15    |
| 4         | 22              | 2019-11-25    |
| 1         | 26              | 2019-12-19    |
| 1         | 30              | 2019-12-20    |
+-----------+-----------------+---------------+
Output:
+-------------+----------------+
| nation_name | condition_type |
+-------------+----------------+
| Chile       | Warm           |
| Norway      | Cold           |
| Oman        | Hot            |
+-------------+----------------+
Explanation: Norway's November average is (8 + 12) / 2 = 10, so it is
Cold.
Oman's November average is (28 + 34) / 2 = 31, so it is Hot.
Chile's November average is (17 + 19 + 22) / 3 = 19.33, so it is Warm.
Readings outside November, such as Norway's December row or Oman's
October row, are ignored.
Kenya has no November rows at all, so it is left out of the result.
```
