# Relabeling The Columns

## Description

Table: `Entrants`

| Column Name | Type |
| ----------- | ---- |
| ticket_no   | int  |
| given_name  | text |
| family_name | text |
| years_old   | int  |

Write a query that relabels the table's columns — every row and every
value passes through untouched — as follows:

```text
ticket_no   to entrant_id
given_name  to entrant_first
family_name to entrant_last
years_old   to entrant_age
```

Each testcase supplies its own `dataset`: the script seeds the
`Entrants` table with that testcase's rows before your query runs. The
judge inspects result column names as well as row values, so the
relabeled headers are part of the answer.

The result format is in the following example.

### Example 1

```text
Input:
Entrants table:
+-----------+------------+-------------+-----------+
| ticket_no | given_name | family_name | years_old |
+-----------+------------+-------------+-----------+
| 3         | Lena       | Brandt      | 29        |
| 1         | Omar       | Haddad      | 41        |
| 2         | June       | Park        | 35        |
+-----------+------------+-------------+-----------+
Output:
+------------+---------------+--------------+-------------+
| entrant_id | entrant_first | entrant_last | entrant_age |
+------------+---------------+--------------+-------------+
| 3          | Lena          | Brandt       | 29          |
| 1          | Omar          | Haddad       | 41          |
| 2          | June          | Park         | 35          |
+------------+---------------+--------------+-------------+
Explanation:
The four columns keep their values and their order; only the headers
change, to entrant_id, entrant_first, entrant_last, and entrant_age.
```

Write your solution as a single `SELECT` query over `Entrants` whose
result exposes exactly the four new column names above, in that
order, carrying the table's rows unchanged — the rows come back in
their seeded order.

## Hints

### Hint 1

A pure re-labeling needs no computation at all: project each column
through an alias — `ticket_no AS entrant_id`, `given_name AS
entrant_first`, and so on — and select nothing else. The aliases alone
produce the new headers while the underlying values pass through
untouched.
