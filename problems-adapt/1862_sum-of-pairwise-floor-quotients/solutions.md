# Solutions — Sum of Pairwise Floor Quotients

## Frequency prefix sums over multiples

The key identity: `floor(x / y)` is exactly the count of positive multiples
of `y` up to `x` — tally `y`, `2y`, `3y`, … without passing `x`. Summing
that over all ordered pairs `(x, y)` and swapping the summation order
reorganizes the work: for every value `y` present and every multiple
`m·y`, add the number of elements `x` with `x >= m·y`, then weight the
whole thing by how many copies of `y` the array holds.

"How many elements are at least `m·y`" is a prefix-sum lookup. The code
builds a frequency array across the value range, folds it into a running
prefix `prefix[v] = #elements <= v`, and then for each `y` with nonzero
frequency steps `m = y, 2y, …` up to the maximum value, accumulating
`prefix[max_val] − prefix[m − 1]`. Each `y`'s accumulated figure is scaled
by its frequency and folded into the answer modulo `10⁹ + 7`.

The nested walk looks quadratic but is really the harmonic sum
`M/1 + M/2 + …` over the values present (`M = max(nums)`), which grows
like `M log M` — quick for values up to 100,000. Absent values are skipped
outright, and the ordered-pair reading, diagonal `i = j` included, falls
out of treating every present divisor-value on its own.

**Complexity:** `O(M log M)` time, `O(M)` space.
