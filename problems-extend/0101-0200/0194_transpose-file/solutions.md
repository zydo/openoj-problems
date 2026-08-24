# Solutions — Transpose File

## Recursive split, column-wise ordered concat

Transposing means regrouping the file's fields: instead of `n` lines of `k` fields each, the answer is `k` lines that each walk the `j`-th field of every input line in file order. SQL has no split, so the query first flattens every `line` into one row per field with a recursive CTE: the anchor peels the text before the first space off each `line` — `substr` up to `instr(line || ' ', ' ') - 1`, with the `|| ' '` handling a line's last field — and the recursive step repeats on the remainder, carrying `(id, pos, val, rest)` until `rest` is exhausted. Every field of the file comes out as exactly one `(id, pos, val)` row, `pos` counting fields from `1` left to right.

With the fields materialized, the transpose is a single `GROUP BY pos`: each group holds one column of the input and is exactly one output line, so `group_concat(val, ' ' ORDER BY id)` emits it with the column's fields joined by single spaces in `id` — that is, file — order. The `ORDER BY` inside the aggregate is load-bearing: without it SQLite guarantees nothing about concatenation order, and `name ryan alice` would be as legal as `name alice ryan`. The `k` result rows themselves carry no required order, since the judge compares them as an unordered multiset.

Splitting emits and materializes one CTE row per field, and each field is visited once more by its group's aggregation, so with `F` total fields in the file the query is linear in the input size.

**Complexity:** `O(F)` time, `O(F)` space, for `F` total fields in the file.
