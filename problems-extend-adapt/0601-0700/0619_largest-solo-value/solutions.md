# Solutions — Largest Solo Value

## Grouping isolates the candidates, `MAX` picks the answer

Solo values are grouping's exact use case: `GROUP BY value` collapses
every cluster of equal rows into one group, `COUNT(*)` is that group's
size, and `HAVING COUNT(*) = 1` keeps only the values whose group has
exactly one row — a value that appears twice or more never survives the
filter, no matter how it compares to the others. That filtered set is
the pool of candidates, and the outer query's `WHERE value IN (...)`
re-selects those raw rows from `Readings` (equivalently, the subquery's
own `value` column could be selected directly, since grouping already
reduced each solo value to one row).

`MAX(value)` over that pool is what makes the answer always exactly one
row. `MAX` is an aggregate: given zero rows it still returns one row
holding null, and given one or more rows it returns the largest,
ignoring the distinction between "one candidate" and "many candidates"
entirely — the largest of a single-element set is that element. This is
also why `ORDER BY value DESC LIMIT 1` is the wrong shape even though it
sounds equivalent: sorting and limiting a zero-row set returns zero rows,
not one row holding null, and the statement specifically demands the
null case reads as a row.

The engine groups the `n` rows of `Readings` in one pass, filters the
groups by size, and reduces the surviving values with a second pass —
nothing beyond the groups and the running maximum is retained.

**Complexity:** `O(n)` time, `O(n)` space.
