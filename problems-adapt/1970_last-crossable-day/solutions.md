# Solutions — Last Crossable Day

## Binary Search on the Day with BFS Feasibility

Blocking is one-directional: once a cell is impassable it stays that way, so
the days that admit a crossing form an initial segment `1..d`, and the task
is to pin down `d`. Binary search does that in `O(log(RC))` probes provided
each probe answers one question — "after the first `m` blocks, does a
top-to-bottom path remain?" The probe loop takes the upper midpoint
(`mid = (lo + hi + 1) // 2`) so that a feasible mid moves the floor up and
an infeasible one drops the ceiling, converging on the final feasible day
without stalling.

Each probe is a breadth-first sweep. Rebuild the grid with the first `m`
entries of `cells` marked blocked, enqueue every open cell of the top row at
once — a multi-source seed, since the crossing may start anywhere along it —
and expand through open, unvisited, four-directional neighbors. The first
bottom-row cell the queue yields means the day is feasible; a drained queue
means it is not. Writing `R` and `C` for the grid dimensions, a probe costs
`O(RC)`.

The search window opens at day 1, which is always crossable: one blocked
cell cannot disconnect top from bottom in a grid with at least two rows and
two columns. In Example 2 the probe at `m = 2` finds the right column open
and returns feasible, while `m = 3` blocks the bottom of that column and
drains the queue — hence the answer 2. A disjoint-set alternative walks the
days in reverse, uniting each reappearing cell with its reappeared
neighbors, and stops the moment the top and bottom rows share a root; the
bounds match, at the price of trickier bookkeeping.

**Complexity:** `O(RC log(RC))` time, `O(RC)` space.
