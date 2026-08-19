# Solutions — Range Flips and Running Totals

## Lazy Segment Tree with Range Flip

Kind-1 instructions flip a range of `bits`; kind-2 instructions need only the
_total number of ones_ currently in `bits` (because `values[i] += bits[i] * p`
changes the total by exactly `p * popcount`); kind-3 instructions report the
running sum of `values`. The last two are constant-time bookkeeping once a
data structure applies a range flip and reports the total ones quickly — a
segment tree over the 0/1 array with a lazy flip flag, where flipping a
covered segment transforms its sum into `segment_length - sum`.

The tree holds per-node one-counts and pending-flip flags. A range flip
recurses like an ordinary point-update tree but stops early: a node fully
covered by `[l, r]` applies the flip locally (invert the count, toggle the
flag) and returns, so each instruction touches `O(log n)` nodes. The flag
means "your children's data is stale"; before recursing into a partially
covered node, `_push` hands the pending flip to both children and clears it.
The only read is the root's count, which lazy application keeps correct at
every node it touches, so the read path never pushes at all.

On top of the tree the driver carries `total = sum(values)` incrementally: a
kind-2 instruction adds `p` times the root count, a kind-3 instruction
appends the current `total`, and kind-1 instructions just call `flip`. This
is what keeps the whole run linearithmic — with `values` up to `10⁹` and both
arrays up to `10⁵` entries, rescanning `values` per instruction would be
`O(n)` each time. Building the tree once costs `O(n)` and the `4n`-sized
arrays hold counts and flags.

Worked on Example 1: after the flip, `bits = [1,1,0,0]` and the root count is
`2`; the two adds shift the total by `3*2` then `2*2`, from `14` to `24`, and
the records are `[20, 24]`.

**Complexity:** `O(n + q log n)` time, `O(n)` space.
