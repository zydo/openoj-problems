# Borrowers Holding Both Loan Kinds

## Description

Table: `CreditLines`

| Column Name | Type    |
| ----------- | ------- |
| line_id     | int     |
| borrower_id | int     |
| line_kind   | varchar |

`line_id` is the unique key of this table. Each row is one credit line a
borrower holds, recorded with the kind of loan it is — for instance
`'Mortgage'`, `'Refinance'`, `'AutoLoan'`, or `'Inschool'`.

Report every borrower whose credit lines include both of two specific
kinds: at least one line whose `line_kind` is exactly `'Refinance'` and
at least one line whose `line_kind` is exactly `'Mortgage'`. The kinds
are matched as exact strings.

Return the column `borrower_id`, with each qualifying borrower listed
exactly once, ordered by `borrower_id` in ascending order.

Every testcase carries its own `dataset`: the DDL loads the `CreditLines`
table with that testcase's rows. The example below shows the result
format.

### Example 1

```text
Input:
CreditLines table:
+---------+-------------+-----------+
| line_id | borrower_id | line_kind |
+---------+-------------+-----------+
| 911     | 5           | Mortgage  |
| 912     | 5           | AutoLoan  |
| 913     | 5           | Refinance |
| 914     | 8           | Refinance |
| 915     | 8           | Inschool  |
| 916     | 2           | Mortgage  |
| 917     | 2           | Mortgage  |
| 918     | 11          | Inschool  |
| 919     | 11          | Refinance |
| 920     | 11          | Mortgage  |
+---------+-------------+-----------+
Output:
+-------------+
| borrower_id |
+-------------+
| 5           |
| 11          |
+-------------+
Explanation
- Borrower 5 holds a Mortgage line and a Refinance line (plus an
AutoLoan line, which is irrelevant), so borrower 5 qualifies.
- Borrower 8 holds a Refinance line but no Mortgage line, so borrower 8
is left out.
- Borrower 2 holds two Mortgage lines but no Refinance line, so
borrower 2 is left out.
- Borrower 11 holds a Refinance line and a Mortgage line (plus an
Inschool line, which is irrelevant), so borrower 11 qualifies.
The output table lists the qualifying borrowers 5 and 11, ordered by
borrower_id in ascending order.
```

Any other kinds a borrower holds are pure noise: they neither help nor
hurt. A borrower holding several lines of one qualifying kind but none of
the other still does not qualify. Each qualifying borrower appears exactly
once no matter how many matching lines they hold. Because `borrower_id`
is unique per row, the ascending order is total. Write your solution as a
single `SELECT` query.
