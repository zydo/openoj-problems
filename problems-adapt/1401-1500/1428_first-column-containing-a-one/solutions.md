# Solutions — First Column Containing a One

## Staircase from the top-right corner

Row-sortedness makes each row a block of `0`s followed by a block of `1`s,
so the single fact worth knowing per row is where its first `1` sits — and
the answer is the minimum over rows. Locating every first `1` by binary
search stays comfortably inside the 1000-call budget, but one monotone walk
does far better.

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
