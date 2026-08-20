# Solutions — Kth Ancestor Queries

## Binary lifting (sparse ancestor table)

Walking to the kth ancestor one edge at a time is fine once and ruinous
`50,000` times: on a chain, a single query can cost the whole depth, and
the depth times the query budget dwarfs the limit. So the constructor buys
speed — it precomputes a table that makes each climb logarithmic.

**The table.** `up[j][v]` holds the 2ʲ-th ancestor of `v`, or `-1` once
that jump clears the root. Row 0 is simply `parent`. Each later row composes
the previous one with itself — the 2ʲ-th ancestor of `v` equals the
2ʲ⁻¹-th ancestor of `up[j-1][v]` — and `-1` absorbs: composing a jump that
left the tree with any other jump still leaves it. The table carries
`levels = ⌈log₂(n + 1)⌉` rows so that `2^levels > n ≥ k`, which is exactly
the room needed to spell any legal `k` in binary. Filling it row by row
costs `O(n log n)` time and space.

**The query.** Expand `k` in base two and take one stored jump per set bit:
`k = 11 = 1011₂` rides a jump of 8, then 2, then 1, and jumps compose, so
the order is free. The climb aborts the instant the current node turns
`-1` — the path was shorter than `k` — and a `k` wider than `levels` bits
is turned away before the loop starts. Each query reads the table at most
`⌈log₂ n⌉ ≈ 16` times, against up to `50,000` edge steps for the naive
climb.

**Why `-1` alone is enough.** Depths are never stored. The first jump to
overshoot the root writes `-1` into the table, every composition involving
`-1` stays `-1`, and the overshoot surfaces at the answer with no separate
bounds test. In the chain example, `kthAncestor(5, 5)` rides five single
edges to the root while `kthAncestor(5, 6)` hits the absorbing sentinel one
row up and returns `-1`.

The Python and Java ports implement exactly this scheme, differing only in
allocation — Java lays out a rectangular `int[levels][n]`, Python appends
row objects to a list. Both cover the degenerate shapes the tests exercise:
one node, pure chains, stars, and shallow wide trees where nearly every
query resolves after a jump or two.

**Complexity:** `O(n log n)` time and space to construct, `O(log n)` time
per `kthAncestor` call.
