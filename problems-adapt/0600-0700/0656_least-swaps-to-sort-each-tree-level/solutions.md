# Solutions — Least Swaps to Sort Each Tree Level

## BFS Levels Plus Cycle-Dissolving Swap Counts

Because an operation trades values only within one level, the levels never
interact: the reply is the sum, over levels, of the fewest swaps that put
that level's values in increasing order. The tree itself is a container — an
ordinary breadth-first sweep peels one level at a time (emptying exactly the
nodes queued at the round's start) and hands each level's value row to the
counting step.

Counting minimum swaps for a row of distinct values is a cycle fact. Sort a
copy of the row to learn each value's destination, and read off the
permutation that carries current seats to destined seats. Splitting it into
cycles, a cycle of length `c` is dismantled in exactly `c - 1` swaps: one
swap settles at most one value into its final seat, so `c - 1` is a lower
bound, and it is attained by repeatedly sending any unsettled value straight
to its destination. Values already in place are singleton cycles — free —
which is why the third example's tree needs no swaps at all.

Concretely, per level: `target = sorted(row)`, a dictionary `pos` from value
to its current seat, and a visited array. Landing on an unvisited, misplaced
seat `i`, follow `pos[target[j]]` around until the walk returns, tallying the
cycle length; add `length - 1`. The visited marks ensure every seat joins
exactly one walk.

Distinct values keep the destination mapping well defined. One BFS plus one
sort per level totals `O(n log n)` — the levels together hold `n` values —
and the cycle walks are linear overall, since each seat is touched a constant
number of times.

**Complexity:** `O(n log n)` time, `O(n)` space.
