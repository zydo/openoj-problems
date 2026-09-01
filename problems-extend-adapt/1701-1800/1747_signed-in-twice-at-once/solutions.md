# Solutions — Signed In Twice at Once

A user is banned when two of their sessions — from different IP
addresses — were live at the same moment. Sessions live at the same
moment exactly when their intervals overlap, and "at some moment" makes
the endpoints inclusive: a `signed_out` at 18:45:00 collides with a
`signed_in` at 18:45:00 (user 8 in example 1), while 07:59:59 against
08:00:00 does not (user 9 escapes).

## Self-join on overlapping intervals

Join `AccessLog` to itself on the same user, different IP addresses, and
inclusive interval overlap: `a.signed_in <= b.signed_out AND
a.signed_out >= b.signed_in`. Either comparison alone is not enough —
both directions must hold for the intervals to share a moment — and the
`!=` on IP keeps a single address from banning itself across sessions.
`SELECT DISTINCT` collapses the join's duplicated hits into the user
list; the result's row order is free because the comparison is a
multiset.

Timestamps compare as zero-padded `YYYY-MM-DD HH:MM:SS` strings, which
sort lexicographically in chronological order, so the interval test is
plain string comparison. The join is quadratic within a user in the
worst case, which the bounds comfortably allow.

**Complexity:** `O(n^2)` per-user worst case via the join, `O(n)` output.
