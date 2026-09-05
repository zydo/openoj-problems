# Solutions — Greatest Number Under a Bit-Price Budget

## Binary search over a closed-form running cost

The running cost — prices of `1` through `n` summed — only ever grows with
`n`, so the answer is the largest `n` whose running cost stays within `k`.
That is a boundary in a monotone sequence: double an upper bound until its
running cost first exceeds `k`, then binary-search between a cheap `lo` and an
expensive `hi`, and `lo` lands on the answer.

Each evaluation of `price_sum(n)` swaps number-by-number addition for
per-position counting. The running cost equals, summed over each watched
position `p = x, 2x, 3x, ...`, the count of numbers in `[1..n]` whose bit
`p-1` is set. Any fixed bit `b` alternates in blocks — `2^b` numbers with the
bit set, then `2^b` without — so over `n+1` values the count is
`((n+1) // 2^(b+1)) * 2^b + max(0, (n+1) mod 2^(b+1) - 2^b)`, full periods
plus a partial one. Positions with `2^(p-1) > n` contribute nothing and end
the loop, so an evaluation touches at most a few dozen positions no matter how
large `n` is.

Because `k <= 10^15` the answer sits below 2^60: the doubling phase and the
search together run well under a hundred evaluations, each a short loop of
scalar arithmetic. In the third worked example (`k = 15`, `x = 3`), the
watched bits are worth 4, 32, 128, ...; the flat stretches the statement
mentions are simply the gaps between one watched bit's blocks and the next's,
and the boundary lands at `n = 30`, where the running cost is exactly 15.

**Complexity:** `O(log^2 K)` time, `O(1)` space, with `K` the doubled upper
bound.
