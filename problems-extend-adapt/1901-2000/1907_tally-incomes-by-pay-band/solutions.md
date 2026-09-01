# Solutions — Tally Incomes by Pay Band

Every wallet lands in exactly one of three bands, so the answer is three
independent counts over the same table, glued into one row set — no join,
no grouping column, just one counted scan per band.

## One counted scan per band, UNION ALL

Each branch of the `UNION ALL` reads `Wallets` through a `CASE` that
marks only the rows its band owns: `monthly_income < 20000` for `"Low
Salary"`, `BETWEEN 20000 AND 50000` for `"Average Salary"` (the band is
inclusive on both ends, so exactly 20000 and exactly 50000 are average),
and `monthly_income > 50000` for `"High Salary"`. `COUNT` ignores the
NULL a non-matching row produces, so each branch returns one number —
the size of its band — with the band name riding along as a literal.

`COUNT` rather than `SUM` is what makes the empty-band case fall out
for free: `SUM` over zero rows is NULL, but `COUNT` over zero rows is 0,
which is exactly the value the statement demands for a band no wallet
lands in. The three branches run with no `WHERE` between them, so even
an empty `Wallets` still yields all three rows as zeroes, and no wallet
is ever dropped or double-counted because every `monthly_income`
satisfies exactly one of the three mutually exclusive, collectively
exhaustive conditions.

**Complexity:** `O(n)` time (three linear scans of the table), `O(1)` extra
space.
