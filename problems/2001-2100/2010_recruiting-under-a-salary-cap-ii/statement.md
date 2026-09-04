# Recruiting Under a Salary Cap II

## Description

Table: `Applicants`

| Column Name  | Type |
| ------------ | ---- |
| applicant_id | int  |
| level        | enum |
| monthly_pay  | int  |

`applicant_id` is the column with unique values for this table. `level` is an
ENUM (category) with values (`'Senior'`, `'Junior'`). Each row describes one
person applying to a team: their identifier, how experienced they are, and the
monthly pay they command. Every applicant's monthly pay is guaranteed to be
unique.

The team is staffing up with a monthly payroll cap of $70,000, spent by
repeatedly signing whoever is cheapest within their level:

- Sign the cheapest senior, then keep signing the next-cheapest senior while
  the cap still covers them.
- Once no senior fits, put whatever payroll remains toward the juniors, again
  signing the cheapest junior each round until none fits.

Write a query that reports the `applicant_id` of every person hired under this
rule.

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
6             Junior  26000
Output:
applicant_id
4
1
2
Explanation: Seniors 1 and 2 cost $55,000 of the cap; senior 3 would push
payroll to $100,000. The leftover $15,000 covers junior 4, while junior 5
would need $30,000. The hired IDs are therefore 4, 1, and 2.
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
5             Junior  33000
Output:
applicant_id
3
4
2
Explanation: Only senior 2 fits, at $35,000; adding senior 1 would cost
$105,000. The remaining $35,000 pays for juniors 3 and 4, while junior 5
would reach $63,000. The hired IDs are therefore 3, 4, and 2.
```

Write your solution as a single query returning the `applicant_id` of every
hired applicant.
