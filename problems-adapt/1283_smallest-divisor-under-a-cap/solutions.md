# Solutions — Smallest Divisor Under a Cap

## Binary Search on the Divisor

Rounding up, then summing, gives a function of `d` that can only fall or hold
as the divisor grows — every `ceil(x / d)` is individually non-increasing. So
the predicate "the sum stays within `cap`" fails on the left of some boundary
and holds on the right of it, and the smallest divisor satisfying it is the
first `true` in that run. A plain lower-bound search over `[1, max(nums)]`
finds it; there is no reason to look past `max(nums)`, where every quotient
is already 1 and the guarantee tells us that sum is acceptable.

Each probe of a candidate sums `(x + d - 1) // d` — ceiling division done in
integers, with no floating point anywhere. The interval shrinks until its two
ends meet, and the meeting point is the answer: the first divisor whose sum
fits.

The ends are safe by construction: `1` is the smallest positive divisor, and
an answer is guaranteed to exist within the range, so the search always
terminates on a valid divisor.

**Complexity:** `O(n · log(max(nums)))` time, `O(1)` space.
