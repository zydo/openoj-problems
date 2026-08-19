# Solutions — Count Repeat-Digit Numbers

## Complement counting of distinct-digit numbers

There is no compact description of the repeat-digit numbers below a bound, but
there is one for their complement — the numbers whose digits are pairwise
different — because such a number is exactly a choice of digits without
replacement. So compute how many members of `[1, n]` have no digit twice, call
it `distinct`, and answer `n - distinct`.

`distinct` splits into two independent tallies. Numbers shorter than `n` are
unconstrained by `n` at all: for a length of `d` digits there are 9 ways to fill
the leading position, then 9 ways for the next (zero returns to the pool but the
leading digit is gone), then 8, and so on, giving `9 · 9 · 8 · ... ` with `d`
factors. Summing that over every `d` below the length of `n` handles all of
them.

Numbers of the same length as `n` need the digits of `n` itself. Scan them from
the most significant end, holding the prefix seen so far equal to `n`'s. At
position `i`, any digit strictly below `n`'s digit there and not already spent
by the prefix commits the number to being smaller than `n`, after which the
`length - i - 1` trailing positions may take any falling arrangement of digits
still unused — a product of `10 - i - 1`, `10 - i - 2`, and so on. Multiplying
the count of eligible smaller digits by that product and accumulating gives the
same-length tally. The leading position skips zero, since a zero there would
change the length.

The scan stops early if `n`'s own digits repeat, because from that position
onwards no distinct-digit number can share the prefix. If the scan instead runs
to the end, `n` itself has all-different digits and adds one.

At most ten digits fit in the input range, so both loops are bounded by ten
iterations of ten-step products — a few hundred operations regardless of how
large `n` is. Single-digit inputs fall out correctly with no special case: the
short-length tally is empty, the walk counts `n - 1` smaller values plus `n`
itself, and the difference is zero.

**Complexity:** `O(log^2 n)` time, `O(log n)` space for the digit list and used set.
