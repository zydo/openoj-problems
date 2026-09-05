# Solutions — Matching Every Donation

## Double the amount in a third output column

The `Donations` table already holds one row per gift, so matching every
donation is a projection, not a mutation: the SELECT list names all
three output columns, `donor` and `amount` pass through unchanged, and
the third entry computes `amount * 2 AS match_amount`, which doubles
each row's own amount — the matched total appears only in the output,
and the stored rows are never rewritten. Aliasing the expression as
`match_amount` fixes the new column's name and its place as the last of
the three output columns.

A table guarantees no order of its own, so the query sorts by
`donation_slot` with `ORDER BY donation_slot ASC` to reproduce the
ledger's original order no matter what order the dataset's INSERT
statements used: identity inserts, reversed inserts, and shuffled
inserts all collapse to the same output.

**Complexity:** `O(n log n)` time, `O(n)` space — the `n` gifts are
scanned and sorted by `donation_slot`, and the result table itself holds
all `n` matched triples.
