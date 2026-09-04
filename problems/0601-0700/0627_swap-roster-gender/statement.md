# Swap Roster Gender

## Description

Table: `StaffRecord`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| name        | varchar |
| gender      | ENUM    |
| pay         | int     |

`staff_id` is the primary key (column with unique values) for this table.
The `gender` column is an ENUM (category) value of type `('m', 'f')`.
Each row holds one staff member's roster details.

Write a solution to swap all `'f'` and `'m'` values: turn every `'f'`
into `'m'` and every `'m'` into `'f'`. In the original update-style
version of this task, the swap is performed with a single update statement
and no intermediate temporary tables.

The runner's SQL executor judges a single `SELECT` only — it cannot run a
mutation against the table — so your query instead returns the
`StaffRecord` table exactly as it must read after the swap: every staff
member's row present, each `'m'` turned into an `'f'` and each `'f'`
into an `'m'`, every other column untouched. The judge compares the
returned rows as an unordered multiset, so their order does not matter.

Each testcase supplies its own `dataset`: the DDL seeds the `StaffRecord`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: StaffRecord table from the dataset below.
StaffRecord rows:
staff_id  name   gender  pay
11        Amina  f       4800
12        Bo     m       5100
13        Cato   m       3900
14        Dara   f       6200
Output:
staff_id  name   gender  pay
11        Amina  m       4800
12        Bo     f       5100
13        Cato   f       3900
14        Dara   m       6200
Explanation: Amina and Dara change from 'f' to 'm'; Bo and Cato change
from 'm' to 'f'. Their identifiers, names, and pay stay unchanged.
```

Write your solution as a single `SELECT` query returning four columns —
`staff_id`, `name`, `gender`, and `pay` — one row per staff member, with
every gender value swapped and every other column left exactly as it
stands.

## Hints

### Hint 1

The swap is row-local: a row's new gender depends only on that row's own
gender, not on any other row, so the whole query is one pass over
`StaffRecord` with no grouping, no join, and no self-reference.

### Hint 2

`CASE gender WHEN 'm' THEN 'f' ELSE 'm' END` spells the flip. The enum
holds exactly the two values `'m'` and `'f'`, so one matched arm plus the
residual `ELSE` covers every row: the `WHEN` arm carries `'m'` to `'f'`,
and the `ELSE` arm is left to carry `'f'` to `'m'`.

### Hint 3

`staff_id`, `name`, and `pay` pass through untouched — only one column is
rewritten. The judge compares rows as an unordered multiset, and an empty
`StaffRecord` correctly yields zero rows.
