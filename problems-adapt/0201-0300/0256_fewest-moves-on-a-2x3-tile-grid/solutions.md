# Solutions — Fewest Moves on a 2x3 Tile Grid

## Breadth-First Search over Layouts

Flatten the grid into a six-value state. Precompute the neighboring indices
of every cell in row-major order, so expanding a state requires only finding
the blank and swapping it with each permitted neighbor.

Run breadth-first search from the input state. A visited set prevents repeated
layouts, and the level or stored distance of the first target state is the
minimum number of moves. Return zero immediately for an already solved grid.

There are only `6!` possible permutations. If the queue empties, the input is
in the parity component that does not contain the target, so return `-1`.

**Complexity:** `O(N * N!)` time and `O(N!)` space for `N = 6`, effectively
constant for this fixed grid.
