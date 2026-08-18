# Solutions — Digit One Tally

## Per-Digit-Place Counting

Tallying each number's 1s pays for work that has already been done, because a
count over a whole range factorizes by decimal place. Ask, for one place at a
time, how many of the numbers `0..n` have a `1` sitting at that place; the
wanted total is the sum over places. Fix a place of weight `factor` — 1, 10,
100, and so on — and cut `n` into three pieces around it: `higher`, the digits
above the place; `current`, the single digit at the place; and `lower`, the
digits beneath it. Divisions and remainders give all three.

Why the pieces answer the question: reading integers in order, the digit at a
fixed place walks a cycle of length `10 * factor`, and inside every cycle a
solid block of `factor` positions holds the digit 1. `higher * factor` counts
those finished blocks. What the in-progress block contributes is decided by
`current` alone. A `0` there means the walk has not yet reached the 1 block —
nothing extra. A `1` means it is inside the block right now, and every value
the lower digits can still take is fair game, which adds `lower + 1` (the `+1`
for all zeros below). A `2` or more means the whole block went by, adding a
further full `factor`, which folds into the `(higher + 1) * factor` form.

`n = 1000` exercises all three branches. The ones place: `higher = 100`,
`current = 0`, contributing 100; the tens and hundreds likewise 100 each; the
thousands place has `current = 1` and `lower = 0`, adding `0 + 1 = 1` — 301,
matching the statement's arithmetic.

The loop raises `factor` by a power of ten while it still divides into `n`,
one iteration per digit of `n`, and `n <= 0` returns 0 before any of it runs.
The arithmetic fits a machine word for `n` up to `10⁹`, with one trap: the
`factor * 10` inside the `higher` computation is the expression a fixed-width
language must widen, since the last iteration pushes it one power past `n`.

**Complexity:** `O(log n)` time, `O(1)` space.
