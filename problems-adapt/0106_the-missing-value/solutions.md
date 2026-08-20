# Solutions — The Missing Value

Two one-pass, constant-extra-space answers to the follow-up. One argues from a
known total, the other pairs values off against positions with XOR.

## Sum

The candidate range `0..n` is a complete run, so its total is fixed in advance
by the series formula `n(n+1)/2`. Whatever the array adds up to falls short of
that total by exactly the one value that did not turn up — there is only one
gap, so it absorbs the entire difference.

With `n = len(nums)` the whole method is
`n * (n + 1) // 2 - sum(nums)`. The floor division never truncates: among two
consecutive integers one is even, so the product is even before halving. And
because the entries are distinct, the difference isolates a single absent
value rather than some blend of several.

One pass, one formula, no auxiliary storage — the follow-up's ask on both
counts. Python's integers cannot overflow; the fixed-width ports accumulate
the series in a 64-bit integer, which at `n <= 10^4` is far more headroom than
the total of about `5 * 10^7` needs.

**Complexity:** `O(n)` time, `O(1)` space.

## XOR

The same pairing trick with a different partner set. The full range `0..n`
consists of the array's positions `0..n-1` plus the length `n` — so seeding an
accumulator with `n` and then folding in every index `i` and every element
`nums[i]` sets each candidate against each value actually stored. A stored
value meets its equal somewhere in the fold and cancels; the absent value meets
nothing and is all that remains.

Cancellation here is bitwise, so no intermediate value can exceed the width of
the operands in any language — the fold merely mixes bits. That removes the
one care point the sum approach carries in fixed-width ports (a 64-bit
accumulator for the series total), at the price of an XOR per element instead
of an addition.

**Complexity:** `O(n)` time, `O(1)` space.
