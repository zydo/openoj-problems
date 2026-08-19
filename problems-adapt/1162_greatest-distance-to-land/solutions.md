# Solutions — Greatest Distance to Land

## Multi-Source BFS

Asking, for each water cell separately, how far away its nearest land is
means running a search from every cell. Reverse the direction instead: seed
one BFS from every land cell at once and let the wavefront grow. Since all
sources start at distance 0, the wavefront first touches a water cell along
a shortest path from its closest land — a multi-source BFS delivers
nearest-source distances everywhere in a single pass. Whatever the wavefront
absorbs last sits at the greatest distance, which is precisely what is
wanted.

![Three corner land cells seed the wavefront; it expands in unit steps and
the last two cells are absorbed at distance 2.](figures/solution-land-distance.svg)

The grid is copied first so the input stays untouched, all land cells are
enqueued, and the visited marker costs nothing extra: a water cell flips to
`1` the moment it is enqueued, which rules out a second enqueue. The search
proceeds level by level, taking a snapshot of the queue length each round
while `dist` counts completed levels. Each level moves in the four cardinal
directions — on an unobstructed grid the shortest 4-directional path equals
the Manhattan distance, which is why plain BFS measures the right thing.

Degenerate grids are turned away up front: no land (the seed queue starts
empty) or no water (the queue already covers the grid) both answer -1. With
water present, the final round runs on the deepest level and enqueues
nothing, so the returned value is `dist - 1`; a grid whose land touches
water directly yields 1, as it should. An `n x n` grid is read once.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
