# Solutions — Sequences With K Records

## DP on the smallest value

Let `f(i, j)` count rows of `{1, …, i}` with `j` records, and classify them
by where the value `1` sits. Placed at the front it is a record — nothing
larger can precede the first slot — and the tail is an arbitrary row of the
remaining values, so this case contributes `f(i-1, j-1)`. Placed in any of
the other `i - 1` slots, some larger value stands to its left, so it is not
a record; striking it out leaves a row of `i - 1` values with the same
records and the same relative order, giving `(i-1) · f(i-1, j)`
arrangements. Together: `f(i, j) = f(i-1, j-1) + (i-1)·f(i-1, j)`, anchored
at `f(0, 0) = 1`.

Only one row is ever needed: `cur[j]` carries `f(i, j)` while pass `i`
assembles the next row, and every term is reduced modulo `10^9 + 7` as it
is formed. The row runs to `j = k` and no further, since a row of `i`
values can never hold more than `i` records and we only ever ask about
`k`. After `n` passes, `cur[k]` is the answer.

The boundary `k = n` is where the recurrence degenerates as expected: every
element must be a record, the multiplying branch can never fire, and the
single fully increasing row survives. At the other edge, `j = 1`, the
passage above re-derives the closed form `(n-1)!` — as in Example 2, where
`n = 6` gives `5! = 120`.

**Complexity:** `O(nk)` time, `O(k)` space.
