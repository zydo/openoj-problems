# Solutions — Three-Pile Solitaire Score

Every move removes exactly two stones and scores one point, so the
score is limited both by half the total stones and by the number of
stones outside the largest pile (the biggest pile can lose at most one
stone per move, and only while some other pile is non-empty). Sort the
piles as `x <= y <= z`; the answer is
`min(x + y, (x + y + z) / 2)`.

## Two regimes

If `x + y <= z`, the largest pile dominates: every move can pair one
of the `x + y` smaller stones with a stone from it, so all `x + y`
smaller stones are consumed for `x + y` points and `z - x - y` stones
sit stranded — no two non-empty piles remain. Otherwise the piles are
balanced enough that play always ends with at most one stone left
over: the total is drained two at a time for `(x + y + z) / 2` points
(rounded down, since a lone leftover stone is unpairable). Taking one
stone from the two largest piles each turn achieves this bound
greedily — it never lets one pile outgrow the others' combined ability
to drain it.

On `(1, 2, 10)` the two small piles sum to 3 <= 10: the dominated
regime gives 3. On `(5, 5, 5)` no pile dominates — 15 stones drain to
7 points with one left over, matching `(5+5+5)/2 = 7`. On `(3, 5, 9)`
both caps agree at 8: the 8 small stones all pair into the pile of 9.
All values fit easily in 32 bits.

**Complexity:** `O(1)` time, `O(1)` space.
