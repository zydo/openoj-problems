# Solutions — Minimum Peak Matrix Route

## Minimax Dijkstra Search

Let a state's distance be the smallest route peak known for reaching that
cell. Initialize the top-left distance to its own height and place it in a
min-heap.

When a cell with peak `p` is expanded, reaching a neighbor through it costs
`max(p, neighborHeight)`. Record and push this value whenever it improves the
neighbor's best known peak. Because route peaks never decrease as routes are
extended, the usual Dijkstra settling argument applies.

The first removal of the bottom-right cell from the heap therefore yields the
minimum possible peak. Ignore heap entries superseded by a smaller recorded
value.

**Complexity:** `O(n^2 log n)` time and `O(n^2)` space.
