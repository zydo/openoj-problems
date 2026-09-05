# Solutions — Borrowers Holding Both Loan Kinds

## Group per borrower and require both kinds

The qualification is a per-borrower property: among all of a borrower's
rows, at least one must carry `'Refinance'` and at least one must carry
`'Mortgage'`. Collapsing the rows per borrower is exactly what
`GROUP BY borrower_id` does, and the `HAVING` clause turns the
requirement into two counted conditions:
`COUNT(CASE WHEN line_kind = 'Refinance' THEN 1 END)` and its
`'Mortgage'` twin must both exceed zero.

Grouping also settles distinctness for free — each borrower collapses to
one group, so a borrower holding three `'Refinance'` lines and two
`'Mortgage'` lines still yields exactly one output row. Kinds other than
the two targets never increment either counter, so surrounding
`'AutoLoan'` or `'Inschool'` rows are pure noise, and the string
comparison is exact, so near-miss spellings simply do not count. The
surviving groups are emitted with `ORDER BY borrower_id`, the ascending
order the statement fixes.

The query scans the `n` credit-line rows once to build and filter the
groups, and sorts only the qualifying borrowers. **Complexity:**
`O(n log n)` time, `O(n)` space.
