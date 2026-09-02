# Solutions — Passing Dominance By Half

## A clubs × halves scaffold, left-joined to each passer's passes

Every club needs a dominance figure for both halves, including
zero-pass halves, so the query builds the full row space first:
`roster` cross joined with a two-row `(1, 2)` halves relation. Onto
that scaffold each club's own passes are attached with a LEFT JOIN on
`from_player` guarded by the half window — clock readings up to
`'45:00'` land in half 1, anything later in half 2 — and a correlated
lookup fetches the receiver's club. The clock values are fixed-width
zero-padded strings, so the boundary test is a plain lexicographic
comparison.

One conditional aggregate then produces the score: untouched
(left-null) scaffold rows contribute `0`, a pass to a teammate adds
`1`, and an interception subtracts `1`. GROUP BY collapses the scaffold
to one row per club per half and ORDER BY emits them by club name and
half number. Clubs that never passed still survive the LEFT JOIN as
zero rows, so the result always covers every club in both halves.

**Complexity:** `O(P + T log P)` time, `O(T)` space — `P` passes and
`T` clubs.
