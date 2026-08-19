# Solutions — Nth Multiple of Any of Three Divisors

## Binary search with inclusion–exclusion

Let `count(x)` be how many of the multiples sit at or below `x`. This
function never decreases, and the answer is the smallest `x` with
`count(x) >= n` — necessarily itself a multiple, since a non-multiple `x`
would leave `count(x - 1)` equal to `count(x)` and a smaller witness would
exist. Monotonicity turns the value range into a binary search, bounded
above by the guaranteed answer ceiling of `2 · 10⁹`; the invariant "the
answer lies in `[lo, hi]`" shrinks left when `count(mid) >= n` and right
otherwise, converging in about 31 halvings, each one constant-time counting
work.

The count comes closed-form from inclusion–exclusion. Adding `x // a`,
`x // b`, `x // c` double-counts the numbers divisible by two divisors,
so the multiples of each pairwise least common multiple come back out, and
the multiples of `lcm(a, b, c)` — thrown out once too often — go back in.
Divisors that divide each other need no special case: `a = 3` with `b = 6`
and `c = 9` collapses to counting multiples of 3 alone, because the least
common multiples collapse to it too, and Example 2's list `3, 6, 9, ..., 21`
falls out of the same formula.

Least common multiples are built from a gcd, `x // gcd(x, y) * y`, dividing
before multiplying so intermediates stay small. Even so the pairwise and
triple values can reach `10¹⁸` — Example 2's constraints permit products of
that size — so every term lives in 64-bit-or-wider arithmetic; the search
range's top of `2 · 10⁹` keeps the counts themselves comfortable.

**Complexity:** `O(log(2 · 10⁹))` time, `O(1)` space.
