# Solutions — Largest Island After One Flip

## Stamp the islands, then price every empty cell

Changing a `0` never creates connectivity out of nothing: whatever island results
is the changed cell plus the islands that were already pressed against its four
sides. That splits the work in two. First learn the islands, then evaluate each
candidate cell against what was learned.

The first pass walks the matrix and, whenever it meets a `1` with no id yet,
starts an explicit stack-driven fill that stamps a fresh id into every cell of
that island while counting them. Stamping happens at push time rather than at pop
time, so no cell is ever queued twice and the fill visits each cell once. When
the pass ends, a side table maps every id to its size, and the id matrix answers
"which island is this cell in" in constant time.

The second pass visits the `0` cells. Each one reads the ids of its up to four
occupied neighbours into a small set, adds up the sizes of the ids in that set,
and adds one for the cell itself. The set is not decoration. In Example 2 the
corner island of three cells borders the centre from above and from the left, and
summing per neighbour instead of per island would score that cell 7 instead of 4.
At most four neighbours means the set holds at most four entries, so the
deduplication costs a constant per cell.

The answer is the best score any `0` cell earns, but the running maximum is
seeded with the largest island size rather than with zero. That covers the case
where the second pass finds nothing to evaluate — a matrix that is entirely `1`s
has no cell to change, and its existing island is already the answer. It also
handles the mirror case correctly: a matrix that is entirely `0`s has no island
to seed from, and any single cell scores 1.

Both passes touch each of the `n^2` cells a constant number of times, and the id
matrix and size table are the only extra storage.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
