# Recruiting Under a Salary Cap

## Description

Table: `Applicants`

| Column Name  | Type |
| ------------ | ---- |
| applicant_id | int  |
| level        | enum |
| monthly_pay  | int  |

`applicant_id` is the column with unique values for this table. `level` is an
ENUM (category) type with values (`'Senior'`, `'Junior'`). Each row describes
one person applying to a team: their identifier, how experienced they are, and
the monthly pay they command.

The team is staffing up with a monthly payroll cap of $70,000, spent in two
passes:

- Sign as many seniors as the cap can cover.
- Whatever payroll is left after those signings goes to as many juniors as it
  still covers.

Write a query that reports how many seniors and how many juniors end up hired
under this rule.

The result may be returned in any order.

Each testcase supplies its own `dataset`, whose statements insert all of that
testcase's rows into `Applicants` before your query runs. The result format is
shown in the following examples.

### Example 1

```text
Input:
Applicants table:
applicant_id  level   monthly_pay
1             Senior  25000
2             Senior  30000
3             Senior  45000
4             Junior  12000
5             Junior  18000
6             Junior  25000
Output:
level   hired_count
Senior  2
Junior  1
Explanation: Seniors 1 and 2 cost $55,000 of the cap; bringing in senior 3
would push payroll to $100,000. The leftover $15,000 covers only junior 4, so
the junior count is 1.
```

### Example 2

```text
Input:
Applicants table:
applicant_id  level   monthly_pay
1             Senior  70000
2             Senior  35000
3             Junior  10000
4             Junior  20000
Output:
level   hired_count
Senior  1
Junior  2
Explanation: Senior 2 alone fits at $35,000, since adding senior 1 would cost
$105,000. The remaining $35,000 pays for juniors 3 and 4.
```

Write your solution as a single query returning two columns — `level` and
`hired_count` — with exactly one row for `Senior` and one row for `Junior`,
including a zero count when no applicant in a category is hired.
