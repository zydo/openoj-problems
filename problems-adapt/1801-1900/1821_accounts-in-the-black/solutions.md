# Solutions — Accounts In The Black

Each row of `Accounts` carries one account's earnings for one fiscal
year, keyed by `(account_id, fiscal_year)`, and the question is the
plainest possible filter: which accounts finished the year `2021`
strictly in the black.

## Filter on the year, then on the sign

The query keeps exactly the rows whose `fiscal_year` equals `2021` and
whose `earnings` are greater than zero, and projects the single
`account_id` column. Both predicates are load-bearing: the year
predicate excludes the same account's other years (the example's
account `18` appears only in `2020` and therefore never surfaces), and
the strict inequality excludes zero alongside the losses — an account
whose `2021` row reads `0`, like the example's account `17`, is not in
the black. Because `(account_id, fiscal_year)` is the primary key, an
account owns at most one `2021` row, so the result never repeats an
account and no `DISTINCT` is needed.

Rows come back in any order — the comparison treats the result as a
set of one-column rows, and the engine is free to use whatever order
its scan produces. An empty `Accounts` table, or one with no `2021`
rows at all, yields the empty result.

**Complexity:** `O(n)` time, `O(1)` extra space.
