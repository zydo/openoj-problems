# Solutions — Largest Subarray Product

## Max/Min Product Tracking

The sum version of this problem needs one running value; the product version
needs two, and the reason is sign. Multiplication by a negative entry inverts
comparisons, so the best block ending at the next position may well be the
_worst_ block ending at this one, stretched by one. Discard the worst and you
lose the answer.

So the sweep keeps `cur_max` and `cur_min`, the extreme products among blocks
that end exactly at the current index. When the entry about to be absorbed is
negative, the two are exchanged first; after that exchange the ordinary
reasoning applies to both, and each takes the better of two candidates — begin
a new block at this entry, or extend the block behind it. `best` records the
running maximum, and it is seeded with the first entry rather than with zero,
which is what lets an array like `[-6]` answer with a negative number.

Zeros require no branch of their own. Absorbing a zero collapses both extremes
to zero, and at the following entry the "begin a new block here" candidate
immediately lifts the chain off the floor again, so no block is ever forced to
straddle the zero. In `[-5,0,7,-2]` that is exactly what happens: the extremes
reset at the zero, `7` restarts them, and `best` never rises above `7`.

Because a fresh start is always among the candidates, the value in `best` is
the product of some real, non-empty block at every point in the sweep.

**Complexity:** `O(n)` time, `O(1)` space.
