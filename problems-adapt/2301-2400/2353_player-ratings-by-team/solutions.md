# Solutions — Player Ratings by Team

## Lazy-Deletion Heaps per Team

The state is two dictionaries: name → (team, rating), and team → its
members. Only the second needs structure, because a query asks for one
team's front runner and an update touches one member of one team.

Ordering each team's members as pairs `(-rating, name)` makes "highest
rating, ties toward the alphabetically first name" the ordinary minimum,
so a plain min-heap per team — no custom comparator — already answers
`bestPlayer` by peeking at the top.

Updating a rating is where it stays cheap. A heap cannot delete an
arbitrary member efficiently, and it does not need to: `setRating` pushes
a fresh pair and leaves the old one in place as debris. A pair is dead
exactly when its rating disagrees with the current rating recorded for
that name in the first dictionary, so `bestPlayer` peeks the top and pops
while the top is dead. A live top is only ever peeked at, never consumed,
so every heap shrinks monotonically and the total work of all pops is
bounded by the total number of pushes — `n` plus the number of calls.

Walked on Example 1: blue starts with pairs `(-12, ibis)`, `(-9, jack)`,
`(-15, luca)`, so the top is `luca` at 15. After `setRating("jack", 16)`
the heap gains `(-16, jack)`; luca still tops nothing — jack is the new
minimum pair, and the query returns "jack" without any pop. After luca
also rises to 16, the heap holds `(-16, jack)` and `(-16, luca)` at the
front; the minimum pair is jack's, and the tie resolves to the smaller
name, matching the output. The pushed debris from earlier ratings sits
below the top and is never touched.

The Python and Java canonical solutions both use this layout, with the
Java one interning names and teams to integers so its heaps carry
`int[]` pairs instead of strings.

**Complexity:** `O(log n)` per `setRating`, amortized `O(log n)` per
`bestPlayer` (each pushed pair is popped at most once, ever), `O(n + c)`
space for `c` calls.
