# Solutions — Showroom Headcounts by Day

One grouping answers the question: collapse `Showroom` on the
(`day`, `model`) pair, and each group's `unique_sellers` and
`unique_buyers` are the distinct counts of its two id columns.

## Group on the pair and count distinct ids

`GROUP BY day, model` folds every row sharing both keys into one group,
and `COUNT(DISTINCT seller_id)` / `COUNT(DISTINCT buyer_id)` reduce each
group's column to its set of values — the number of distinct ids, not
the number of rows. That distinction is the whole problem: the table has
no primary key and may contain duplicates, so the same
(`day`, `model`, `seller_id`, `buyer_id`) row can repeat, and a repeated
row must not move either count. Plain `COUNT(*)` or an unmodified
`COUNT` would inflate both figures on duplicate rows; the `DISTINCT`
inside each count absorbs them, as Example 2 shows (quark on
2021-05-9 counts two sellers across three rows, one of them a doubled
pair).

The statement allows the result in any order, so the query carries no
`ORDER BY` — the judge compares result multisets, and row order cannot
fail a case.

**Complexity:** `O(n log n)` time (grouping), `O(n)` space.
