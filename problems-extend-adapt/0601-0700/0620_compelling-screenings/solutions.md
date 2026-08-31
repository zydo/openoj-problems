# Solutions — Compelling Screenings

## Filter the two row-local conditions, then sort

Both requirements are facts about one screening row, so the query needs
one scan with two predicates joined by `AND`. `screening_id % 2 = 1`
keeps the odd ids, and `summary != 'boring'` drops exactly the rows whose
summary is that lowercase literal. No join, grouping, or subquery is
needed because neither question depends on a different screening.

The text comparison is exact and case-sensitive under this SQLite setup:
`'Boring'`, `'BORING'`, `'boring!'`, and `'boring '` are different strings
from `'boring'`, so they all survive. The two filters must both hold — an
even-id screening with a compelling summary is still excluded, just as
an odd-id screening with the literal summary `boring` is excluded.

`ORDER BY score DESC` puts the qualifying screenings in the required
highest-to-lowest order. The judge treats the returned rows as an
unordered multiset, so the sort honors the presentation contract rather
than determining whether the query is correct; the data keeps scores
distinct where an order is requested, avoiding a tie-breaking rule.

One pass over the `n` rows filters the candidates, then sorts the `k`
qualifying rows for the displayed order.

**Complexity:** `O(n + k log k)` time, `O(k)` space.
