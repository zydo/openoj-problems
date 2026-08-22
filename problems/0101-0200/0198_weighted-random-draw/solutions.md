# Solutions — Weighted Random Draw

## Prefix Sums and a Binary Search

Drawing index `i` with probability `weights[i] / sum(weights)` looks like a
sampling question until it is drawn as a picture. Write the running totals
`P[i + 1] = P[i] + weights[i]` and the line `[0, total)` falls into pieces
whose lengths are the weights themselves. A uniformly chosen point on that
line therefore lands in piece `i` with exactly the wanted probability, and
the only work left is finding which piece a given point lies in. Since the
piece boundaries grow left to right, that lookup is a binary search —
`bisect_left` in Python, a hand-rolled loop in Java — costing `O(log n)`.

For `weights = [2, 3, 5]` the boundary array is `[0, 2, 5, 10]`. A draw of
`target ∈ [1, 10]` resolves as: `1` or `2` hits piece 0, `3` through `5`
hit piece 1, and `6` through `10` hit piece 2 — shares of 2/10, 3/10, and
5/10, matching the weights.

The boundary convention has to be pinned down once and then obeyed on both
sides. The references draw `target` from `[1, total]` and return the piece
whose right boundary is the first one reaching `target`. Swapping a `>=`
for a `>` — or drawing from `[0, total)` while still searching the same
way — moves a single unit of probability onto a neighbouring index. Small
samples never expose that; the statistical judge, which checks every
index's frequency over thousands of draws, does exactly that.

The Java port accumulates the running totals into `long`: `10⁴` weights of
`10⁵` apiece sum to `10⁹`, which brushes the 32-bit limit and leaves no
headroom for the `+1` the drawing bounds need.

**Judged scale.** Roughly `1400` expected draws per index are needed before
a tolerance band clears the noise floor with margin, so the statistically
judged arrays stay at or under ~100 indices (draw counts rise to ~300000,
one `O(log n)` search per draw). A full-length `10⁴` all-equal array runs
as a validity case — every draw must return a legal index — with its
frequencies merged into one pool.

**Complexity:** `O(n)` construction, `O(log n)` per `drawIndex`, `O(n)`
space.

## Walker Alias Method

The line picture admits one more compression. Instead of leaving the
pieces in a row and searching for the one a point lands in, cut the
picture into `n` columns of equal height `total` and let index `i` keep
its own material in column `i`, filled to `weights[i] * n`. Those fills
average exactly `total`, so the overfull columns can pour their surplus
into the underfull ones until every column is exactly full — a column
that receives records its donor as an `alias` and answers for its own
index over the lower part of its height, for the donor over the rest.

A draw then consults no search structure at all. One uniform integer
`cell` over the `n * total` grid decomposes into column `cell mod n` and
level `cell div n`, and the answer is the column while the level sits
under its own fill, otherwise the alias — a modulo, a division, and two
array reads, `O(1)` where the prefix solution pays `O(log n)`. Like the
references above, each `drawIndex` spends exactly one unit of
randomness; it is decomposed rather than searched.

For `weights = [2, 3, 5]` the own-fills are `[6, 9, 15]` against the cap
`10`. Column `2` pours `4` units into column `0` and `1` more into
column `1`, leaving fills `[6, 9, 10]` with aliases `[2, 2, ·]`: levels
`0` through `5` of column `0` answer `0`, levels `6` through `9` answer
`2`; column `1` answers `1` through level `8` and `2` above it; column
`2` always answers `2`. Index `0` owns `6` of the `30` grid cells,
index `1` nine, index `2` fifteen — shares of `2/10`, `3/10`, and
`5/10`, matching the weights.

The build runs two worklists, underfull and overfull, pairing one column
from each until neither has work left. Each pairing settles one
underfull column for good, and a column crosses from overfull to
underfull at most once, so the loop runs at most `2n` times. Every step
is integer arithmetic — fills, cap, and grid are whole numbers — so the
distribution is exact by construction, with none of the rounding care a
fractional table would need; the comparison `level < fill` carries the
same one-unit sensitivity the boundary convention above does, and the
frequency judge catches a `<=` the same way. The grid is the one wide
object: `n * total` reaches `10¹³` under the stated limits, so the `long`
the Java prefix port already reaches for is required here too. Judging
is draw-heavy — up to about `300000` draws per case against one build —
which is exactly the regime the constant-time lookup is for.

**Complexity:** `O(n)` construction, `O(1)` per `drawIndex`, `O(n)`
space.
