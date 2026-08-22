# Reporting Tree Rollup

## Description

Table: `Staff`

| Column Name  | Type    |
| ------------ | ------- |
| staff_id     | int     |
| staff_name   | varchar |
| supervisor_id| int     |
| salary       | int     |
| department   | varchar |

`staff_id` is the unique key. `supervisor_id` is NULL for the person at the
top of the reporting tree.

Write one query that walks the reporting tree and emits, for every person on
staff:

- **depth** — how many levels below the top they sit (the top is depth 1,
  their direct reports depth 2, and so on);
- **reports** — how many people are below them in the tree, direct and
  indirect (0 for someone nobody reports to);
- **payroll** — the salary money they control: the salaries of everyone below
  them plus their own.

Return the rows sorted by `depth` ascending, then `payroll` descending, then
`staff_name` ascending. The sort is part of the judged answer.

Note: one recursive CTE can list every (supervisor, descendant) pair with the
distance between them; the three columns are then aggregates over that
enumeration.

Each test case seeds the table with its own data; the case's `dataset` value
holds the `INSERT` statements to run first.

### Example 1

```text
Input: Staff table from the dataset below.
Output:
staff_id | staff_name | depth | reports | payroll
1        | Nadia      | 1     | 7       | 81000
3        | Priya      | 2     | 4       | 42000
2        | Omar       | 2     | 1       | 19000
5        | Ravi       | 3     | 2       | 21500
6        | Sara       | 3     | 0       | 8500
4        | Quinn      | 3     | 0       | 8000
8        | Umar       | 4     | 0       | 6500
7        | Tara       | 4     | 0       | 6000
Explanation: Nadia heads the tree. Priya supervises Ravi and Sara, and Ravi
supervises Tara and Umar, so Priya's subtree holds four people and her payroll
is 12000 + 9000 + 8500 + 6000 + 6500 = 42000. Omar's subtree is just Quinn.
Ties inside a depth row break by payroll first (Ravi before Sara and Quinn)
and then by name (Umar before Tara).
```

Answer with one `SELECT` query returning the columns `staff_id`,
`staff_name`, `depth`, `reports`, and `payroll`.

## Hints

### Hint 1

Depth and the two subtree aggregates answer to different questions: build one
recursive enumeration of (ancestor, descendant, distance) rows and derive all
three from it.

### Hint 2

`reports` counts each subtree's rows except the root itself; `payroll` sums the
descendant salaries and then adds the root's own on top.

### Hint 3

The final ORDER BY (depth, payroll DESC, staff_name) is judged exactly — do not
leave it out.
