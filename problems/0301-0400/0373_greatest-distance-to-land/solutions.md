# Solutions — Greatest Distance to Land

Both sections compute the same object — the field of nearest-land Manhattan
distances over the whole grid — and differ only in how they fill it. The
multi-source BFS grows the field as a wavefront: every land cell seeds the
search at distance 0, and the frontier's level numbers are the distances. The
two-pass DP fills the same field without any search: a cell's distance is one
step past a neighbor's, so a sweep in reading order and a sweep back relax
every cell directly, and the queue disappears.

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

## Two-Pass DP

Filling the distance field does not require a search at all. The distance at
a cell relates to the distances at its neighbors: land in the up-left
direction is accounted for by the neighbors above and to the left, land in
the down-right direction by the ones below and to the right, and in each
case the cell sits one step beyond the better neighbor. That is a
recurrence, and it comes with a direction — a sweep from the top-left corner
in reading order settles every cell against up and left, and a second sweep
from the bottom-right corner settles them against down and right.

The code lays out the field first: land cells at `0`, water cells at a
sentinel standing in for infinity — any value above the largest distance the
grid can hold (`2n - 2`) is safe, so `n * n` is the pick. Degenerate grids
answer -1 before any sweeping, exactly as in the BFS: no land leaves no `0`
in the field, no water leaves no sentinel. Each sweep then walks its order
and takes a neighbor's value plus one whenever that improves the cell; land
cells never move, since a neighbor's value plus one is at least 1. The
answer is the largest value in the finished field, tracked while the second
sweep runs.

Two sweeps are enough because Manhattan paths are monotone: the path from a
water cell to its nearest land uses at most two directions, and those
directions always fall to the sweeps in running order — land up-left needs
only the first sweep's moves, land down-right only the second's, and each
mixed quadrant a leading leg of one sweep finished by the other. With land
present, every water cell ends at a true distance, so the maximum is
honest. The input grid is only read, the field is the one allocation, and
each cell is touched a constant number of times.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
