# The Head Of The Line

## Description

Table: `LineUp`

| Column Name    | Type |
| -------------- | ---- |
| slot_no        | int  |
| entrant_id     | int  |
| entrant_name   | text |
| entrant_town   | text |
| entrant_points | int  |

Each row of `LineUp` holds one person standing in a check-in line: the
entrant's id, name, home town, and points, together with the person's
1-based place in the line.

Each testcase supplies its own `dataset`: the script seeds the `LineUp`
table with that testcase's line before your query runs.

Report the head of the line: the first three people in it, in line
order. When the line holds fewer than three people, report everyone in
it. The result format is in the following examples.

### Example 1

```text
Input:
LineUp table:
+---------+------------+--------------+--------------+----------------+
| slot_no | entrant_id | entrant_name | entrant_town | entrant_points |
+---------+------------+--------------+--------------+----------------+
| 1       | 308        | Mira         | Ostend       | 612            |
| 2       | 97         | Theo         | Ghent        | 75             |
| 3       | 451        | Sana         | Leuven       | 2380           |
| 4       | 12         | Pavel        | Namur        | 9              |
| 5       | 233        | June         | Bruges       | 507            |
| 6       | 76         | Ravi         | Antwerp      | 1544           |
+---------+------------+--------------+--------------+----------------+
Output:
+------------+--------------+--------------+----------------+
| entrant_id | entrant_name | entrant_town | entrant_points |
+------------+--------------+--------------+----------------+
| 308        | Mira         | Ostend       | 612            |
| 97         | Theo         | Ghent        | 75             |
| 451        | Sana         | Leuven       | 2380           |
+------------+--------------+--------------+----------------+
Explanation:
Mira, Theo, and Sana hold slots 1 through 3, so they are the head of
the line; the people behind them are not reported.
```

### Example 2

```text
Input:
LineUp table:
+---------+------------+--------------+--------------+----------------+
| slot_no | entrant_id | entrant_name | entrant_town | entrant_points |
+---------+------------+--------------+--------------+----------------+
| 1       | 88         | Nadia        | Hasselt      | 21             |
| 2       | 5          | Omar         | Mechelen     | 499            |
+---------+------------+--------------+--------------+----------------+
Output:
+------------+--------------+--------------+----------------+
| entrant_id | entrant_name | entrant_town | entrant_points |
+------------+--------------+--------------+----------------+
| 88         | Nadia        | Hasselt      | 21             |
| 5          | Omar         | Mechelen     | 499            |
+------------+--------------+--------------+----------------+
Explanation:
The line holds only two people, so both are reported — a short line
still reports its whole head.
```

Write your solution as a single `SELECT` query returning exactly four
columns, `entrant_id`, `entrant_name`, `entrant_town`, then
`entrant_points`: the line's first three people in line order, or all of
them when the line is shorter than three.

## Hints

### Hint 1

The line's own order is the `slot_no` order, so recover it with a sort
and then cut the scan short: ordering by `slot_no` and applying `LIMIT 3`
keeps exactly the head of the line, and a limit longer than the table
simply lets every row through when the line is short.
