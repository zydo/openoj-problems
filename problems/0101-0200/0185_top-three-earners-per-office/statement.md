# Top Three Earners Per Office

## Description

Table: `Analysts`

| Column Name | Type    |
| ----------- | ------- |
| analystId   | int     |
| name        | varchar |
| salary      | int     |
| officeId    | int     |

`analystId` is the primary key (column with unique values) for this
table. `officeId` is a foreign key referencing the `officeId` of the
`Offices` table. Each row gives one analyst's id, name, salary, and
office.

Table: `Offices`

| Column Name | Type    |
| ----------- | ------- |
| officeId    | int     |
| officeName  | varchar |

`officeId` is the primary key (column with unique values) for this
table. Each row names one office.

Management wants to see who earns the most in each office. A top
earner in an office is an analyst whose salary is one of the top
three unique salaries paid there.

Find the top earners in every office.

Return the result table in any order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Analysts` rows and `Offices` rows before your query runs —
either table may hold no rows for a testcase. The result format is in
the following example.

### Example 1

```text
Input: Analysts and Offices tables from the dataset below.
Output:
Office  Analyst  Pay
North   Ade      95000
North   Bo       88000
North   Cy       88000
North   Di       76000
Harbor  Fay      81000
Harbor  Gus      64000
Explanation: In the North office:
- Ade earns the highest unique salary
- Bo and Cy tie at the second-highest unique salary
- Di earns the third-highest unique salary
- Ed's 70000 is only the fourth unique salary, so Ed is left out
In the Harbor office:
- Fay earns the highest salary
- Gus earns the second-highest, and with only two unique salaries
  there is no third to reach for
```

Write your solution as a single `SELECT` query returning three columns
— `Office`, `Analyst`, and `Pay` — one row for every top earner: every
analyst whose salary is one of the top three unique salaries of their
office, ties included.

### Constraints

- No two analysts share the same name, salary, and office all at
  once.

## Hints

### Hint 1

"Top three unique salaries" counts distinct salary values, not
analysts: rank the salary values of each office from the highest down,
then admit every analyst whose value carries one of the three best
ranks — a tie at a value must not eat a rank.

### Hint 2

`DENSE_RANK() OVER (PARTITION BY officeId ORDER BY salary DESC)`
numbers each office's distinct salaries from the top and hands every
analyst tied at a value the same rank, so filtering `rank <= 3` keeps
exactly the top earners — whole ties at the third unique salary
included, and every analyst of an office with fewer than three unique
salaries.

### Hint 3

The office name arrives through a join on `officeId`: analysts whose
`officeId` has no `Offices` row match nothing and drop out, and an
office with no analysts contributes no rows.
