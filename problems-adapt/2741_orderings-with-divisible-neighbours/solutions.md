# Solutions — Orderings with Divisible Neighbours

## Bitmask Dynamic Programming

With `n <= 14`, a partial arrangement is fully captured by which indices
are already down and which one landed last, motivating `dp[mask][last]`:
the number of ways to lay out exactly the indices in `mask`, ending on
`last`, with every neighbour pair so far divisible. Single values seed the
table with 1, and the answer sums `dp[full][last]` over every candidate
final value.

Transitions push rather than pull: from a live state `(mask, last)`, any
unused index `nxt` may follow when its value and `nums[last]` divide one
another — the test is symmetric, `nums[last] % nums[nxt] == 0` or the
reverse — and its way-count lands in `(mask | 1 << nxt, nxt)`. Each linked
arrangement splits uniquely into a chain of such single-value extensions,
so nothing is counted twice; every addition is reduced modulo `10⁹ + 7`.

Walking masks in increasing order guarantees every state is final before it
propagates, and zero-way states drop out immediately. The three nested
loops — mask, last, next — make `2^n · n²` transitions, roughly 3.2 million
at `n = 14`.

Take `[3, 5, 15]`: divisibility links 3↔15 and 5↔15 but not 3↔5, so a
linked arrangement must read `3, 15, 5` or its mirror — two ways, which the
table reaches by pushing 15 onto the singleton 3 (or 5) and then the
remaining value onto 15.

**Complexity:** `O(2^n · n²)` time, `O(2^n · n)` space.
