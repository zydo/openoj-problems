# Out-Earning The Boss

## Description

Table: `Staff`

| Column Name | Type    |
| ----------- | ------- |
| staffId     | int     |
| name        | varchar |
| salary      | int     |
| reportsTo   | int     |

`staffId` is the primary key (column with unique values) for this
table. Each row gives one staff member's id, name, salary, and the id
of the person they report to.

Find every staff member whose salary is strictly higher than that of
the person they report to.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Staff`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Staff table from the dataset below.
Output:
OutEarner
Priya
Ingrid
Explanation: Priya and Ingrid each out-earn Ravi, the person they
report to; Chen ties Ingrid exactly and a tie is not out-earning, and
Ravi reports to nobody.
```

Write your solution as a single `SELECT` query returning one column,
`OutEarner`: the name of every staff member whose salary is strictly
greater than their manager's.

## Hints

### Hint 1

A row's manager is another row of the same table: `reportsTo` holds
the `staffId` of that manager. Read `Staff` as two copies — one of
staff members, one of managers — and join them on
`e1.reportsTo = e2.staffId` to pair each member with their manager's
row.

### Hint 2

Rows without a manager need no filter of their own: a null
`reportsTo` matches no `staffId` in an inner join — and neither does
one naming an id that is not in the table — so those rows never form a
pair.

### Hint 3

The comparison is strict: `e1.salary > e2.salary` excludes a member
who exactly ties their manager, and each surviving pair contributes
one output row, the member's name.
