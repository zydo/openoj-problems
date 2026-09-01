# Solutions — Buddies with Shared Streams

Streaming alike here is the intersection of two facts already stored
separately: a buddy edge, and a shared streaming history — three or more
distinct tracks on one common day. The query builds the shared-history
pairs first, then keeps only those that exist as buddy edges.

## Self-join, per-day count, buddy join

The `common` CTE joins `Streams` against itself on equal `track_id` and
equal `day` with `l1.listener_id < l2.listener_id` — the strict
inequality kills self-pairs and canonicalizes each unordered pair with
its smaller id first, which is exactly the orientation `Buddies` stores.
`DISTINCT` collapses the duplicate rows the schema allows, so a track
streamed together twice on one day still counts once.

The qualification is day-scoped: `qualifying` groups by `(u1, u2, d)` and
keeps groups with `COUNT(DISTINCT s) >= 3`, which reads "some single day
on which both listeners streamed at least three common tracks". Grouping
by the day is what the statement's example demands — buddies who shared
one track on Saturday and two more on Sunday do not stream alike. The
final step joins `qualifying` against `Buddies` on the stored orientation
(`DISTINCT` absorbs pairs that qualified on several days), so each
qualifying pair survives exactly once as `buddy1_id` < `buddy2_id`,
matching the input representation.

The self-join is quadratic in the listeners a popular (track, day)
attracts, but each step only pairs up rows that already agree on the
join keys, so the work stays proportional to the produced matches —
comfortably inside the limits at the corpus sizes.

**Complexity:** `O(L²)` time in the worst case over matching (track, day)
groups, `O(L²)` space for the join output.
