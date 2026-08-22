# Solutions — Largest Island After One Flip

Both solutions rest on the same split: learn the islands first, then price
every `0` cell as one plus the summed sizes of the distinct islands pressed
against its four sides. They differ only in how the islands are learned. The
flood-fill stamps each island with a fresh id in one stack-driven walk — the
general-purpose way to traverse a component. The union-find variant exploits
the scan order instead: it never walks an island, it only ever joins each `1`
cell to the `1` cells above it and to its left, and a nearly-flat forest of
unions assembles the islands edge by edge.

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

## Union the islands, then price every empty cell

The pricing half of the plan does not care how the islands were learned, only
that each cell can name the island it belongs to and each island can report
its size. Union-find supplies both from a different direction: instead of
walking each island once with a stack, it never walks an island at all.

The first pass scans the matrix in row-major order and keeps a disjoint-set
forest over the cells. A `1` cell arriving at row `i`, column `j` needs no
introduction to its whole island — the cells above it and to its left are
already in the forest — so uniting with whichever of those two is also a `1`
connects the island edge by edge. Every `find` flattens the path it walked and
every union hangs the smaller root under the larger, so the forest stays
nearly flat and each operation costs almost constant time. The component size
lives at the root, so the size table of the first solution is not built
separately here — it is the forest itself.

The second pass is the pricing pass again, unchanged in structure. Every `0`
cell collects the roots of its occupied neighbours into a small set, sums the
sizes of those roots, and adds one for itself. Only the dedup key changes:
where the first solution compared stamped colours, this one compares
`find`-results, and two neighbours belonging to one island report one root.
Example 2's corner island touching the centre cell from above and from the
left is therefore still counted once, scoring 4 rather than 7. The running
maximum is again seeded with the largest existing island, which is what a
matrix of all `1`s must return — its single component has no `0` to spend the
change on and is already the answer.

Both passes touch each of the `n^2` cells a constant number of times — the
merging hides an inverse-Ackermann factor that is invisible at these sizes —
and the parent and size arrays are the only extra storage.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
