# Solutions — Mark Diameter Endpoints in a Tree

## Double BFS

The whole method hangs on one tree fact: start a breadth-first sweep anywhere,
and every node that ties as farthest from the start terminates some diameter.
The first sweep therefore collects the entire farthest set rather than a single
champion — each member is a legitimate diameter end on the far side of the
tree relative to where the sweep began. Ties are the point: a tree with
several equal arms has several ends on that side, and keeping them all is the
only way not to lose answers.

A second sweep then runs from any node `u` in that first set. Because `u` is
itself a diameter end, the largest distance this sweep records is the diameter
`D`, and every node sitting exactly `D` away from `u` is the opposite end of a
diameter. Marking the union of the two farthest sets and printing one
character per node produces the answer string.

![Example 2's tree annotated with the two sweep distances d₀ and d₃: the nodes farthest from 0 are {2, 3}, the nodes farthest from 3 are {0, 4}, and the union spells "1011100".](figures/solution-double-bfs.svg)

Mechanically, each sweep is an adjacency walk with a list as its FIFO queue,
a `dist` array, and a running maximum; the helper hands back every index whose
distance equals that maximum, which absorbs all ties for free. Each node
enters the queue once per sweep. The odd cases need nothing extra: in the
star of Example 3 the first sweep from the center returns all four leaves, the
second sweep from one leaf returns the other three, and the union is the four
marked leaves.

**Complexity:** `O(n)` time, `O(n)` space.
