# Solutions — Store Ledger I

## Group by clerk and keep the maximum total

The total a clerk rang up is the sum of the `amount` column over
their rows in `Ledger`. Grouping the table by `clerk_id` and summing
`amount` yields every clerk's total in one pass; the answer is then
the set of clerks whose total equals the maximum. Rather than
fetching all totals and comparing in application code, a scalar
subquery computes the maximum total directly — `SELECT MAX(total)
FROM (SELECT SUM(amount) AS total FROM Ledger GROUP BY clerk_id)` —
and the outer grouping keeps exactly the clerks tied at that value,
so ties are reported together.

The derived table over `Ledger` is scanned once to produce the
per-clerk totals, and the outer grouping scans `Ledger` a second time
to sum the same `amount` values; no self-join or window function is
needed.

**Complexity:** `O(N)` time and `O(S)` space for `N` Ledger rows and
`S` distinct clerks (the per-clerk totals).
