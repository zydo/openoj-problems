# Solutions — Smallest Array Under Bounded Swaps

## Sorting out the swap-components

Draw a graph on the values: an edge joins two values differing by at most
`limit`. Two facts govern everything. First, values in different connected
pieces can never occupy each other's slots — every legal swap stays inside a
piece, so the multiset of each piece is permanently tied to its set of
positions. Second, inside one piece _any_ rearrangement is realizable:
values bubble along chains of overlapping swaps, so the piece's values and
its positions may be paired up however you like. Example 1's values split
as `1,3,4` versus `7,9` (the gap `7 - 4 = 3` exceeds the limit of `2`), and
each group sorts itself onto its own positions.

Connectivity is decided by consecutive gaps alone, which is why the graph
never has to be built. Sort the `(value, original index)` pairs; a maximal
run whose successive value gaps are all `<= limit` is exactly one connected
piece, and any gap `> limit` is a permanent wall between neighbors. A
two-pointer sweep over the sorted pairs cuts the runs in linear time.

The lexicographically smallest reachable array then falls out: for each
run, take its original indices in ascending order and place the run's
values — already ascending from the global sort — onto them in that order.
Smaller values land on smaller positions, which is optimal read
left-to-right, and every value stays within its own piece, so each
placement is reachable by legal swaps. Duplicates are unremarkable
(equal values sit adjacent in a run), and a limit below every gap leaves
each element a run of one, echoing Example 3's frozen array.

**Complexity:** `O(n log n)` time, dominated by the sort, `O(n)` space.
