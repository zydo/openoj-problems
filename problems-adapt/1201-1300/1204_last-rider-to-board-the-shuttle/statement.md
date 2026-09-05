# Last Rider to Board the Shuttle

## Description

Table: `Riders`

| Column Name | Type    |
| ----------- | ------- |
| rider_id    | int     |
| rider_name  | varchar |
| weight      | int     |
| slot        | int     |

`rider_id` is the column with unique values for this table.
Each row describes one person waiting at the shuttle stop: their name,
their weight in kilograms, and the `slot` in which they get their chance
to board. The `rider_id` and `slot` columns together carry every number
from 1 to n, where n is the number of rows. Boarding goes strictly in
`slot` order — `slot = 1` steps on first, `slot = n` would step on last —
and only one rider boards per slot.

The shuttle is rated for at most 1000 kilograms. Riders get on one at a
time in slot order, and the moment letting the next rider aboard would
push the combined weight past that rating, boarding stops: everyone
still waiting stays behind.

Write a solution that returns the `rider_name` of the last rider who
boards without the combined weight exceeding the 1000-kilogram rating.
The test cases are built so that the first rider alone always fits.

The result format is shown in the following examples.

### Example 1

```text
Input:
Riders table:
+----------+------------+--------+------+
| rider_id | rider_name | weight | slot |
+----------+------------+--------+------+
| 2        | Nadia      | 310    | 1    |
| 4        | Omar       | 420    | 2    |
| 1        | Lena       | 380    | 3    |
+----------+------------+--------+------+
Output:
+------------+
| rider_name |
+------------+
| Omar       |
+------------+
Explanation: Nadia boards with 310 kg aboard, Omar raises the total to
730 kg, and Lena would make it 1110 kg — over the rating — so Omar is
the last rider on the shuttle.
```

### Example 2

```text
Input:
Riders table:
+----------+------------+--------+------+
| rider_id | rider_name | weight | slot |
+----------+------------+--------+------+
| 4        | Milo       | 260    | 1    |
| 2        | Vera       | 340    | 2    |
| 5        | Tarek      | 390    | 3    |
| 1        | Juno       | 150    | 4    |
| 3        | Rhea       | 200    | 5    |
+----------+------------+--------+------+
Output:
+------------+
| rider_name |
+------------+
| Tarek      |
+------------+
Explanation: Walking the slots, the combined weight runs 260, 600, 990
— Tarek just squeezes under the rating. Juno would reach 1140 kg, so
she and everyone after her stay behind.
```

Write your solution as a single `SELECT` query returning `rider_name`.
