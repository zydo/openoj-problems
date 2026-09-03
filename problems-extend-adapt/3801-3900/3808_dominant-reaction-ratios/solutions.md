# Solutions — Dominant Reaction Ratios

The question decomposes into two independent grouped passes over
`EmojiLog` — one per member, one per member-and-emoji — that a small
join stitches back together under the two inclusion rules.

## Two grouped passes joined per member

The first pass, `per_member`, collapses the table to one row per member
and reads both counters the statement names: `COUNT(DISTINCT post_id)`
is how many different posts the member reacted on (the `>= 5` gate),
and `COUNT(*)` their total emoji count. The second pass, `per_emoji`,
groups one level finer — per `(member_id, emoji)` — so its `COUNT(*)`
is each emoji's tally. Neither pass needs the other; both are plain
single-table aggregations.

The join then enforces the 60% rule without any `MAX`, ranking, or
window: if a single emoji reaches 60% of a member's rows, it is
automatically their dominant emoji, because two emojis cannot both hold
at least 60% of the same total — they would sum past 100%. So matching
each `(member, emoji)` tally against its member's total and keeping
only `cnt * 1.0 / emoji_cnt >= 0.6` leaves at most one surviving row
per member, and that row's `emoji` is the `dominant_emoji`. The
`* 1.0` promotes the division to floating point before both the
comparison and `ROUND(..., 2)`, so `emoji_ratio` is a REAL like `0.80`
rather than an integer-truncated `0`. Finally
`ORDER BY emoji_ratio DESC, member_id ASC` yields the required
ordering.

SQLite answers each `GROUP BY` with one ordered pass over the table and
then probes at most a handful of tally rows per member, so the whole
query is two aggregation sorts plus a small join — logarithmic factors
over a single scan, with one accumulator set per member and per
member-emoji pair in memory.

**Complexity:** `O(n log n)` time, `O(n)` space.
