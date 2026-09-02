# Hold Back Expedited Shipments

## Description

Table: `Shipments`

| Column Name   | Type |
| ------------- | ---- |
| shipment_id   | int  |
| customer_id   | int  |
| shipment_kind | int  |

`shipment_id` uniquely identifies each shipment. Every row records one
shipment, the customer it belongs to, and the kind of shipment it is:
`0` marks a regular shipment, `1` marks an expedited one.

Report every shipment in the table, applying one rule per customer:

- If the customer has at least one regular shipment, none of that
  customer's expedited shipments are reported.
- Otherwise, all of that customer's shipments are reported.

The rows may be reported in any order.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Shipments` rows (whichever are present) before your query
runs. The result format is in the following example.

### Example 1

```text
Input:
Shipments table:
+-------------+-------------+---------------+
| shipment_id | customer_id | shipment_kind |
+-------------+-------------+---------------+
| 4           | 12          | 1             |
| 9           | 12          | 0             |
| 15          | 7           | 0             |
| 20          | 7           | 1             |
| 33          | 5           | 1             |
| 41          | 9           | 0             |
| 48          | 9           | 1             |
| 55          | 3           | 1             |
+-------------+-------------+---------------+
Output:
+-------------+-------------+---------------+
| shipment_id | customer_id | shipment_kind |
+-------------+-------------+---------------+
| 9           | 12          | 0             |
| 15          | 7           | 0             |
| 33          | 5           | 1             |
| 41          | 9           | 0             |
| 55          | 3           | 1             |
+-------------+-------------+---------------+
Explanation:
Customers 12, 7, and 9 each hold a regular shipment (kind 0), so their
expedited shipments 4, 20, and 48 are held back. Customers 5 and 3
have no regular shipment at all, so their expedited shipments 33 and
55 are reported anyway.
```

### Example 2

```text
Input:
Shipments table:
+-------------+-------------+---------------+
| shipment_id | customer_id | shipment_kind |
+-------------+-------------+---------------+
| 2           | 6           | 0             |
| 3           | 6           | 1             |
| 8           | 1           | 1             |
+-------------+-------------+---------------+
Output:
+-------------+-------------+---------------+
| shipment_id | customer_id | shipment_kind |
+-------------+-------------+---------------+
| 2           | 6           | 0             |
| 8           | 1           | 1             |
+-------------+-------------+---------------+
Explanation:
Customer 6 has a regular shipment, so only that one is reported.
Customer 1's single shipment is expedited and stands, since nothing
regular of theirs holds it back.
```

Write your solution as a single `SELECT` query returning the columns
`shipment_id`, `customer_id`, and `shipment_kind`. Because the result
may be returned in any order, rows are compared as a multiset.
