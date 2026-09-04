# Runner-Up Earners By Unit

## Description

Table: `Payroll`

| Column Name | Type    |
| ----------- | ------- |
| worker_id   | int     |
| wage        | int     |
| unit        | varchar |

`worker_id` is the unique key for this table. Each row of this table
describes one worker: their id, their wage, and the unit they work in.

Write a solution to find the runner-up earners in every unit — the
workers paid the second-highest distinct wage of their unit. If several
workers are paid exactly that amount, every one of them is reported. A
unit whose wages never take two distinct values — a single worker, or
several workers all on one shared wage — has no runner-up and
contributes nothing.

Return the result table ordered by `worker_id` in ascending order.

Each testcase supplies its own `dataset`: the script seeds the `Payroll`
table with that testcase's rows. The result format is shown in the
following examples.

### Example 1

```text
Input:
Payroll table:
+-----------+-------+-------+
| worker_id | wage  | unit  |
+-----------+-------+-------+
| 101       | 48000 | Forge |
| 102       | 51000 | Forge |
| 103       | 51000 | Forge |
| 104       | 47000 | Forge |
| 105       | 60000 | Atlas |
| 106       | 53000 | Atlas |
| 107       | 61000 | Atlas |
| 108       | 45000 | Pivot |
| 109       | 45000 | Pivot |
+-----------+-------+-------+
Output:
+-----------+-------+
| worker_id | unit  |
+-----------+-------+
| 101       | Forge |
| 105       | Atlas |
+-----------+-------+
Explanation: Forge's top wage is 51000, held by workers 102 and 103;
the runner-up wage is 48000, held only by worker 101. Atlas's top wage
is 61000, so its runner-up is 60000 — worker 105. Pivot's two workers
earn the same 45000, so the unit never has two distinct wages and is
left out entirely.
```

### Example 2

```text
Input:
Payroll table:
+-----------+-------+--------+
| worker_id | wage  | unit   |
+-----------+-------+--------+
| 201       | 72000 | Summit |
| 202       | 71000 | Summit |
| 203       | 71000 | Summit |
| 204       | 58000 | Ledge  |
| 205       | 66000 | Ledge  |
+-----------+-------+--------+
Output:
+-----------+--------+
| worker_id | unit   |
+-----------+--------+
| 202       | Summit |
| 203       | Summit |
| 204       | Ledge  |
+-----------+--------+
Explanation: In Summit the second-highest distinct wage is 71000, and
both workers earning it — 202 and 203 — are reported together. Ledge's
runner-up wage is 58000, held by worker 204.
```

Write your solution as a single `SELECT` query returning two columns —
`worker_id` and `unit`, in that order. Within each unit the
second-highest distinct wage wins: every worker earning exactly that
value is returned together, and a unit whose wages never take two
distinct values contributes no rows. Rows come back ordered by
`worker_id` ascending.
