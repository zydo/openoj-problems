# Cumulative Monthly Pay

## Description

Table: `Payroll`

| Column Name | Type |
| ----------- | ---- |
| employee_id | int  |
| month       | int  |
| salary      | int  |

`(employee_id, month)` is the primary key. Each row records an employee's
salary for one month of a single year, numbered `1` upward.

For every employee and every worked month except their most recent, report
that month's three-month sum: `salary` for that month plus the two months
immediately before it on the calendar, counting an unworked month as `0`.
Months the employee did not work produce no row.

Order the result by `employee_id` ascending, then `month` descending.

Each test case supplies its own `dataset`: the DDL seeds the `Payroll` table
with that test case's rows. The result format is shown in the following
example.

### Example 1

```text
Input: the Payroll table from the dataset below.
Payroll rows:
employee_id | month | salary
1           | 1     | 10
1           | 2     | 20
1           | 3     | 30
2           | 1     | 5
Output:
employee_id | month | Salary
1           | 2     | 30
1           | 1     | 10
Explanation: Employee 1's most recent worked month is 3, so it is
excluded; month 2 sums 20 + 10 + 0 and month 1 sums 10 + 0 + 0. Employee 2
worked only month 1, which is their most recent, so no row remains.
```

Answer with a single `SELECT` whose output columns are `employee_id`,
`month`, and the three-month sum.

## Hints

### Hint 1

The window is measured on the calendar, not across worked rows: months
`m-2`, `m-1`, and `m` contribute `0` wherever a row is absent.

### Hint 2

A `SUM(salary) OVER (PARTITION BY employee_id ORDER BY month RANGE BETWEEN 2
PRECEDING AND CURRENT ROW)` builds exactly that frame, and comparing each
`month` against the employee's `MAX(month)` keeps every month before the
most recent one.
