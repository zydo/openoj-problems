# Leads With Five or More Reports

## Description

Table: `Personnel`

| Column  | Type    |
| ------- | ------- |
| id      | int     |
| name    | varchar |
| team    | varchar |
| lead_id | int     |

`id` is the primary key (the column with unique values) for this table.
Each row indicates the name of an employee, their team, and the id of
their team lead. If `lead_id` is null, then the employee has no lead. No
employee will be the lead of themself.

Write a solution to find the leads with at least five direct reports — the
employees whose `id` appears in the `lead_id` column of five or more
distinct rows.

Return the result table in any order.

Each test case supplies its own `dataset`: the DDL seeds the `Personnel`
table with that test case's rows. The result format is shown in the
following example.

### Example 1

```text
Input: the Personnel table from the dataset below.
Output:
name
Aria
Explanation: Bram, Cora, Drew, Evan, and Faye all carry lead_id 10, so
employee 10, Aria, has five direct reports and is the only qualifying
lead. Bram (11) has just three direct reports — Glen, Hana, Ivo.
```

Answer with a single `SELECT` query returning one column, `name`: the name
of every lead with at least five direct reports.

## Hints

### Hint 1

A lead's direct reports are exactly the rows whose `lead_id` equals that
lead's `id`: `GROUP BY lead_id` collapses them into one group per lead,
and `HAVING COUNT(*) >= 5` keeps precisely the groups of five or more —
the surviving `lead_id` values are the qualifying leads' ids.

### Hint 2

An employee whose `lead_id` is null has no lead, and those rows form their
own group under `GROUP BY lead_id` — but null never equals an `id`, so
that group can never name a qualifying lead, however many lead-less
employees share it. The converse still holds: a lead-less employee is a
perfectly normal lead, and rows pointing at their `id` count for them like
any others.

### Hint 3

Mapping ids back to names is a membership test: `WHERE id IN (subquery)`
keeps the `Personnel` rows of the qualifying leads, and the projection is
the single column `name` — the judge compares rows as an unordered
multiset, so no `ORDER BY` is needed.
