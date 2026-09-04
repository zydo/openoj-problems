# Solutions — Median Across Sorted Rows

## Binary search on the answer value

With an odd number of entries the median is one of the matrix's own values —
the `(m * n) / 2 + 1`-th smallest — so it can be returned exactly instead of
averaged. Sorting everything to find it inspects all `m * n` cells, which the
statement rules out. The substitute: search over _values_. The median is the
smallest candidate `x` such that at least `need = (m * n) / 2 + 1` entries are
`<= x`, so bisect that property over the span from the smallest row head to
the largest row tail.

Each row answers "how many of my entries are `<= x`" in `O(log n)` — the row
is sorted, so `bisect_right` lands the cutoff — and row counts simply add.
One bisection step therefore costs `O(m log n)` rather than `O(m * n)`, and
the loop keeps `hi = mid` when the count reaches `need`, `lo = mid + 1`
otherwise, settling on the smallest qualifying value. That value really occurs
in the matrix: were it absent, the counts at `x` and `x - 1` would match and
the search would have stopped one lower.

The value span `V` tops out at `10⁶`, so the bisection needs about twenty
passes whatever the matrix shape. For `[[2,2,6],[1,4,4],[2,4,8]]`, `need` is 5
and the smallest value with five entries at or below it is 4 — the answer.

**Complexity:** `O(m log n log V)` time, `O(1)` space.
