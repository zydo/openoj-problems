# Solutions — Account Balances After Transfers

## Total each side separately, then combine with the opening balance

Two `GROUP BY` subqueries over `Transfers` produce the money flows:
one groups by `payer_id` and sums what each account sent, the other
groups by `payee_id` and sums what each account received. Both are
`LEFT JOIN`ed onto `Accounts`, because an account can sit out one side
entirely — the join then supplies no row for that side, and `COALESCE`
turns the missing total into 0 before the arithmetic happens. That
covers every shape of participation with no special cases: accounts
with no transfers at all, and accounts that only ever paid or only
ever received.

The balance is `opening_balance + received - paid`, projected once as
the output `balance` column and read again inside a `CASE` that emits
`overdrawn` = `"Yes"` only when that figure is strictly negative — a
balance of exactly 0 stays on the right side of the line.

**Complexity:** `O(n)` time and `O(n)` space, where `n` is the number
of transfers — each subquery sweeps `Transfers` once, and the two
aggregates join back onto `Accounts` in a single pass.
