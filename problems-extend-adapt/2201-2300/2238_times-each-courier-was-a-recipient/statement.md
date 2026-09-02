# Times Each Courier Was a Recipient

## Description

Table: `Deliveries`

| Column Name  | Type |
| ------------ | ---- |
| delivery_id  | int  |
| courier_id   | int  |
| recipient_id | int  |

`delivery_id` contains unique values.
Each row of this table pairs the ID of the courier who handled the
delivery with the ID of its recipient.
Note that `courier_id != recipient_id`.

Write a solution to report the ID of each courier and the number of times
they appeared as a recipient.

Return the result table in any order.

Each testcase's `dataset` seeds the `Deliveries` table: its script inserts
the testcase's `Deliveries` rows before your query runs.

The result format is in the following example.

### Example 1

```text
Input:
Deliveries table:
+-------------+------------+--------------+
| delivery_id | courier_id | recipient_id |
+-------------+------------+--------------+
| 1           | 50         | 12           |
| 2           | 50         | 13           |
| 3           | 60         | 12           |
| 4           | 60         | 50           |
| 5           | 60         | 50           |
| 6           | 60         | 14           |
+-------------+------------+--------------+
Output:
+------------+---------------+
| courier_id | recipient_cnt |
+------------+---------------+
| 50         | 2             |
| 60         | 0             |
+------------+---------------+
Explanation:
Two couriers appear across the given deliveries: 50 and 60.
The courier with ID = 50 was a recipient two times.
The courier with ID = 60 was never a recipient.
```

### Example 2

```text
Input:
Deliveries table:
+-------------+------------+--------------+
| delivery_id | courier_id | recipient_id |
+-------------+------------+--------------+
| 21          | 300        | 301          |
| 22          | 301        | 300          |
| 23          | 302        | 303          |
+-------------+------------+--------------+
Output:
+------------+---------------+
| courier_id | recipient_cnt |
+------------+---------------+
| 300        | 1             |
| 301        | 1             |
| 302        | 0             |
+------------+---------------+
Explanation:
Couriers 300 and 301 each received the other's delivery once, while
courier 302 never appears in the recipient column, so their count is 0.
(ID 303 is a recipient but never a courier, so it is not reported.)
```

Write your solution as a single `SELECT` query returning two columns named
`courier_id` and `recipient_cnt`, in any row order.
