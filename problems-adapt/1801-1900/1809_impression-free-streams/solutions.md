# Solutions — Impression-Free Streams

A stream counts as impression-free only when no impression row matches
it on both the viewer and the clock: an impression belongs to a stream
exactly when its `viewer_id` equals the stream's and its `shown_at`
falls inside the inclusive `[start_at, end_at]` window.

## Anti-join on viewer and window

The query is an anti-join: keep each `Stream` row for which the
correlated `NOT EXISTS` probe finds no `Impressions` row with the same
`viewer_id` and a `shown_at BETWEEN start_at AND end_at`. Both matching
conditions are load-bearing — the example's stream `12` survives
because viewer `4`'s only impression lands at `60`, outside its
`90`-`120` window, and an impression served to a _different_ viewer
during your stream never counts against it. `BETWEEN` makes both window
ends inclusive, which the example itself exercises twice: impression
`400` at time `60` covers stream `11` exactly at its `end_at`, and
impression `401` at time `110` covers stream `14` the same way.

With no index on `viewer_id` in the pinned schema, the probe is a scan
per stream — `O(S·A)` integer comparisons in the worst case, which is
still ~32 million cheap comparisons at the corpus ceilings (4000
streams x 8000 impressions), far inside the time limit. Empty inputs
fall out naturally: no streams means no rows, and streams with an empty
`Impressions` table are all impression-free. Rows compare as a multiset,
so no `ORDER BY` is needed.

**Complexity:** `O(S·A)` time, `O(1)` extra space.
