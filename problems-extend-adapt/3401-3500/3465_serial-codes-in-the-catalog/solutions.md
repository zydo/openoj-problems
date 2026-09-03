# Solutions — Serial Codes In The Catalog

## Substring glob with a trailing non-digit guard

A blurb qualifies when the eleven characters `SN`, four digits, a
hyphen, and four more digits occur somewhere inside it — the code may sit
anywhere in the text, not only at its start, so this is a substring
match, not a whole-value match. SQLite's `GLOB` matches the entire value
against its pattern, so the leading and trailing `*` in
`'*SN[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]*'` are what turn the
anchored match into a search: the stars absorb whatever precedes and
follows the serial. Each `[0-9]` class admits exactly one digit, which
enforces "exactly 4 digits" ahead of the hyphen for free — in
`SN12345-6789` the fifth digit collides with the literal `-` and the match
fails. `GLOB`, unlike `LIKE`, is case-sensitive, so a lowercase `sn` prefix
never matches.

The example's invalid row, `SN1234-56789`, exposes the one gap a plain
substring glob leaves: the trailing `*` would happily absorb a fifth digit.
The first pattern therefore does not end in `*` directly after the digit
group but continues with `[^0-9]*` — one character that is provably not a
digit, then anything. A serial flush against the end of the blurb has
no following character at all, so a second, end-anchored pattern without
any trailing wildcard catches it; the `OR` of the two is exactly the
existence check "some occurrence of `SN` starts a well-formed serial that
is not followed by another digit". `ORDER BY item_id ASC` presents the
result as the statement asks.

Each row is tested against two fixed-length patterns, so the query is one
linear scan of `catalog` with no working memory beyond the output.

**Complexity:** `O(P)` time for `P` rows, `O(1)` auxiliary space.
