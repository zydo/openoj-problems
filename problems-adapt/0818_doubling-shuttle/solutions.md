# Solutions — Doubling Shuttle

## BFS over (coordinate, speed) states

The shuttle's behaviour is fixed once you know both numbers describing it, so
take the pair `(coordinate, speed)` as a vertex. From it, `'A'` leads to
`(coordinate + speed, 2 * speed)` and `'R'` leads to `(coordinate, ±1)` with
the sign opposite to the current speed. Every command costs the same, which is
exactly the setting where breadth-first search is optimal: expand the start
vertex `(0, 1)` layer by layer, and the layer index at which a vertex first
appears is the fewest commands that produce it. Popping any vertex whose
coordinate equals the target ends the search and the current layer index is the
answer.

Two facts keep the frontier from exploding. First, only the pair identifies a
state, not the coordinate alone — standing on a spot moving right is a genuinely
different situation from standing on it moving left, and both routinely appear
in optimal strings, so the seen-set stores pairs. Second, speed magnitudes are
always powers of two, since a turn resets the magnitude to one and an add
doubles it; that leaves roughly `log(target)` speeds able to accompany any one
coordinate.

The coordinate itself still needs a fence, and twice the target is a safe one.
Sailing past that mark and coming back can always be replaced by turning
earlier, so pruning there discards no shortest string while making the
reachable set finite. Turns, by contrast, are never pruned: shedding a large
speed is precisely what a turn is for, and the optimal strings for most targets
use one or two of them.

**Complexity:** `O(T log T)` time and `O(T log T)` space for a target `T` — a
logarithmic number of speeds for each of `O(T)` coordinates, each state expanded
once.
