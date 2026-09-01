# Solutions — Walk-Ins With No Top-Ups

## Left anti-join onto Topups, grouped and counted

The wanted set is a difference over `Walkins` rows, not over accounts:
`Walkins w LEFT JOIN Topups t ON t.walkin_id = w.walkin_id` keeps every
walk-in, filling in the `Topups` columns when a match exists and
leaving them null otherwise. `WHERE t.topup_id IS NULL` keeps exactly
the unmatched walk-ins — the anti-join, stated inline — regardless of
how many top-ups a matched walk-in carries: a walk-in with three
top-ups produces three joined rows, all non-null, all filtered out, so
it still counts zero toward the total.

Grouping the surviving rows by `w.account_id` and taking `COUNT(*)`
then tallies each account's top-up-free walk-ins in one pass; an
account with no unmatched walk-in at all has nothing left in the group
and drops out of the result on its own, which is the correct behavior
since accounts with zero qualifying walk-ins should not appear.

**Complexity:** `O(n)` time and `O(n)` space, where `n` is the combined
number of walk-in and top-up rows — every row is touched once by the
join and once by the aggregation.
