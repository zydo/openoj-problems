# Water Held Between the Bars

## Description

Table: `Bars`

| Column Name | Type |
| ----------- | ---- |
| position    | int  |
| height      | int  |

`position` is the primary key (column with unique values) for this
table, and it is guaranteed to be in sequential order.

Each row of this table places one bar of the landscape: `position`
gives its slot along the ground and `height` how tall it stands.

Measure how much water the landscape catches after a rain: each bar is
one unit wide, and water pools on the dips between taller bars.

Return the result table in any order.

Every test case ships its own `dataset`: the statements inside it
populate `Bars` before your query executes. The result format is in
the following examples.

### Example 1

![diagram](figures/3061-1.svg)

```text
Input:
Bars table:
+---------+--------+
| position | height |
+---------+--------+
| 1       | 0      |
| 2       | 1      |
| 3       | 0      |
| 4       | 2      |
| 5       | 1      |
| 6       | 0      |
| 7       | 1      |
| 8       | 3      |
| 9       | 2      |
| 10      | 1      |
| 11      | 2      |
| 12      | 1      |
+---------+--------+
Output:
+--------------------+
| total_pooled_water |
+--------------------+
| 6                  |
+--------------------+
Explanation: The drawing above shows the skyline the twelve rows
describe, with position running along the ground and the bar heights
[0,1,0,2,1,0,1,3,2,1,2,1] rising from it. The shaded region is where
the rain settles — 6 units in total.
```

### Example 2

```text
Input:
Bars table:
+---------+--------+
| position | height |
+---------+--------+
| 1       | 5      |
| 2       | 2      |
| 3       | 4      |
| 4       | 1      |
| 5       | 3      |
| 6       | 2      |
| 7       | 4      |
+---------+--------+
Output:
+--------------------+
| total_pooled_water |
+--------------------+
| 8                  |
+--------------------+
Explanation: The first bar towers over everything to its right, so the
water level at each later slot is set by the tallest bar between it
and the end: 2 units sit over position 2, 3 over position 4, 1 over
position 5, and 2 over position 6 — 8 units all together.
```

Write your solution as a single `SELECT` query returning one column,
`total_pooled_water`, holding exactly one row: the total number of
water units caught across the whole landscape. A bar's own width is 1,
so it holds `min(tallest bar to its left, tallest bar to its right) -
height` units of water when that difference is positive and nothing
otherwise, and the query reports the grand total over all bars. When
nothing is caught anywhere the single row still appears, carrying 0 —
an empty dataset yields the one row 0 rather than no rows. The judge
compares result rows as an unordered multiset, so with exactly one row
there is nothing to order.
