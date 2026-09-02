# Solutions — Round Robin Fixture List

## Join the table to itself, keep the non-identical pairs

The answer lives at the pair grain while the input sits at the club
grain, so the table is joined to itself: `Clubs a` proposes every home
candidate, `Clubs b` every away candidate, and the join condition
`a.club_name <> b.club_name` keeps exactly the ordered pairs of
distinct clubs. The inequality is what does all the work — it discards
the identity pairs `(c, c)` the cross product would otherwise emit,
and it leaves both orientations of every matchup in place, which is
precisely the two-legged format: `(x, y)` and `(y, x)` are different
fixtures and both must be reported.

Because `comparison` is a multiset over two columns, any row order is
accepted; nothing needs an `ORDER BY`. An empty or single-club entry
list has no pair of distinct clubs to join on, so the result is empty —
which is correct, not degenerate.

The self-join materializes the full n x n cross product before
filtering, producing `n^2` candidate combinations of which the answer's
`n * (n - 1)` rows survive; each surviving row is emitted directly with
no aggregation or sort on top.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
