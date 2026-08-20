# Solutions — N-Queens

## Backtracking with Conflict Sets

Committing to one queen per row is what makes the search tractable. Since a row
cannot hold two queens and `n` queens must sit on `n` rows, every solution has
exactly one queen per row, so a placement is fully described by a column choice
per row. The recursion fills row 0, then row 1, and so on: `backtrack(row)`
sweeps the columns, descends on each legal one, and removes it again on the way
out — depth-first search over column choices with the partial board as state.

Legality is where the speed lives. A square `(row, col)` conflicts with the
queens already placed exactly when it shares a column or either diagonal family
with one of them, and each of those three is identifiable by a single number:
`col` itself, `row - col` (fixed along the down-right diagonals), and
`row + col` (fixed along the up-right ones). Three sets hold the numbers
already claimed. A sweep candidate that misses in all three sets is safe: the
three numbers are inserted, a row string of dots with a `Q` at position `col`
is appended, and the search moves to the next row. Returning from the call,
the insertion is undone on all three fronts, which restores the state the next
candidate of this row expects.

Reaching `row == n` means every row placed a queen that dodged everything
before it, so the board is a solution; a copy is taken — the board itself keeps
mutating as the search continues. Since rows fill top to bottom and each row's
columns are tried left to right, solutions appear in exactly the order the
statement asks for, with no post-processing. `n = 1` places its lone queen and
returns `[["Q"]]`; `n = 2` and `n = 3` find that every branch dies with some
row unplaceable and return an empty list.

At the top of the tree each row offers at most `n` columns, giving the familiar
`O(n!)` ceiling on nodes — the three sets prune the great majority of branches
long before the last row, but the worst-case shape is still factorial. Outside
the output the state is three sets, a board of `n` strings and a recursion `n`
deep.

**Complexity:** `O(n!)` time, `O(n)` space.
