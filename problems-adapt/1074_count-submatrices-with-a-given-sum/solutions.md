# Solutions — Count Submatrices With a Given Sum

## Row-Bound Collapse onto a One-Dimensional Count

A rectangle is pinned down by four cut lines — top, bottom, left, right.
Hold the two horizontal cuts fixed and total the strip between them column
by column: what is left is an ordinary array, and the rectangles confined
to that strip are exactly its contiguous stretches. The 2-D question
therefore collapses, one row pair at a time, into the familiar chore of
counting stretches with a prescribed total.

Vertical prefix sums make each strip cheap. With `vpref[r][c]` holding the
sum of column `c` over rows `0..r-1`, the strip total for one column is a
difference of two table entries, so assembling the strip costs a single
pass over the columns no matter how many rows it spans.

Inside the strip, sweep left to right maintaining the running total, with
a dictionary of earlier totals seeded by `{0: 1}`. A stretch closing at the
current column reaches `target` exactly when some earlier total equals
`running - target`; each such entry is one stretch, and the current total
joins the dictionary afterwards. Negative entries are harmless — the map
never assumed monotonic totals.

The outer loops walk all row pairs, single-row strips included, so every
rectangle is counted once: its row bounds pick the strip, its column span
picks the stretch. For 100x100 inputs the total fits easily in 32 bits.

**Complexity:** `O(rows² · cols)` time, `O(rows · cols)` space.
