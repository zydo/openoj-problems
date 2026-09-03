# Solutions — One Copy Of Each Address

## Keep the smallest id per address

The judged output is the trimmed `MailingList`: exactly one row per
distinct address — the copy with the smallest `listId` — with order
irrelevant. `(SELECT MIN(listId) FROM MailingList GROUP BY address)`
computes the survivor set directly: `GROUP BY address` collapses each
distinct address into one group, and `MIN(listId)` picks that group's
smallest id. Filtering the outer scan with `listId IN (...)` keeps
precisely those rows — `listId` is the primary key, so no id leads two
groups, and the membership test selects the smallest-id copy of every
repeated address while leaving every unique address's only row
untouched.

The form is the post-trim state itself rather than a simulation of the
mutation: the returned rows are exactly what `DELETE FROM MailingList
WHERE listId NOT IN (SELECT MIN(listId) FROM MailingList GROUP BY
address)` would leave behind. Equivalent shapes state the same
invariant per row — the correlated
`WHERE listId = (SELECT MIN(listId) FROM MailingList m2 WHERE
m2.address = MailingList.address)` re-derives each row's group minimum
at the cost of one aggregation per row, and
`MIN(listId) OVER (PARTITION BY address)` reaches the same keep-set
through a window pass — but the grouped `IN` form needs no per-row
work.

`GROUP BY address` hashes the addresses in one aggregation pass and the
outer scan performs one membership test per row; with `P` rows on the
list and `D` distinct addresses, only the `D` group minima are
materialized.

**Complexity:** `O(P)` time, `O(D)` space.
