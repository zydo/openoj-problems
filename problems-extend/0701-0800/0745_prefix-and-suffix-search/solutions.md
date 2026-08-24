# Solutions — Prefix and Suffix Search

## One Hash Entry per Prefix and Suffix Pair

The dictionary is frozen at construction while up to `10⁴` queries arrive, so
the constructor spends one exhaustive pass buying constant-time answers for
all of them: for each word, at its index `i`, it pairs **every** prefix of the
word with **every** suffix of the word, joins the two through a `#` into one
composite key, and stores `i` under it. Words are lowercase letters only, so
`#` can never occur inside a prefix or a suffix — the join is unambiguous, and
`"ab#c"` can only mean prefix `"ab"`, suffix `"c"`. Because words are processed
left to right and a later word overwrites whatever an earlier word left under
a key, every entry settles on the largest index of any word that matches it —
exactly the tie rule the statement demands — with no comparisons and no
max-tracking anywhere.

A query then costs one lookup: glue `pref` and `suff` through the same `#` and
read the entry. An absent key means no word carries both that prefix and that
suffix, so `-1` is the map's own miss answer — nothing is scanned, and no
string comparison happens at query time at all; all of that work happened
once, during the build.

The cost is quadratic in each word's length but each unit is tiny. A word of
length `L` contributes at most `(L+1)²` keys of at most `2L+1` characters, so
at the statement's bound — `10⁴` words of length at most 7 — the map holds at
most `64 · 10⁴ = 6.4 × 10⁵` entries, which builds in a fraction of the limit
and fits comfortably in memory. Queries never touch the map's size.

**Complexity:** `O(S·L²)` build + `O(P)` per query time, `O(S·L²)` space, for
`S` words of length at most `L` and a query of combined length
`P = |pref| + |suff|`.
