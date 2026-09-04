# Category Sales by Weekday

## Description

A stationery shop wants a week-shaped picture of its sales: for every
category it carries, how many units went out the door on each day of
the week.

Table: `Transactions`

| Column Name    | Type |
| -------------- | ---- |
| transaction_id | int  |
| buyer_id       | int  |
| sale_date      | date |
| ware_id        | int  |
| quantity       | int  |

`(transaction_id, ware_id)` is the primary key of this table: each row
is one line of a purchase — the buyer's id, the day it happened, and
how many units of one ware it took.

Table: `Wares`

| Column Name   | Type    |
| ------------- | ------- |
| ware_id       | int     |
| ware_name     | varchar |
| ware_category | varchar |

`ware_id` is the primary key of this table: each row names one ware the
shop carries and the category it belongs to.

Build the sales report: for each category, the total number of units
sold on each day of the week. The result has one row per category with
seven value columns — one per weekday, named `Monday` through `Sunday`
— holding that category's total units sold on that weekday; a weekday
with no sales of the category contributes `0`. Categories that never
sold still get a row, all zeros.

Return the result table ordered by category.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Transactions` and `Wares` rows before your query runs. The
result format is in the following example.

### Example 1

```text
Input:
Transactions table:
+----------------+----------+------------+---------+----------+
| transaction_id | buyer_id | sale_date  | ware_id | quantity |
+----------------+----------+------------+---------+----------+
| 1              | 10       | 2023-10-02 | 1       | 4        |
| 2              | 11       | 2023-10-02 | 3       | 7        |
| 3              | 12       | 2023-10-03 | 1       | 2        |
| 4              | 13       | 2023-10-04 | 4       | 5        |
| 5              | 10       | 2023-10-05 | 5       | 3        |
| 6              | 14       | 2023-10-06 | 3       | 6        |
| 7              | 15       | 2023-10-07 | 2       | 8        |
| 8              | 10       | 2023-10-08 | 4       | 1        |
| 9              | 16       | 2023-10-09 | 5       | 2        |
| 10             | 17       | 2023-10-15 | 2       | 4        |
+----------------+----------+------------+---------+----------+
Wares table:
+---------+------------+---------------+
| ware_id | ware_name  | ware_category |
+---------+------------+---------------+
| 1       | Desk Lamp  | Lighting      |
| 2       | Floor Lamp | Lighting      |
| 3       | Notebook   | Paper         |
| 4       | Gel Pens   | Paper         |
| 5       | Stapler    | Office        |
| 6       | Pinboard   | Office        |
+---------+------------+---------------+
Output:
+----------+--------+---------+-----------+----------+--------+----------+--------+
| Category | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
+----------+--------+---------+-----------+----------+--------+----------+--------+
| Lighting | 4      | 2       | 0         | 0        | 0      | 8        | 4      |
| Office   | 2      | 0       | 0         | 3        | 0      | 0        | 0      |
| Paper    | 7      | 0       | 5         | 0        | 6      | 0        | 1      |
+----------+--------+---------+-----------+----------+--------+----------+--------+
Explanation: The Lighting wares (ids 1, 2) sold 4 units on Monday
2023-10-02, 2 on Tuesday 2023-10-03, 8 on Saturday 2023-10-07, and 4
more on Sunday 2023-10-15. Paper (ids 3, 4) totals 7 on Monday, 5 on
Wednesday 2023-10-04, 6 on Friday 2023-10-06, and 1 on Sunday
2023-10-08. Office (ids 5, 6) sold 3 units on Thursday 2023-10-05 and
2 on the following Monday 2023-10-09.
```
