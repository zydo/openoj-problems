# Solutions — Last Crossable Day

Both routes trade on the same monotonicity: a blocked cell never reopens,
so the crossable days form an initial stretch whose right end is the
answer. Binary search pins that end down by probing days from above,
rebuilding the grid and paying a full breadth-first sweep for every probe.
The reverse-day walk flips the arrow of time instead: land reappears one
cell at a time, a disjoint-set union absorbs each return in near-constant
amortized work, and virtual sentinels for the two shores reduce the whole
question to a single root comparison.

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
drains the queue — hence the answer 2.

**Complexity:** `O(RC log(RC))` time, `O(RC)` space.

## Reverse-Day Union-Find with Virtual Sentinels

Running time backwards dissolves the search. Reading `cells` from the last
entry to the first, land reappears one cell per step, so the open region
only grows and every merge stays done — connectivity accumulates instead
of being re-derived for each probe. A disjoint-set union is built for that
regime: each returning cell is absorbed with a handful of merges, and path
halving on `find` paired with union by size keeps every operation
amortized near-constant — the inverse-Ackermann bound.

The two shores become two extra nodes, appended after the `R * C` cell
ids. When a cell reappears it joins the top sentinel if it lies in the
first row, the bottom sentinel if it lies in the last, and every
four-directional neighbor that has already reappeared. One index
alignment then replaces the whole probe loop: after absorbing `cells[i]`
the flooded set is exactly the first `i` entries — the grid state of day
`i` — so the first time `find(top)` and `find(bottom)` agree the loop
returns `i` outright, knowing the connection cannot be older, since the
state one day later was checked one iteration earlier and found split.

In Example 1 the walk back from day 6 returns (2,1), claimed by the
bottom sentinel, then (1,3), claimed by the top; the third return, (2,3),
welds those components together, so the answer is 3. A drained loop falls
back on 0, which the constraints put out of reach: with at least two rows
and two columns even day 1 leaves a crossing. One sweep replaces the log
many probes, and each of its `RC` absorption steps costs only a constant
number of finds and unions.

**Complexity:** `O(RC α(RC))` time, `O(RC)` space.
