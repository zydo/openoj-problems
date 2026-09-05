# Rising Third Purchases

## Description

Table: `Purchases`

| Column Name  | Type     |
| ------------ | -------- |
| user_id      | int      |
| amount       | decimal  |
| purchased_at | datetime |

`(user_id, purchased_at)` is the unique key of this table. Each row
records one purchase: who bought, how much was spent, and when.

Report each user's third purchase, provided the user has at least three
purchases and that third purchase cost strictly more than both of the
two purchases before it. Users with fewer than three purchases, or
whose third purchase fails to top both predecessors, never appear.

Return columns `user_id`, `third_purchase_amount`, and
`third_purchase_date`, ordered by `user_id` in ascending order.

Every testcase carries its own `dataset`: the DDL loads the `Purchases`
table with that testcase's rows. The example below shows the result
format.

### Example 1

```text
Input:
Purchases table:
+---------+--------+---------------------+
| user_id | amount | purchased_at        |
+---------+--------+---------------------+
| 4       | 12.25  | 2024-01-03 09:15:00 |
| 4       | 55.00  | 2024-01-08 18:42:11 |
| 4       | 18.00  | 2024-01-05 12:00:00 |
| 7       | 9.99   | 2024-02-01 10:00:00 |
| 7       | 4.50   | 2024-02-03 11:30:00 |
| 9       | 20.00  | 2024-03-02 08:00:00 |
| 9       | 15.00  | 2024-03-04 09:45:00 |
| 9       | 12.75  | 2024-03-06 22:10:00 |
+---------+--------+---------------------+
Output:
+---------+-----------------------+---------------------+
| user_id | third_purchase_amount | third_purchase_date |
+---------+-----------------------+---------------------+
| 4       | 55.00                 | 2024-01-08 18:42:11 |
+---------+-----------------------+---------------------+
Explanation:
- For user 4, the purchases in date order are $12.25, then $18.00,
then $55.00. The third one tops both predecessors, so it is reported.
- User 7 made only two purchases, so there is no third purchase to
consider.
- For user 9, the third purchase ($12.75) is cheaper than both earlier
ones, so it is not reported.
The output is ordered by user_id ascending.
```

### Example 2

```text
Input:
Purchases table:
+---------+--------+---------------------+
| user_id | amount | purchased_at        |
+---------+--------+---------------------+
| 2       | 5.00   | 2024-05-01 08:00:00 |
| 2       | 6.50   | 2024-05-02 09:00:00 |
| 2       | 9.99   | 2024-05-03 10:00:00 |
| 3       | 10.00  | 2024-06-01 08:00:00 |
| 3       | 4.00   | 2024-06-02 09:00:00 |
| 3       | 10.00  | 2024-06-03 10:00:00 |
| 5       | 1.00   | 2024-07-01 08:00:00 |
| 5       | 2.00   | 2024-07-02 09:00:00 |
| 5       | 3.50   | 2024-07-03 10:00:00 |
| 5       | 100.00 | 2024-07-04 11:00:00 |
+---------+--------+---------------------+
Output:
+---------+-----------------------+---------------------+
| user_id | third_purchase_amount | third_purchase_date |
+---------+-----------------------+---------------------+
| 2       | 9.99                  | 2024-05-03 10:00:00 |
| 5       | 3.50                  | 2024-07-03 10:00:00 |
+---------+-----------------------+---------------------+
Explanation:
- User 2's third purchase ($9.99) beats both $5.00 and $6.50, so it is
reported.
- User 3's third purchase ($10.00) merely ties their first purchase,
and a tie is not strictly greater, so user 3 is absent.
- User 5's third purchase ($3.50) tops $1.00 and $2.00 and is
reported; the later $100.00 purchase plays no role.
```

A user's purchases are ordered by `purchased_at` alone; because
`(user_id, purchased_at)` is unique, that order is total and the third
purchase is well defined. Write your answer as one `SELECT` query
returning the three columns `user_id`, `third_purchase_amount`, and
`third_purchase_date`, in that order, with the rows ordered by
`user_id` ascending.
