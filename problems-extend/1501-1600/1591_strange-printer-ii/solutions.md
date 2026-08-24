# Solutions — Strange Printer II

## Bounding rectangles plus a dependency graph

For every color that appears in `targetGrid`, compute its bounding
rectangle: the smallest range of rows and columns that contains every
cell holding that color. If a stamp sequence exists, it can always be
rearranged so each color's stamp is exactly that bounding rectangle —
shrinking a larger stamp down to the bounding box only removes cells
that a later stamp would have overwritten anyway, so it never breaks a
working sequence. That turns the question into: is there an order of
the colors such that stamping each one's bounding rectangle, in that
order, reproduces the grid exactly?

A color's bounding rectangle can only end up correct if every cell
inside it is either that color itself or a color stamped afterward —
otherwise a wrong color would show through at the end. Scanning each
color's bounding rectangle and recording an edge from that color to
every other color found inside it builds a directed graph of "must be
stamped before" constraints. The grid is printable exactly when this
graph has no cycle, since a cycle means two colors each need to be
stamped before the other, which no order can satisfy; acyclicity is
checked with a topological sort (Kahn's algorithm or three-color DFS),
and the grid is printable iff every color gets ordered.

The number of distinct colors is bounded by the value range rather than
by the grid size, so building the graph costs one pass over the grid
per color to find its bounding rectangle, plus one more pass over each
rectangle to find the colors nested inside it.

**Complexity:** `O(colors * m * n)` time, `O(m * n + colors^2)` space.
