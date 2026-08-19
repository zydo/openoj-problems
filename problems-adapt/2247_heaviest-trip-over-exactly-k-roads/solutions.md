# Solutions — Heaviest Trip Over Exactly K Roads

## Bitmask DP over visited sets

A drive that uses exactly `k` roads is a simple path through exactly `k + 1`
distinct towns, and the only things that decide how far a partial drive can
still be stretched are the set of towns already behind you and the town you
stand in — the order of past visits is irrelevant. With `n <= 15` that set is
a 15-bit mask, so the state table `dp[mask][v]`, holding the heaviest toll
total of any simple path that covers exactly `mask` and finishes at `v`, has
at most `2^15 · 15` cells. Every singleton `dp[1 << v][v]` starts at 0: the
drive may begin in any town.

A transition appends one road: from `(mask, v)` step to a neighbour `u`
outside `mask`, proposing `dp[mask | 1 << u][u] = max(old, cur + toll)`.
Sweeping masks in increasing numeric order is already a valid processing
order, because every transition sets strictly more bits and therefore moves to
a strictly larger mask. Two refinements bound the work: masks holding more
than `k + 1` bits are never touched, and a state that already covers exactly
`k + 1` towns is complete — its total is folded into the answer rather than
extended. That reading by town count also keeps zero tolls harmless, since
feasibility tracks towns, not accumulated cost. When `k + 1` exceeds `n` no
simple path is long enough and `-1` comes back immediately; likewise `best`
never leaves `-1` when the network offers no drive of the required length.

On the first example, the state `{0, 1, 4}` at town `4` carries `6 + 9 = 15`;
the road `4 — 3` (toll `4`) completes a three-road drive worth `19`, which no
other state beats.

Each of the `2^n` masks pays one scan over towns and their adjacency lists —
every road is relaxed once per mask per direction — for `O(2^n · E)` in total,
tiny at this scale. The table itself is the memory driver.

**Complexity:** `O(2^n · (n + E))` time, `O(2^n · n)` space.
