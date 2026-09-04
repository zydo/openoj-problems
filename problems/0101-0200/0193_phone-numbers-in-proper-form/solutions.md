# Solutions — Phone Numbers In Proper Form

## Whole-value glob, two patterns

A listing is well-formed exactly when the entire `phone` value takes one
of the two shapes, so the query reduces to a full-string pattern match
per row. SQLite's `GLOB` matches the complete value — every character
must be consumed — and `[0-9]` stands for a single digit, so
`'[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'` spells
`xxx-xxx-xxxx` digit group by digit group. Letters, a doubled hyphen, a
wrong length, or a stray trailing character all fail: the character
classes admit digits only, and nothing outside the pattern may remain.

The parenthesized shape is the second pattern — `(`, `)`, and the space
are literal characters to `GLOB` — and the two are combined with `OR`.
Because the filter is a plain `WHERE` over `Directory`, each qualifying
listing contributes its own output row: a number entered several times
is reported once per occurrence, and listings matching neither pattern
drop out entirely. No `ORDER BY` is needed — the judge compares rows as
an unordered multiset.

Each row is matched against two fixed-length patterns, so with `P` rows
in `Directory` the query is one linear scan and no working memory beyond
the output.

**Complexity:** `O(P)` time, `O(1)` auxiliary space.
