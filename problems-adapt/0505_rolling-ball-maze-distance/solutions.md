# Solutions — Rolling Ball Maze Distance

## Dijkstra over Stopping Cells

Steering is only possible where the ball rests, so treat the grid as a graph
whose nodes are _halting cells_ — the spots where a roll ends against a wall
or the border. From any such cell, simulate each of the four rolls cell by
cell until the next would enter a wall or leave the grid; where the roll
dies is the neighbor, and the number of cells covered is that edge's weight.
Rolls cover different distances, so weights vary, which disqualifies plain
BFS and points to Dijkstra.

The search carries `dist`, the cheapest distance known per halting cell, and
a heap of `(distance, cell)` entries. A pop either finishes the search — the
destination coming off the heap has its final distance, since Dijkstra
settles cells cheapest-first — or is dropped as stale, when the popped
distance is no longer that cell's best. Otherwise the four rolls are played
out; a roll that covers zero cells yields nothing, and a landing cell is
relaxed only if `d + steps` beats its record, then pushed. Should the heap
drain without the destination ever appearing, the ball has no way to halt
there and the result is `-1` — the situation in the corridor example, where
the only halting cells are the two corridor ends.

Taking halting cells as the state captures the task's subtlety unprompted:
a roll may glide across the destination, but only a roll that dies exactly
on it produces that node, while the start enters the heap at cost 0. On the
first example the settled chain is (0,0) → (2,0) → (2,2) → (3,2) → (3,4)
with edge costs 2, 2, 1, 2. With `m, n <= 100` there are at most `mn` cells,
each settled once behind four roll simulations of up to `m + n` steps, plus
the heap's logarithmic factor.

**Complexity:** `O(mn(m+n)log(mn))` time, `O(mn)` space.
