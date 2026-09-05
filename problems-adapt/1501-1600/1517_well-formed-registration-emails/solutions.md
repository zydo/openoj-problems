# Solutions — Well-Formed Registration E-mails

## Cut the address at the domain boundary and validate the two halves independently

The rule is a conjunction of a fixed literal and a character policy, so
the query separates the two before checking either. The inner subquery
adds two computed columns to every `Registrants` row: `domain_part` is
`substr(email, -13)`, the trailing 13 characters, and `local_part` is
everything before them, cut off at `length(email) - 13`. The trailing
slice is compared with `=` against `'@leetcode.com'` — a byte-for-byte
test, so an upper-case host or a different domain fails — and because
`substr` quietly returns fewer (or zero) characters for a too-short
value, any address shorter than the domain simply cannot match rather
than erroring.

The prefix is then screened by two `GLOB` patterns instead of one:
`local_part GLOB '[a-zA-Z]*'` requires the first character to be a
letter, and `local_part NOT GLOB '*[^a-zA-Z0-9_.-]*'` rejects any
prefix containing a character outside letters, digits, underscore,
period, and dash — including a stray `@` sneaked in by a second
at-sign. GLOB has no "repeat this class" quantifier the way a regex
would, so the negated-class scan stands in for it: a prefix built
entirely from the allowed characters has nothing left for
`[^a-zA-Z0-9_.-]` to match. An empty prefix — the address is exactly
the domain — fails the first pattern on its own, since no empty string
can satisfy a pattern that demands one leading letter.

Each row is examined once for its suffix and once for its prefix
characters, independent of every other row.

**Complexity:** `O(n)` time, `O(1)` auxiliary space, for `n` rows in
`Registrants`.
