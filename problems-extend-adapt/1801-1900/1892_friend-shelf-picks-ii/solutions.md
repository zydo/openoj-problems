# Solutions — Friend Shelf Picks II

A reader's recommendation is any book shelved by at least one of their
buddies but not by themselves, counted over distinct buddies. That is
a buddy expansion joined to the shelves, a self-shelving exclusion,
and a per-reader/per-book count.

## Union-expanded buddies joined to shelves

The first obstacle is that `Buddies` stores each symmetric pair as a
single row, so reader `3`'s buddies are the `buddy_b` values of rows
where `buddy_a = 3` _and_ the `buddy_a` values of rows where
`buddy_b = 3`. A derived table therefore emits both orientations —
every `(buddy_a, buddy_b)` row plus its mirror — so each row names one
reader and one of their buddies. `UNION` deduplicates the mirror rows,
which also absorbs the corner case of one pair stored from both sides:
without it, such a reader would count a lone buddy's book twice.

The expanded relation joins `Shelved` on `reader_id = buddy_id`, so
each row reads "reader R sees that buddy B has book K". A `NOT EXISTS`
correlated subquery then drops every row whose book R already has on
their own shelf, enforcing the self-exclusion. Finally,
`GROUP BY reader_id, book_id` with `COUNT(*)` collapses the surviving
rows into one `(reader_id, book_id, buddies_shelved)` triple, where
the count is exactly the number of distinct buddies of `R` shelving
`K` — each contributing buddy produced exactly one joined row.

The output column order matches the statement, and the row set is
compared in sorted order, which suits the "in any order" result.

**Complexity:** `O(E + S)` time and `O(E + S)` space to expand the `E`
buddy pairs and scan the `S` shelved rows, plus the sort cost of the
grouping; `O(n log n)` worst-case time in the row count `n`.
