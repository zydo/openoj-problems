# Solutions — Count Intended Strings of Length at Least K

## Block-Choice Product Minus a Bounded Knapsack

Split `word` into its maximal blocks of equal letters. An intended string
is nothing more than a choice of how many letters each block stands for:
a block of `c` copies may account for any number from `1` to `c`, the
blocks stay in order, and nothing else is free. The choices are
independent, so the number of intended strings with no length condition
attached is the product of the block lengths, taken modulo `10⁹ + 7`.

The length floor `k` is best handled by complement. A tuple of block
counts falls short exactly when its total is below `k`, and counting
those tuples is a bounded knapsack: `dp[j]` holds the ways for the
blocks processed so far to total exactly `j`, and a block of length `c`
moves each entry to every `j` reachable within `c` of it. Processing
that window naively is quadratic in `k`; taking prefix sums of the old
`dp` first turns the transition into one subtraction per target,
`ndp[j] = prefix[j] - prefix[max(0, j - c)]`. After every block has been
folded in, the sum of `dp` over `j < k` is the short-string count, and
the answer is the product minus it.

One case never needs the knapsack at all: since a block never contributes
fewer than one letter, every tuple has length at least the number of
blocks `r`, so `k <= r` makes the product itself the answer — and,
conveniently, the knapsack only ever runs when `k > r`, bounding its work
by `r · k`.

Worked on `word = "abbbcc"` with `k = 5`: the blocks have lengths
`1, 3, 2`, the product is `6`, and the short tuples are `(1,1,1)`,
`(1,2,1)`, `(1,1,2)` of lengths `3, 4, 4`, so the answer is `6 - 3 = 3`.
A single block collapses to subtraction-free arithmetic: `word =
"zzzzzz"` with `k = 4` leaves the three lengths `4, 5, 6`. The modulo is
carried through every step so the final subtraction is reduced correctly
even when the complement is huge.

**Complexity:** splitting `word` of length `n` into `r` blocks is
`O(n)`; the knapsack is `O(r · k)` time and `O(k)` space.
