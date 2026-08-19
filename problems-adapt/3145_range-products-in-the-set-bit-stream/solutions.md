# Solutions — Range Products in the Set-Bit Stream

## Prefix bit-counting with binary search

Because each stream entry is 2^b for some bit position b, a product over any
range is 2^(sum of exponents), and the query answer is `pow(2, exp, mod)`.
Reading the lists of 1, 2, 3, ... one after another is exactly reading their
binary expansions with set bits emitted lowest first, so everything reduces to
two prefix quantities over the integers 1..M: how many set bits appear in
total, and what their positions add up to.

Both prefixes lean on `_count_bit(M, b)`, the number of integers in [1, M]
whose bit b is set, written in closed form: full periods of length 2^(b+1)
donate 2^b ones apiece, and the partial period contributes whatever spills
past its 2^b offset. `_popcount_prefix` adds these counts across bits — the
stream length contributed by 1..M — while `_bitsum_prefix` weights bit b by b,
giving the exponent total. Each is a loop over the log2(M) positions.

`_exponent_sum(n)` — the exponent total of the first n stream entries —
binary-searches the largest M whose cumulative bit count fits inside n, takes
`_bitsum_prefix(M)` for the whole numbers, then finishes with the still-needed
entries from M + 1's set bits in ascending bit order, which is precisely the
order they occupy in the stream. A query [from, to] is then just two prefix
evaluations subtracted, and the stream itself is never materialized.

**Complexity:** `O(q · log² N)` time (N = 10¹⁵, the position bound),
`O(1)` space.
