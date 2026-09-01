# Solutions — Article Reads II

## Count distinct articles per reader per day

The unit is a `(reader_id, read_on)` pair, and what it must accumulate
is the number of **distinct** articles — the table allows duplicate
rows, and reading the same article twice in one day is still one
article (example 1's reader 52). `COUNT(DISTINCT article_id)` inside a
`GROUP BY reader_id, read_on` computes exactly that, and `HAVING` keeps
the pairs whose count exceeds one.

One more grouping level is then needed: the same person may qualify on
several dates (example 2's reader 60 would appear twice without this),
and the output lists each person once. `SELECT DISTINCT reader_id` over
the surviving pairs collapses the repeats, the alias presents the
column as `id`, and the final `ORDER BY` delivers the ascending order
the statement asks for.

**Complexity:** `O(N log N)` time for the two grouped scans and the sort
over `N` Reads rows, `O(N)` space for the grouping sets.
