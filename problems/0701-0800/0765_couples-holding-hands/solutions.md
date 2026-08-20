# Solutions — Couples Holding Hands

## Greedy couch fixing with a position map

Group the seats into couches: seats `2i` and `2i+1` must end up holding exactly one couple. Since couples are `(0,1), (2,3), ...`, the partner of person `x` is `x ^ 1` (flip the low bit). Build `pos`, a map from each person to their current seat, so any partner can be located in constant time.

Walk the couches left to right. For couch `(i, i+1)`, look at `first = row[i]`; if `row[i+1]` is already `first ^ 1`, this couch is done. Otherwise find the seat `j` where the partner sits, swap the partner into seat `i+1` and move the displaced person to seat `j`, update `pos` for both, and count one swap. Each swap permanently fixes one couch and never disturbs an already-fixed couch to its left.

This is optimal: in the graph whose nodes are couches and whose edges join the two couches a couple occupies, a cycle of `L` couches needs exactly `L - 1` swaps, so the minimum is `n` minus the number of connected components. The greedy achieves that lower bound because every swap it makes completes one couple's couch and shrinks the unfinished part of some cycle by one. An already-seated row performs zero swaps.

**Complexity:** `O(n)` time, `O(n)` space for the position map.
