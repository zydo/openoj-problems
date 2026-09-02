# Solutions — Best Score From a K-Chip Draw

Only three chip values exist, so an optimal draw is fully determined by
priority: +1 chips first (each raises the total), 0 chips next (neutral
filler), and -1 chips only when nothing else remains. The k-chip budget
therefore splits into three regimes with closed-form answers.

## Priority-tier arithmetic

If `k <= numOnes` every drawn chip can be a +1, so the best total is
exactly `k`. Otherwise all +1s come out of the bag, worth `numOnes`;
while the leftover budget still fits inside the 0-chip tier
(`k <= numOnes + numZeros`) the total stays parked at `numOnes`, since
0s are free. Past both tiers, the draw must consume negatives, each
costing one point: the answer becomes
`numOnes - (k - numOnes - numZeros)`, which can descend as far as
`-numNegOnes` when `k` equals the bag size.

The reasoning is an exchange argument in disguise — swapping any chosen
0 for an unchosen 1 raises the total by one, so no optimal draw leaves
a +1 unpicked while holding a 0 or -1; applying the same comparison to
the 0/-1 pair orders the second tier too. Constant work, no data
structures, and all quantities live comfortably in 32-bit range given
the ≤ 50 chip counts.

**Complexity:** `O(1)` time, `O(1)` space.
