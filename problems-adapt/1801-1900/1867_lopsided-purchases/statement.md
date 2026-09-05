# Lopsided Purchases

## Description

Table: `Purchases`

| Column Name | Type |
| ----------- | ---- |
| purchase_id | int  |
| item_id     | int  |
| units       | int  |

`(purchase_id, item_id)` is the primary key (combination of columns with
unique values) for this table. One purchase spans several rows — a row
for every item it includes — and each row records how many units of that
item the purchase covers.

A marketplace wants to surface lopsided purchases. A purchase is
lopsided when its largest single-item order of units is strictly
greater than the average purchase size of every purchase in the table,
its own included.

A purchase's average size is `(total units across all its items) /
(number of distinct items it covers)`, and its largest line is the
highest unit count of any one item in it.

Write a solution to report the `purchase_id` of every lopsided
purchase.

Return the result table in any order.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Purchases` rows (whichever are present) before your query
runs. The result format is in the following example.

### Example 1

```text
Input:
Purchases table:
+-------------+---------+-------+
| purchase_id | item_id | units |
+-------------+---------+-------+
| 1           | 1       | 10    |
| 1           | 2       | 14    |
| 1           | 3       | 12    |
| 2           | 1       | 3     |
| 2           | 2       | 3     |
| 2           | 3       | 3     |
| 3           | 1       | 20    |
| 3           | 2       | 2     |
| 4           | 1       | 13    |
| 4           | 2       | 5     |
| 5           | 1       | 11    |
| 5           | 2       | 11    |
| 5           | 3       | 11    |
+-------------+---------+-------+
Output:
+-------------+
| purchase_id |
+-------------+
| 1           |
| 3           |
| 4           |
+-------------+
Explanation:
The average size of each purchase is:
- purchase_id=1: (10+14+12)/3 = 12
- purchase_id=2: (3+3+3)/3 = 3
- purchase_id=3: (20+2)/2 = 11
- purchase_id=4: (13+5)/2 = 9
- purchase_id=5: (11+11+11)/3 = 11

The largest line of each purchase is:
- purchase_id=1: max(10, 14, 12) = 14
- purchase_id=2: max(3, 3, 3) = 3
- purchase_id=3: max(20, 2) = 20
- purchase_id=4: max(13, 5) = 13
- purchase_id=5: max(11, 11, 11) = 11

Purchases 1, 3, and 4 are lopsided: their largest lines (14, 20, and
13) beat every average in the table, including their own. Purchase 5's
largest line of 11 clears three of the averages but not purchase 1's 12,
and purchase 2's largest line of 3 beats nothing.
```

Write your solution as a single `SELECT` query returning the
`purchase_id` of each lopsided purchase.
