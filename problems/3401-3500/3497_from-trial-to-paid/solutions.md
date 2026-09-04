# Solutions — From Trial To Paid

## Join two per-phase averages

An account converts exactly when its usage history holds both a
`free_trial` and a `paid` row — the relative order of the dates is not
part of the contract. Isolate each side with a grouped subquery: one
computes `AVG(minutes)` over only `free_trial` rows, the other over only
`paid` rows, each keyed by `account_id`. An inner join on `account_id`
then keeps precisely the accounts that appear in both groups, which is
the conversion predicate and automatically excludes accounts who only
tried the product or only paid.

Rounding belongs in the outer select: `ROUND(..., 2)` applied to each
computed average after aggregation, so every row of a group contributes
before any precision is lost. `trial_avg_minutes` and `paid_avg_minutes`
are derived independently, so an account with no paid rows would carry a
null average — the inner join removes those accounts before the averages
ever surface.

`ORDER BY account_id` produces the required ascending ordering of the
final row set.

**Complexity:** `O(M log M)` time for the grouping sorts over `M` usage
rows, `O(M)` space for the intermediate per-account aggregates.
