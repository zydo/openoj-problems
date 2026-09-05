# Solutions — Song Vote Shares

## Group Votes by song, divide by the total listener count

Each song's numerator is the count of `Votes` rows carrying its
`song_id` — `GROUP BY song_id` gathers those rows for every song that
appears in the table, one group per song, and `COUNT(listener_id)`
counts the votes inside each group. The denominator is fixed across
every song: the total number of rows in `Listeners`, fetched once with
a scalar subquery `(SELECT COUNT(*) FROM Listeners)` rather than a
join, so it never inflates or shrinks with a particular song's vote
count. `* 100.0` forces floating division before the ratio is taken —
SQLite's integer division would truncate a fraction like `1/3` to `0`
— and `ROUND(x, 2)` rounds the percentage to two decimal places, ties
going away from zero (an exact `3.125` rounds up to `3.13`).

`ORDER BY share DESC, song_id ASC` finishes the query with the
required sort: highest share first, and songs tied at the same share
broken by ascending `song_id`. A song with no rows in `Votes` never
enters the grouping and so never appears in the result, matching the
table's own definition of which songs were voted on.

**Complexity:** proportional to the size of `Votes`, dominated by the
grouping scan and the final sort of the per-song shares.
