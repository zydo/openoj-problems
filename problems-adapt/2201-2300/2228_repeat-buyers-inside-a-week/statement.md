# Repeat Buyers Inside a Week

## Description

Table: `Orders`

| Column Name | Type |
| ----------- | ---- |
| order_id    | int  |
| buyer_id    | int  |
| order_date  | date |

`order_id` contains unique values.
This table logs the days on which buyers placed orders with a certain
retailer.

Write a solution to report the IDs of the buyers who placed any two orders
at most 7 days apart.

Return the result table ordered by `buyer_id`.

Each testcase's `dataset` seeds the `Orders` table: its script inserts the
testcase's `Orders` rows before your query runs.

The result format is in the following example.

### Example 1

```text
Input:
Orders table:
+----------+----------+------------+
| order_id | buyer_id | order_date |
+----------+----------+------------+
| 31       | 8        | 2022-04-02 |
| 12       | 3        | 2022-01-15 |
| 44       | 8        | 2022-04-09 |
| 27       | 3        | 2022-05-30 |
| 50       | 6        | 2022-03-01 |
| 18       | 9        | 2022-06-11 |
+----------+----------+------------+
Output:
+----------+
| buyer_id |
+----------+
| 8        |
+----------+
Explanation:
Buyer 8 placed two orders on 2022-04-02 and 2022-04-09 — exactly 7 days
apart, which still counts. Buyer 3's two orders are more than four months
apart, and buyers 6 and 9 each placed a single order.
```

### Example 2

```text
Input:
Orders table:
+----------+----------+------------+
| order_id | buyer_id | order_date |
+----------+----------+------------+
| 101      | 20       | 2022-02-01 |
| 102      | 20       | 2022-02-09 |
| 103      | 21       | 2022-02-01 |
| 104      | 21       | 2022-02-08 |
+----------+----------+------------+
Output:
+----------+
| buyer_id |
+----------+
| 21       |
+----------+
Explanation:
Buyer 20's pair is 8 days apart — one day over the limit — while buyer 21's
pair is 7 days apart and qualifies.
```

Write your solution as a single `SELECT` query returning one column named
`buyer_id`, ordered by `buyer_id`.
