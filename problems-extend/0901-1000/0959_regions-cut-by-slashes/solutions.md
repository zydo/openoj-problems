# Solutions — Regions Cut By Slashes

Every marking is a wall segment running between two corners of its
square, so a region is one connected piece of empty space once all the
walls are up — and counting regions is a connectivity question about a
layout the input only implies. The walls live below square resolution:
two open areas can meet around a corner as well as along an edge. The
productive move is to raise the resolution just enough — quarter every
square — and track the pieces with a union-find.

## Quarter each square, then union every pair of triangles that touch

Give each square `(i, j)` four triangles — top, right, bottom, left —
stored at `4 * (i * n + j) + t`, each starting as its own set. A square's
marking says which of its own triangles join: a blank joins all four, a
`/` joins top with left and right with bottom, and a `\` joins top with
right and bottom with left. Across square borders the joins are forced by
geometry — the bottom triangle of `(i, j)` shares its whole open edge
with the top triangle of `(i + 1, j)`, and the right triangle of `(i, j)`
with the left triangle of `(i, j + 1)` — so union those pairs as well.
Union everything that touches, and each surviving set is exactly one
region; since roots are precisely the self-parented nodes, one sweep
counting `parent[x] == x` over all `4 * n * n` triangles returns the
answer.

The quartering is faithful at exactly the resolution the walls need: a
wall's endpoints are square corners, so two open areas can touch only
inside a square, along a shared edge, or around a corner — and each of
those contacts is a union between two named triangles, while any two
areas separated by a wall share none. The implementation never recurses:
`find` walks parent links up to the root and compresses the walked path
in a second loop, so no call stack grows with the grid, and the inverse
Ackermann growth of the union-find keeps the whole pass effectively
linear in the number of triangles.

**Complexity:** `O(n² α(n²))` time, `O(n²)` space.
