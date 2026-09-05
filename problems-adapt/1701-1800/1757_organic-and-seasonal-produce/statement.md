# Organic and Seasonal Produce

## Description

A farmers' market lists everything on its stalls in one table.
`Produce` holds one row per item for sale: the item's id and two yes/no
flags describing it.

Table: `Produce`

| Column Name | Type |
| ----------- | ---- |
| produce_id  | int  |
| organic     | enum |
| seasonal    | enum |

`produce_id` is the primary key (column with unique values) for this
table.

`organic` is an ENUM (category) of type `('Y', 'N')` where `'Y'` means
this item was grown organically and `'N'` means it was not.

`seasonal` is an ENUM (category) of type `('Y', 'N')` where `'Y'` means
this item is currently in season and `'N'` means it is not.

Find the ids of the items that are both organic and in season.

The result rows may come back in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Produce table:
+------------+---------+----------+
| produce_id | organic | seasonal |
+------------+---------+----------+
| 1          | N       | Y        |
| 2          | Y       | Y        |
| 3          | Y       | N        |
| 4          | N       | N        |
| 5          | Y       | Y        |
+------------+---------+----------+
Output:
+------------+
| produce_id |
+------------+
| 2          |
| 5          |
+------------+
Explanation: Only items 2 and 5 are both organic and in season.
```

### Example 2

```text
Input:
Produce table:
+------------+---------+----------+
| produce_id | organic | seasonal |
+------------+---------+----------+
| 7          | Y       | N        |
| 8          | N       | Y        |
+------------+---------+----------+
Output:
+------------+
| produce_id |
+------------+
+------------+
Explanation: Each item carries one flag but not the other, so no item
qualifies and the result is empty.
```

Write your solution as a single `SELECT` query returning `produce_id`
for every item that is both organic and in season, in any order.
