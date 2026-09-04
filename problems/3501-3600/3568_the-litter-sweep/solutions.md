# Solutions — The Litter Sweep

## BFS over cell, litter mask, and remaining battery

Every move costs exactly one move, so breadth-first search in layers finds
the minimum move count. The state that matters is the cell, the set of
litter already collected, and the battery left: two visits to the same cell
holding the same litter set differ only in battery, and the visit with more
battery can always replicate whatever the other one does, finishing no
later. So the code keeps `best[cell][mask]`, the largest battery any visit
to that state has carried, and only enqueues arrivals that beat it — the
dominance pruning that keeps the state space near `cells × masks × battery levels`
worst case while behaving like plain BFS on small inputs.

Expanding a state tries the four neighbours of its cell, skipping obstacles
and grid edges. Moving costs one battery, except that arriving on a charging
pad `'R'` refills the battery to full, and a move that would leave the
battery negative is illegal outright — an empty battery permits no move
off a plain tile. Arriving on an uncollected `'L'` sets its bit in the mask; the
moment a move completes the full mask the search returns that layer's move
count, and if the layers run dry the litter cannot all be collected and the
answer is `-1`. A grid with no litter answers `0` before searching.

**Complexity:** `O(m * n * 2^L * battery)` time and space for at most `L`
litter cells (`m * n * 2^L` states, each expanded once per distinct battery).
