# Solutions — Most Trailing Zeros on a One-Bend Path

## Prime exponent prefix sums around each bend

How a product ends depends only on `min(v2, v5)` — how many factors of 2 and
of 5 its prime factorization carries — so the astronomically large products
themselves never have to be built. Each cell value is broken down once by
repeated division into `count2` and `count5`, and from that point on the whole
problem is addition. A one-bend path is an L: one horizontal stretch and one
vertical stretch meeting at a bend cell (either stretch may shrink to nothing,
which is what recovers straight runs and the single-cell path with no special
casing). So it is enough to nominate every cell as the bend and try the four
pairings of a left/right arm with an up/down arm.

Each arm's exponent total must be readable in constant time, which is what the
four prefix tables are for: running totals of `count2` and `count5` along each
row, and the same along each column, so any horizontal or vertical stretch is
one subtraction. Because both chosen arms include the bend cell itself, its
exponents land in the combined total twice; the `- cell2` and `- cell5` terms
correct for that. The answer is the largest value this produces over every
cell and every pairing, starting from `0` so that grids lacking a matched
2-and-5 anywhere still return zero.

On the first example, the bend sits at the `5` in the fourth row: the upward
arm carries `25 · 8 · 10` and the rightward arm adds `4`, for totals of six
2s and four 5s — `min(6, 4) = 4`, matching `40000` with its four final zeros.

Cell factorization, the four prefix tables, and the final sweep each do
constant work per cell, and every table is `O(mn)` in size.

**Complexity:** `O(mn)` time, `O(mn)` space.
