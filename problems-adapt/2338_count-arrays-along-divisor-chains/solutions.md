# Solutions — Count Arrays Along Divisor Chains

## Divisor Chains by Length with Stars-and-Bars

Start by noticing what an array of this kind looks like: it is non-decreasing,
and its run of distinct values `v1, v2, ..., vL` satisfies `v1 | v2 | ... | vL`
with each division strict. Running the correspondence the other way, a strict
chain of `L` values becomes arrays by letting each value own a non-empty run
of consecutive positions; the number of ways to split `n` positions into `L`
ordered runs is the stars-and-bars binomial `C(n-1, L-1)`, and distinct
chains give distinct arrays. So the whole answer is
`Σ_L C(n-1, L-1) · (chains of length L)`.

Counting chains of a given length is a sieve-flavored DP over values. Hold
`dp[v]` = number of strict chains of the current length that end at `v`, one
chain per value at length 1. To extend, push each `dp[v]` into `ndp[m]` for
the multiples `m = 2v, 3v, ...` up to `maxValue` — one harmonic-sum pass per
length. The binomial is carried along incrementally,
`C(n-1, L) = C(n-1, L-1) · (n-L) / L`, the division done by modular inverse,
and every product is reduced modulo `10⁹ + 7`.

The loop terminates far short of `n` in practice: a strict chain at least
doubles each step, so chains cap out near `log2(maxValue) + 1` values (about
fourteen at `10⁴`), and the pass halts the moment no chains remain. Constant
arrays are covered by the length-1 term with `C(n-1, 0) = 1`, and
`maxValue = 1` collapses to exactly one array. For a feel of the numbers:
`n = 4, maxValue = 2` gives five arrays — two constants plus the three
placements of the chain `1 | 2`.

**Complexity:** `O(maxValue · log²(maxValue))` time — at most
`log2(maxValue) + 1` sieve passes of harmonic-sum cost each — and
`O(maxValue)` space.
