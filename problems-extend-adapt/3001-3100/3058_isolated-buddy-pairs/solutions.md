# Solutions — Isolated Buddy Pairs

## Both directions of every pairing, joined on a shared middle

Whether two buddies share a mutual buddy is never a property of a
single row: the witness is a third member appearing once beside each
of them, and the two witnessing rows need not agree on which column
carries which id. The query therefore flattens every pairing into both
of its directions — a `UNION` of `Buddies` with the columns swapped
produces one `(x, y)` row per ordered adjacency — and then asks, for
each stored pair, whether two flattened edges meet on the same middle
member with one starting at `person_a` and the other at `person_b`.
That test lives in a correlated `NOT EXISTS`: the join `edges e1
INNER JOIN edges e2 ON e1.y = e2.y` enumerates shared middles, while
the surrounding predicates keep only middles equal to neither member
of the pair — without those two guards a middle that merely is one of
the two buddies would count against them.

A pair for which no middle survives is itself a survivor and is
projected unchanged, in its stored order; `ORDER BY person_a ASC,
person_b ASC` dresses the rows as the statement demands, though the
judge compares result rows as an unordered multiset either way.

**Complexity:** `O(n^2)` time, `O(n)` space — the flatten doubles the
`n` rows, and the middle join touches at most one pair of flattened
edges per shared middle, `O(n^2)` pairs across a whole table.
