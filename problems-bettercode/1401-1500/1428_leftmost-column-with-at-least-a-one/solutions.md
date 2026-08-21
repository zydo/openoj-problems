# Solutions — Leftmost Column with at Least a One

## Staircase from the top-right corner

Row-sortedness means each row is a block of `0`s followed by a block of `1`s, so a row's "first 1" is the only fact worth knowing about it — and the answer is the minimum of those firsts. Binary-searching every row finds them all within the 1000-call budget, but a single monotone walk does far better.

Start the pointer at the top-right corner. If it reads a `1`, this is the leftmost 1 of that row seen so far — record the column and step **left**, because everything to the right in this row is dominated. If it reads a `0`, this row has no `1` at or after this column — step **down**, because the rows above already contributed everything they could at this width. The pointer traces a staircase that only moves left and down, so it crosses at most `rows + cols - 1` cells (never more than 199 calls for the 100 x 100 maximum). When it leaves the matrix, the last column that produced a `1` is the leftmost column containing a one anywhere; if no `1` was ever seen, the answer is `-1`.

Correctness in one sentence: every column the walk skipped was provably free of 1s (it lay strictly right of a recorded 1) or irrelevant (it lay above a row already ruled out), so the recorded column is the true minimum.

**Complexity:** `O(rows + cols)` time — at most `rows + cols - 1` calls to `get` — and `O(1)` space.
