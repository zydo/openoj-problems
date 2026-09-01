# Solutions — Article Reads I

## Filter self-reads, deduplicate, sort

A row where `writer_id = reader_id` is exactly a writer reading their
own work — the note in the statement says the two ids name the same
person when equal. Everything else in a row (which article, which day)
is irrelevant to the question, so one equality predicate isolates the
rows that matter.

`SELECT DISTINCT writer_id` collapses repeated self-reads — a writer
who reads two of their own articles, or the same one twice (example 1's
writer 8, or example 2's duplicated row), still occupies one output row.
The alias presents the column as `id`, and `ORDER BY` finishes the
ascending-order contract.

**Complexity:** `O(N log N)` time for the distinct-plus-sort over `N`
Reads rows, `O(N)` space for the distinct set.
