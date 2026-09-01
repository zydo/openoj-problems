# Solutions — Suggest Buddies from Shared Streams

A suggestion needs two facts to hold at once: a shared streaming history
(three or more distinct tracks on one common day) and the absence of a
buddy edge. The query therefore builds the shared-history pairs first,
then subtracts the buddy edges, and finally reflects every surviving pair
in both directions.

## Self-join, per-day count, anti-join, both directions

The `common` CTE joins `Streams` against itself on equal `track_id` and
equal `day` with `l1.listener_id < l2.listener_id` — the strict
inequality kills self-pairs and canonicalizes each unordered pair with
its smaller id first, which matters later because `Buddies` stores
exactly that orientation. `DISTINCT` collapses the duplicate rows the
schema allows, so a track streamed together twice on one day still
counts once.

The qualification is day-scoped: `qualifying` groups by `(u1, u2, d)`
and keeps groups with `COUNT(DISTINCT s) >= 3`, which reads "some single
day on which both listeners streamed at least three common tracks".
Grouping by the day is what the statement's example demands — two
listeners who shared one track on Saturday and two more on Sunday are
not suggested. `pairs` then deduplicates across days (a pair qualifying
on several days still emits one row per direction) and drops buddy edges
via `NOT EXISTS`, probing `Buddies` in its stored `buddy1_id < buddy2_id`
orientation. The final `UNION ALL` reflects each pair both ways, giving
the directional suggestions the statement asks for.

The self-join is quadratic in the listeners a popular (track, day)
attracts, but each step only pairs up rows that already agree on the
join keys, so the work stays proportional to the produced matches —
comfortably inside the limits at the corpus sizes.

**Complexity:** `O(L²)` time in the worst case over matching (track, day)
groups, `O(L²)` space for the join output.
