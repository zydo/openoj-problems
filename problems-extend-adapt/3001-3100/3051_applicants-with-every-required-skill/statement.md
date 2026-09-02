# Applicants With Every Required Skill

## Description

Table: `Applicants`

| Column Name  | Type    |
| ------------ | ------- |
| applicant_id | int     |
| skill        | varchar |

`(applicant_id, skill)` is the primary key (columns with unique values)
for this table. Each row records one skill named by one applicant — an
applicant who lists five skills occupies five rows.

An analytics team is screening applicants for a data role and has fixed
the required toolkit: `Python`, `Tableau`, and `PostgreSQL`. An
applicant qualifies only by holding all three of those skills at once —
extra skills neither help nor hurt, and near-misses like `python` or
`Tableaus` do not count.

Return the result table containing the id of every qualifying applicant,
ordered by `applicant_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it
populate `Applicants` before your query executes. The result format is
in the following example.

### Example 1

```text
Input:
Applicants table:
+--------------+------------+
| applicant_id | skill      |
+--------------+------------+
| 401          | Python     |
| 401          | Tableau    |
| 401          | PostgreSQL |
| 402          | Python     |
| 402          | Tableau    |
| 403          | Excel      |
| 403          | Python     |
| 403          | TensorFlow |
| 403          | PostgreSQL |
| 403          | Tableau    |
| 404          | SQL Server |
| 404          | R          |
+--------------+------------+
Output:
applicant_id
401
403
Explanation: Applicants 401 and 403 are the only ones holding all three
required skills — 403 also carries Excel and TensorFlow, which changes
nothing. Applicant 402 is missing PostgreSQL, and 404 holds none of the
trio. The output is sorted by applicant_id in ascending order.
```

Write your solution as a single `SELECT` query returning one column,
`applicant_id`, with one row for every applicant proficient in all
three of the required skills — each qualifying applicant listed exactly
once, and no other rows. Proficiency means a row whose `skill` is
precisely the required name: skill matching is exact and case-sensitive.

## Hints

### Hint 1

The answer is a property of each applicant as a whole — which required
skills they hold — not of any single row. Grouping the table by
`applicant_id` turns every applicant into one group whose surviving
rows tell you exactly what that applicant is proficient in.

### Hint 2

`WHERE skill IN ('Python', 'Tableau', 'PostgreSQL')` first keeps only
the rows carrying a required skill; the match is exact and
case-sensitive, so `python`, `Pythons`, and `Python` with a trailing
space are different strings that fall through the filter without
helping their owner. `HAVING COUNT(DISTINCT skill) = 3` then keeps
exactly the groups holding all three — counting bare rows instead would
promote an applicant holding any three unrelated skills, Excel and
TensorFlow included.

### Hint 3

`ORDER BY applicant_id ASC` honors the statement's demand that smaller
ids stand first. The judge compares result rows as an unordered
multiset, so the sort dresses the answer rather than deciding it — and
no contention is possible anyway: every qualifying applicant
contributes exactly one output row, so the demanded order is total.
