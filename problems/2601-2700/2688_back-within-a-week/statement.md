# Back Within A Week

## Description

Table: `Shoppers`

| Column Name | Type     |
| ----------- | -------- |
| shopper_id  | int      |
| product     | varchar  |
| bought_on   | datetime |
| paid        | int      |

This table may contain duplicate records. Every row is one purchase: the
buyer's id, the product bought, when the purchase happened, and what was
paid for it.

Call a shopper active when some second purchase of theirs lands within 7
days of another one of their purchases.

For instance, taking June 14, 2024 as the anchor, any purchase made between
June 14, 2024 and June 21, 2024 (both ends included) counts as within 7
days of that anchor.

Report the `shopper_id` of every active shopper, in any order.

Every test case ships its own `dataset`: the statements inside it populate
`Shoppers` before your query executes. The result format is in the
following examples.

### Example 1

```text
Input:
Shoppers table:
+------------+--------------+------------+------+
| shopper_id | product      | bought_on  | paid |
+------------+--------------+------------+------+
| 11         | Desk Lamp    | 2023-11-01 | 45   |
| 11         | Notebook     | 2023-11-06 | 12   |
| 11         | Monitor Arm  | 2023-11-20 | 180  |
| 12         | Tea Kettle   | 2023-11-03 | 80   |
| 13         | Standing Mat | 2023-11-05 | 60   |
| 13         | Cable Tray   | 2023-11-18 | 22   |
+------------+--------------+------------+------+
Output:
+------------+
| shopper_id |
+------------+
| 11         |
+------------+
Explanation:
- Shopper 11 bought on 2023-11-01 and again on 2023-11-06 — five days
  apart, which is within 7 days, so they are active.
- Shopper 12 made a single purchase, so they cannot qualify.
- Shopper 13's two purchases sit thirteen days apart, which is more than
  7, so they are not active.
```

### Example 2

```text
Input:
Shoppers table:
+------------+--------------+------------+------+
| shopper_id | product      | bought_on  | paid |
+------------+--------------+------------+------+
| 21         | Whiteboard   | 2024-02-01 | 120  |
| 21         | Markers      | 2024-02-08 | 15   |
| 22         | Sticky Notes | 2024-03-01 | 9    |
| 22         | Desk Pad     | 2024-03-09 | 25   |
| 23         | Headset      | 2024-04-02 | 95   |
| 23         | Headset      | 2024-04-02 | 95   |
+------------+--------------+------------+------+
Output:
+------------+
| shopper_id |
+------------+
| 21         |
| 23         |
+------------+
Explanation:
- Shopper 21's purchases are exactly seven days apart (2024-02-01 to
  2024-02-08), and the boundary is included, so they are active.
- Shopper 22's purchases are eight days apart — one day too many — so
  they are not active.
- Shopper 23 has two identical rows for the same product on the same
  day; those are two distinct purchases zero days apart, so they are
  active.
```

A purchase date counts as "within 7 days" of another one when the two
dates are at most 7 days apart, both endpoints included — the anchor date
itself (0 days) and exactly 7 days both qualify, 8 days does not. Two
purchases recorded on the same date therefore qualify, and so do two
identical duplicate rows, which are two purchases of the same shopper on
the same day. Write your solution as a single `SELECT` query returning
one column — `shopper_id` — with each active shopper appearing exactly
once, in any order.
