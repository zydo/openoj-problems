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
