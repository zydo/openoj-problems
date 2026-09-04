# Solutions — Bonus Shortfall

## Left join Payout onto Staff

The two qualifying populations — staff members whose bonus is below
1000, and staff members who never got a bonus at all — sit on opposite
sides of a join, so the query is a left join plus a two-branch filter.
`Staff LEFT JOIN Payout ON Staff.staffId = Payout.staffId` keeps every
staff member; a matching `Payout` row fills in the `bonus` column, and a
staff member with no bonus row survives with null there. The
`WHERE bonus < 1000 OR bonus IS NULL` then admits both kinds of row:
real bonuses strictly under 1000, and the nulls that stand for "no
bonus".

Each half of that filter is a trap on its own. `bonus < 1000` alone
loses the bonus-less: in SQL the comparison `null < 1000` is unknown,
not true, so those rows would drop — the explicit `OR bonus IS NULL`
rescues them. The strict `<` matters at the boundary: a bonus of
exactly 1000 is not less than 1000 and does not qualify. Replacing the
left join with an inner join would discard the very staff members the
null branch exists for before the filter ever runs, and `Payout` rows
whose staffId has no `Staff` entry match nothing on a `Staff`-driven
join and never surface on their own. `staffId` is unique in `Payout`, so
each staff member matches at most one bonus row and yields at most one
output row.

With the join key resolved through an index or hash lookup, each of the
`S` `Staff` rows costs one probe into `Payout`, so the join runs in
`O(S + P)` time over `P` payout rows, and only the result itself — at
most `S` rows — is materialized.

**Complexity:** `O(S + P)` time, `O(S)` space.
