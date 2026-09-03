# Solutions — A File Turned Sideways

## Recursive split, column-wise ordered concat

Turning a document sideways means regrouping its fields: instead of `n`
lines of `k` fields each, the answer is `k` rows that each walk the
`j`-th field of every input line in document order. SQL has no split,
so the query first flattens every `content` value into one row per
field with a recursive CTE: the anchor peels the text before the first
space off each line — `substr` up to
`instr(content || ' ', ' ') - 1`, with the `|| ' '` handling a line's
last field — and the recursive step repeats on the remainder, carrying
`(lineNo, pos, val, rest)` until `rest` is exhausted. Every field of
the document comes out as exactly one `(lineNo, pos, val)` row, `pos`
counting fields from `1` left to right.

With the fields materialized, the sideways read is a single
`GROUP BY pos`: each group holds one column of the document and is
exactly one output row, so `group_concat(val, ' ' ORDER BY lineNo)`
emits it with the column's fields joined by single spaces in `lineNo` —
that is, document — order. The `ORDER BY` inside the aggregate is
load-bearing: without it SQLite guarantees nothing about concatenation
order, and `team hawks owls finches` would be as legal as any shuffle
of it. The `k` result rows themselves carry no required order, since
the judge compares them as an unordered multiset.

Splitting emits and materializes one CTE row per field, and each field
is visited once more by its group's aggregation, so with `F` total
fields in the document the query is linear in the input size.

**Complexity:** `O(F)` time, `O(F)` space, for `F` total fields in the
document.
