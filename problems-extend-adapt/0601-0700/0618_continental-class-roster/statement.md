# Continental Class Roster

## Description

Table: `Enrollee`

| Column Name | Type    |
| ----------- | ------- |
| name        | varchar |
| region      | varchar |

This table may contain duplicate rows. Each row of this table records
the name of an enrollee and the region they came from.

A school has enrollees from Asia, Europe, and America.

Write a solution to pivot the `region` column so that each name is
sorted alphabetically and displayed underneath its corresponding region.
The output headers should be `America`, `Asia`, and `Europe`,
respectively: row `i` of the report holds the `i`-th name of each region
in that region's own alphabetical order, and when a region runs out of
enrollees its column reads `NULL` for the remaining rows. The report has
one row per enrollee from America.

The test cases are generated so that the number of enrollees from
America is not less than the number from either Asia or Europe.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Enrollee`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Enrollee table from the dataset below.
Enrollee rows:
name  | region
Amy   | America
Kent  | America
Zane  | America
Omar  | Asia
Priya | Asia
Elin  | Europe
Output:
America  Asia  Europe
Amy      Omar  Elin
Kent     Priya null
Zane     null  null
Explanation: each region's names sort alphabetically — America reads
Amy, Kent, Zane; Asia reads Omar, Priya; Europe reads Elin. The first
row pairs each region's first name, the second row holds America's
second name with Asia's second name and NULL for Europe (which ran out
after one), and the third row holds America's third name with NULL in
the Asia and Europe columns, which have both run out of enrollees.
```

Write your solution as a single `SELECT` query returning three columns —
`America`, `Asia`, and `Europe` — the roster, with one row per enrollee
from America.

## Hints

### Hint 1

The roster pairs positions, not enrollees: the `i`-th output row holds
the `i`-th name of each region in that region's own alphabetical order,
so each column is that region's sorted name list read top to bottom,
with `NULL` once the region runs out. America's list is never shorter
than the others, so the roster has exactly as many rows as America has
enrollees.

### Hint 2

`ROW_NUMBER() OVER (PARTITION BY region ORDER BY name)` stamps every row
with its position inside its region — 1 for the alphabetically first
name, then upward. Equal names take neighboring positions in arbitrary
order, which changes nothing: the values sitting at those positions are
equal, so whichever duplicate stands where, the column reads the same.

### Hint 3

The pivot itself is `GROUP BY` that row number: each group gathers one
name from each region, and `MAX(CASE WHEN region = 'America' THEN name
END)` — spelled three times, once per region — lifts the group's name
into its output column, because the `CASE` is non-`NULL` for exactly one
region per group and `MAX` skips the `NULL`s the other two produce.
