# Solutions — First Column Containing a One

Both solutions read the grid the same way: row-sortedness makes each row
a block of `0`s followed by a block of `1`s, so the single fact worth
knowing per row is where its first `1` sits — and the answer is the
minimum over rows. Binary search recovers each of those positions
independently, spending a logarithmic handful of calls per row — an
honest `rows · log cols` total that fits the 1000-call budget with a
thin but sufficient margin. One monotone walk from the top-right corner
does far better: it retires a row or a column at every read and never
needs more than `rows + cols - 1` calls.

## Per-Row Binary Search

Each row is sorted on its own, so the problem factorizes into
independent questions: bisect for every row's first `1`, then take the
minimum of the findings. The search maintains the invariant that a row's
leftmost `1` — if it has one — lies inside `[lo, hi]`. A `1` at `mid`
records `mid` as the best sighting in this row and narrows the hunt
strictly left of it (`hi = mid - 1`); a `0` at `mid` proves the switch
sits strictly to the right (`lo = mid + 1`), since a row's values only
rise. When the interval empties, `first` holds that row's switch column,
or `-1` when the row was all `0`s.

The interval halves on every probe, so a row costs at most
`floor(log2 cols) + 1` calls and the full sweep at most
`rows · (floor(log2 cols) + 1)` — never more than 700 on the 100 x 100
maximum grid. That is inside the 1000-call budget in every language,
because the call sequence follows the algorithm alone, but the margin is
real work, not slack: the corpus's four hardest cases each spend the full
700, about seven probes for every one call the staircase needs there.
Rows also need not each search the whole width — bounding `hi` by the
best column already found only shrinks the spend — though it cannot touch
this worst case, since rows that yield no `1` never tighten the bound.

**Complexity:** `O(rows · log cols)` time — at most
`rows · (floor(log2 cols) + 1)` calls to `get`, 700 on the 100 x 100
maximum — and `O(1)` space.

## Staircase from the top-right corner

Put the pointer on the top-right corner. Reading a `1` means this is the
leftmost `1` of that row seen so far — record the column and step **left**,
since everything to the right in this row is dominated. Reading a `0` means
this row holds no `1` at or after this column — step **down**, since the
rows above have already contributed all they can at this width. The pointer
therefore traces a staircase that only moves left and down, crossing at most
`rows + cols - 1` cells (never more than 199 calls on the 100 x 100
maximum). When it walks off the grid, the last column that produced a `1`
is the leftmost column holding a one anywhere; if no `1` ever appeared, the
answer is `-1`.

Why the recorded column is the true minimum, in one sentence: every column
the walk skipped past was provably free of `1`s (it sat strictly right of a
recorded `1`) or already irrelevant (it sat above a row ruled out at that
width), so nothing to its right — and nothing excluded — can beat it.

**Complexity:** `O(rows + cols)` time — at most `rows + cols - 1` calls to
`get` — and `O(1)` space.
