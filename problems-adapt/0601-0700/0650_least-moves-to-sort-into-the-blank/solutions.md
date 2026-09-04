# Solutions — Least Moves to Sort Into the Blank

## Cycle Costs Against the Two Goals

An operation trades the empty cell for an item, so reaching a sorted row is a
permutation puzzle where the blank acts as a free hand. Exactly two sorted
rows exist — the blank leading `[0,1,...,n-1]` or trailing
`[1,2,...,n-1,0]` — and the reply is the cheaper of the two budgets.

For a chosen goal, let `sigma[i]` name the destination cell of the item
currently sitting in cell `i`, and split the row into cycles by hopping
`i -> sigma[i]`. Costing a cycle depends on whether it owns the blank. A
cycle containing the blank resolves in `L - 1` operations for length `L`:
each operation drops one item straight into the hole the blank occupies, and
the blank tours the cycle until it settles on its own final cell. A blank-free
cycle of length `L >= 2` needs `L + 1`: one operation to smuggle the blank in
(a displaced item is parked on the blank's final cell), then the `L` direct
placements, the last of which repatriates that parked item. Fixed points cost
nothing — the item is home, and a blank sitting alone on its goal cell is free
as well.

Take the third example `[2,3,0,1,5,4]` with the blank-last goal. The item in
cell 0 (item 2) belongs in cell 1, the item in cell 1 belongs in cell 2, cell
2 holds the blank, the blank belongs in cell 5, and the item in cell 5 (item 4) belongs in cell 3, whose item 1 closes the loop back to cell 0: one cycle
of five cells owning the blank, priced `5 - 1 = 4`. Item 5 in cell 4 is a free
fixed point, so this goal totals 4 — the optimum. Under the blank-first goal
the same row decomposes into one blank cycle `[0,2]` plus two blank-free
2-cycles, `1 + 3 + 3 = 7`; the comparison is what picks the winner.

The implementation materializes both target rows (`[n-1] + range(n-1)` and
the identity), runs the same visited-array cycle walk over each, and returns
the smaller sum. Each goal touches every cell a constant number of times.

Forgetting the second row is the classic trap: a layout can be dear for one
goal and nearly free for the other, and only the comparison certifies the
minimum.

**Complexity:** `O(n)` time, `O(n)` space.
