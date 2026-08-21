# Solutions — Most Value in K Consecutive Cells

## Sorted runs, prefix sums, and two candidate blocks per run

A block of `k` cells can always be shifted until its left edge coincides with
some run's `li` or its right edge with some run's `ri`: sliding across empty
cells or along the interior of a constant-value run changes nothing, so the
shift loses no value. Testing both alignments for every run — starts at `li`
and at `ri - k + 1` — therefore covers the optimum while replacing `10⁹`
candidate positions with `2n`.

Evaluating one block means summing the value inside `[start, start + k - 1]`.
Sort the runs by left endpoint and precompute each run's total
`ci · (ri - li + 1)` under a prefix sum over runs. A block clips at most two
runs partially and covers a contiguous run of them wholly, so two binary
searches bracket it — the first run whose right end reaches the block
(`bisect_left` on the rights), the last whose left end falls inside it
(`bisect_right` on the lefts, minus one) — the prefix sum prices the middle,
and each clipped end contributes its overlap length times its density. A
block touching no run is worth zero.

![Runs [1,4]x3, [6,7]x5 and [9,10]x2 with k = 4: the window ending at r = 7 collects 13, the one starting at l = 6 only 12.](figures/solution-segment-windows.svg)

On the drawn example, the block ending at the middle run's `ri = 7` reaches
across the gap (`3 + 0 + 5 + 5 = 13`) while the block starting at its
`li = 6` runs off the right end (`5 + 5 + 0 + 2 = 12`) — the two alignments
a single run contributes, and here the right-aligned one wins.

Exactness needs no case analysis: cells outside every run hold nothing and
the runs are disjoint, so clipping both partial ends and summing whole runs
in between never counts a cell twice.

Edge behaviour: `ri - k + 1` can dip below 1 when `k` outreaches a run toward
the start of the line; the positions before 1 simply hold nothing, and the
binary searches cope because no run covers them. Small blocks lying wholly
inside one run take the single-run branch (`a == b`), and blocks covering no
whole run get only their two clipped parts. Sorting dominates the runtime;
each of the `2n` evaluations costs two binary searches plus constant
arithmetic.

**Complexity:** `O(n log n)` time, `O(n)` space.
