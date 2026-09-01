# Comparison Verdicts

## Description

A tiny expression evaluator keeps its named numbers in one table and a
queue of pairwise checks in another. Decide, for every check, whether
it holds.

Table: `Symbols`

| Column Name | Type    |
| ----------- | ------- |
| name        | varchar |
| value       | int     |

`name` is the primary key of this table: each row stores one named
number, and no two rows share a name.

Table: `Comparisons`

| Column Name | Type    |
| ----------- | ------- |
| left_name   | varchar |
| op          | enum    |
| right_name  | varchar |

`(left_name, op, right_name)` is the primary key of this table. `op` is
one of `('>', '<', '=')`. Both `left_name` and `right_name` are
guaranteed to name a row of `Symbols`.

Substitute each side's stored number into its comparison and report the
outcome. The `verdict` column is the string `'true'` when the
comparison holds and `'false'` when it does not.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Symbols` and `Comparisons` rows before your query runs.
Return the result table in any order. The result format is in the
following example.

### Example 1

```text
Input:
Symbols
+------+-------+
| name | value |
+------+-------+
| n    | 5     |
| m    | 12    |
| k    | 5     |
+------+-------+
Comparisons
+-----------+----+------------+
| left_name | op | right_name |
+-----------+----+------------+
| n         | <  | m          |
| m         | <  | n          |
| n         | =  | k          |
| k         | >  | n          |
| m         | >  | k          |
| m         | =  | m          |
+-----------+----+------------+
Output:
+-----------+----+------------+---------+
| left_name | op | right_name | verdict |
+-----------+----+------------+---------+
| n         | <  | m          | true    |
| m         | <  | n          | false   |
| n         | =  | k          | true    |
| k         | >  | n          | false   |
| m         | >  | k          | true    |
| m         | =  | m          | true    |
+-----------+----+------------+---------+
Explanation: `n` holds 5, `m` holds 12 and `k` holds 5. So `n < m` is
true, `m < n` is false, `n = k` is true (both sides hold 5), `k > n`
is false, `m > k` is true, and any name compared to itself with `=`
gives true.
```

Write your solution as a single `SELECT` query returning four columns —
`left_name`, `op`, `right_name` and `verdict` — one row per comparison.

## Hints

### Hint 1

A comparison's two sides live in `Symbols`, so join that table twice —
once keyed on `left_name`, once on `right_name` — to bring both stored
numbers onto the comparison's row.

### Hint 2

Branch on `op`: for each of `'>'`, `'<'` and `'='`, compare the two
joined values and emit `'true'` when the branch's condition holds,
`'false'` otherwise.
