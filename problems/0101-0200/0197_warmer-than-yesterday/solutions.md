# Solutions — Warmer Than Yesterday

## Self-join on yesterday

The condition relates two rows of the same table — a day's reading and
the reading of the calendar day before it — so the query joins
`Readings` with itself: `Readings w1` (today) against `Readings w2`
(yesterday) on `w1.takenOn = DATE(w2.takenOn, '+1 day')`. SQLite's
`DATE` modifier performs true calendar arithmetic — month edges, year
edges, and leap days all resolve to the actual next day — and because
`takenOn` values are unique, each row pairs with at most one yesterday.
The filter `w1.degrees > w2.degrees` keeps strictly hotter days: equal
readings and cool-offs are excluded. Only `w1.readingId` is projected,
so one row leaves per qualifying day.

Days without a yesterday never appear: the table's first day, and any
day whose predecessor is missing because the dates have a gap, match
nothing in the join — the correct no-comparison behavior rather than a
special case. The mirror form `w2.takenOn = DATE(w1.takenOn, '-1 day')`
states the same pairing from the other side; a LAG window over
`takenOn` reaches it too (`LAG(degrees) OVER (ORDER BY takenOn)`
compared against the current row), but the self-join needs no ordering
and names the day relation directly.

The join builds one lookup structure over `w2`'s rows and probes it
once per `w1` row — with `W` rows in `Readings` that is one pass plus
the probe structure; absent any index on the date column the engine may
nested-loop the pairing at `O(W^2)` comparisons instead.

**Complexity:** `O(W)` time, `O(W)` space.
