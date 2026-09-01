# Solutions — Family Features Aired in June

## Join, filter on all three predicates, DISTINCT

Every condition lives in a different table — the kids flag and the
movie category in `Library`, the airing moments in `Showings` — so the
query is one inner join on `title_id` followed by a WHERE clause
holding all three predicates together: `for_kids = 'Y'`,
`kind = 'Movies'`, and the airing inside June 2020. Extracting
`'2020-06'` with `STRFTIME('%Y-%m', shown_at)` makes the window
comparison a single string equality that correctly includes every June
2020 timestamp and excludes both May and July.

A title aired several times in the month appears once per airing in the
joined rows; `SELECT DISTINCT` collapses those duplicates so each
qualifying name is reported exactly once. The result is returned in any
order.

**Complexity:** one join plus one filtered scan, `O(n + m)` time for
`n` showings and `m` library rows, `O(k)` space for the `k` distinct
qualifying names.
