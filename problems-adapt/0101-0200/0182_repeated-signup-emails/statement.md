# Repeated Sign-Up Emails

## Description

Table: `Signups`

| Column Name | Type    |
| ----------- | ------- |
| signupId    | int     |
| email       | varchar |

`signupId` is the primary key (column with unique values) for this
table. Each row records the email used for one sign-up. The emails
will not contain uppercase letters.

Report the addresses that were used for more than one sign-up — every
email that appears in at least two rows. The email field is never
null.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Signups`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Signups table from the dataset below.
Output:
RepeatedEmail
aiko@example.com
lin@example.com
Explanation: lin@example.com was used twice and aiko@example.com also
twice, so both are repeated; omar@example.com and pri@example.com each
belong to a single sign-up.
```

Write your solution as a single `SELECT` query returning one column,
`RepeatedEmail`, with one row for each email that appears two or more
times in `Signups` — every repeated address listed exactly once, and
no other rows.

## Hints

### Hint 1

The answer is a property of each address as a whole — how many rows
carry it — not of any single row. GROUP BY email turns each distinct
address into one group whose size COUNT(email) reports.

### Hint 2

Filter groups with HAVING, not WHERE: `HAVING COUNT(email) > 1` keeps
exactly the groups of size two or more, so each repeated email
survives as one output row and one-time addresses drop out.

### Hint 3

No deduplication and no empty-table special case remain: one surviving
group per repeated address is already one row, and zero groups over an
empty table is itself zero rows. Alias the column (`email AS
RepeatedEmail`) to name the output.
