# Counting Big Spenders

## Description

Table: `Receipts`

| Column Name | Type |
| ----------- | ---- |
| receipt_id  | int  |
| customer_id | int  |
| total       | int  |

`receipt_id` uniquely identifies each receipt. Every row records one
receipt, the customer it belongs to, and the total charged on it.

Say a receipt is big when its `total` is strictly greater than `500`.
Report the number of customers who hold at least one big receipt — a
customer with several big receipts still counts once, and a customer
whose receipts all sit at or below `500` does not count at all.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Receipts` rows (whichever are present) before your query
runs. The result format is in the following example.

### Example 1

```text
Input:
Receipts table:
+-------------+-------------+-------+
| receipt_id  | customer_id | total |
+-------------+-------------+-------+
| 3           | 5           | 620   |
| 7           | 5           | 90    |
| 11          | 8           | 500   |
| 13          | 8           | 501   |
| 21          | 2           | 350   |
| 30          | 9           | 1200  |
+-------------+-------------+-------+
Output:
+---------------+
| spender_count |
+---------------+
| 3             |
+---------------+
Explanation:
Customers 5, 8, and 9 each hold a receipt whose total clears 500 —
620, 501, and 1200 respectively. Customer 8's 500 receipt sits exactly
on the threshold and does not count, and customer 2 never clears it,
but each qualifying customer is tallied just once.
```

### Example 2

```text
Input:
Receipts table:
+-------------+-------------+-------+
| receipt_id  | customer_id | total |
+-------------+-------------+-------+
| 1           | 4           | 500   |
| 2           | 6           | 499   |
| 3           | 4           | 480   |
+-------------+-------------+-------+
Output:
+---------------+
| spender_count |
+---------------+
| 0             |
+---------------+
Explanation:
No receipt goes above 500, so no customer qualifies and the answer is
0.
```

Write your solution as a single `SELECT` query returning one row with
one column named `spender_count`.
