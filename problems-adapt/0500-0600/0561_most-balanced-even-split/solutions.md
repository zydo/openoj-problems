# Solutions — Most Balanced Even Split

## Meet in the middle

Trying every group is `C(2n, n)` — hopeless at `n = 15`. Cut the array in
the middle instead. A candidate group of `n` values draws `c` values from
the first half and exactly `n - c` from the second; call its first-half
sum `a` and its second-half sum `b`. The gap is then `|total - 2(a + b)|`,
so for each `a` the hunt is for a same-count `b` steering `a + b` toward
`total / 2`.

Enumerate each half's subset sums bucketed by element count — `A[c]` lists
all sums of `c`-element subsets of the first half, `B[c]` the second — by
walking every bitmask of a half, which holds at most `2^15` of them. For
each count `c`, sort `B[n - c]` once; then for each `a` in `A[c]`, binary
search for the `b` whose doubled value first reaches
`total - 2a` (`2b >= total - 2a` — exact integers, no fractional half-sum)
and evaluate the candidates on both sides of that boundary. The best gap
over all counts and all `a` is the answer.

The count bucketing is what enforces the equal group sizes; the split of
the enumeration is what shrinks `2^(2n)` to two passes of `2^n`. Negatives
need no special care — the search compares sums directly and assumes
nothing about their ordering.

For `nums = [5,-3,7,-4,2,-1]` (total `6`, target `3`): with `c = 1`, the
sum `a = 5` from the first half `[5,-3,7]` pairs with `b = -2` from the
second half `[-4,2,-1]`'s two-element bucket — `5 - 4 + 2 = 3` on one
side, `-3 + 7 - 1 = 3` on the other — and the gap closes at `0`, which the
binary search confirms as unbeatable.

**Complexity:** `O(n · 2^n)` time, `O(2^n)` space.
