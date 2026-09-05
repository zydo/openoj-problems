# Circuit Champions

## Description

A programming circuit closes each season with four finals — spring,
summer, autumn, and winter — and every final crowns exactly one
champion. Two tables record the circuit's history.

Table: `Coders`

| Column Name | Type    |
| ----------- | ------- |
| coder_id    | int     |
| handle      | varchar |

`coder_id` is the primary key (column with unique values) for this
table. Each row holds the id and the handle of one coder on the
circuit.

Table: `Finals`

| Column Name | Type |
| ----------- | ---- |
| year        | int  |
| spring      | int  |
| summer      | int  |
| autumn      | int  |
| winter      | int  |

`year` is the primary key for this table. The other four columns hold
the `coder_id` of the coder who won that season's final in that year —
one champion per column, so one coder's id can appear several times in
a single row.

Count how many finals each coder has won. Coders who never won a final
do not appear in the result.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Coders` rows and, when present, its `Finals` rows before
your query runs. Return the result table in any order. The result
format is in the following examples.

### Example 1

```text
Input:
Coders table:
+----------+--------+
| coder_id | handle |
+----------+--------+
| 1        | Ivy    |
| 2        | Milo   |
| 3        | Zed    |
| 4        | Pia    |
| 5        | Raj    |
+----------+--------+
Finals table:
+------+--------+--------+--------+--------+
| year | spring | summer | autumn | winter |
+------+--------+--------+--------+--------+
| 2031 | 1      | 2      | 1      | 4      |
| 2032 | 2      | 3      | 2      | 1      |
| 2033 | 4      | 1      | 3      | 2      |
+------+--------+--------+--------+--------+
Output:
+----------+--------+------------+
| coder_id | handle | titles_won |
+----------+--------+------------+
| 1        | Ivy    | 4          |
| 2        | Milo   | 4          |
| 3        | Zed    | 2          |
| 4        | Pia    | 2          |
+----------+--------+------------+
Explanation:
Ivy won the 2031 spring, 2031 autumn, 2032 winter, and 2033 summer
finals. Milo won the 2031 summer, 2032 spring, 2032 autumn, and 2033
winter finals. Zed won the 2032 summer and 2033 autumn finals. Pia won
the 2031 winter and 2033 spring finals. Raj never won a final, so Raj
does not appear in the result table.
```

### Example 2

```text
Input:
Coders table:
+----------+--------+
| coder_id | handle |
+----------+--------+
| 1        | Ada    |
| 2        | Ben    |
+----------+--------+
Finals table:
+------+--------+--------+--------+--------+
| year | spring | summer | autumn | winter |
+------+--------+--------+--------+--------+
| 2030 | 2      | 2      | 1      | 2      |
+------+--------+--------+--------+--------+
Output:
+----------+--------+------------+
| coder_id | handle | titles_won |
+----------+--------+------------+
| 1        | Ada    | 1          |
| 2        | Ben    | 3          |
+----------+--------+------------+
Explanation:
In 2030 Ben took the spring, summer, and winter finals, while Ada took
only the autumn final.
```

Write your solution as a single `SELECT` query returning `coder_id`,
`handle`, and `titles_won` — one row for every coder who won at least
one final, where `titles_won` counts that coder's wins across the four
season columns of every year. Coders with no wins appear nowhere in
the result.
