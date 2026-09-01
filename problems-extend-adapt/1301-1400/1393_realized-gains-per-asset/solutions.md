# Solutions — Realized Gains per Asset

## Approach: Sum signed prices per asset

Every completed round trip contributes `sell price - buy price` to its
asset's bottom line, and the order of terms never changes a sum — so one
grouped pass over `Deals` is enough. Each `Buy` price enters negated and
each `Sell` price positive (a `CASE` expression picks the sign), and
`GROUP BY asset` collapses each asset's whole trading history into one
`net_gain_loss`.

The guarantees that every buy is eventually sold keep the totals honest —
no dangling rows skew an asset's figure, and an asset whose gains and
losses cancel simply reports `0`.

**Complexity:** `O(D)` time over the `D` deal rows, `O(A)` space for the
`A` distinct asset groups.
