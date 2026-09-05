# Solutions — Seven-Day Posting Spurts

## Per-author windows by self-join, filtered by half the monthly total

The analysis window is February 1–28 only — the note pins the month at
exactly four weeks and drops February 29 — so the `feb` CTE filters
the table to that range first, and every later figure derives from it.
Each author's average weekly frequency is then their February entry
count divided by 4 (`totals`), and "twice the average" of `total`
entries is simply `total / 2`: an author is on a spurt when some
7-day window holds at least half of everything they wrote that month.

The fullest window is found by anchoring a window at every entry:
`windows` self-joins `feb` so each row `a` counts the entries `b` of
the same author in `[a.entry_date, a.entry_date + 6 days]` —
`DATE(entry_date, '+6 days')` closes the seven-day span. Any 7-day
window holding entries can be slid right until its first day lands on
the earliest entry it contains — the days lost hold nothing, so no
count shrinks — meaning anchoring at entries visits a window at least
as full as the true maximum, and `best` takes `MAX` over each author's
anchored counts. Entries sharing a date all anchor the same window, so
the count is `COUNT(DISTINCT b.entry_id)` — a plain `COUNT(*)` would
scale each window by the number of same-day anchors, and the grouping
by `(author_id, entry_date)` collapses those duplicate anchors into
one row while the distinct count keeps the window's true size,
same-day spurts included.

The final select joins `totals` with `best`, keeps authors whose
`peak_week_posts >= total * 2.0 / 4`, and emits `avg_week_posts` as
`total * 1.0 / 4` — a real division, since the average (0.25, 0.75,
1.25, ...) is rarely integral. With `n` February entries, `u` distinct
authors and `w` entries for the busiest author, the self-join pairs
each entry with its author's 7-day successors — `O(w²)` comparisons in
the worst single-author case — and the aggregation is linear beyond
it.

**Complexity:** `O(n + w²)` time, `O(n)` space, `w` the largest
per-author entry count.
