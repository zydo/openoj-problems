# Solutions — Sorted GCD Pair Queries

Materializing `gcdPairs` is impossible — it holds `n * (n - 1) / 2` up to
`≈ 5 * 10⁹` entries — but only the value at one sorted position per query
is needed, so it suffices to know how many pairs have each possible GCD
value and to prefix-sum those counts. Values are capped by
`max(nums) ≤ 5 * 10⁴`, a small enough universe to count over every
divisor directly.

## Divisor-bucket counting with inclusion-exclusion

Bucket the input frequencies and, for each divisor `d`, count how many
array elements `d` divides: any two of them form a pair whose GCD is a
multiple of `d`. That over-counts, so walk `d` from `max(nums)` down to 1
and subtract, from each bucket, the already-finalized exact counts of
every proper multiple — classic inclusion-exclusion, which leaves
`exact[d]` = the number of pairs whose GCD is exactly `d`. A prefix sum
over ascending `d` then answers each query `q` by binary search: the
answer is the smallest `d` whose prefix count exceeds `q`.

Pair counts peak at `n * (n - 1) / 2 ≈ 5 * 10⁹`, which overflows 32-bit
arithmetic mid-computation, and the query indices reach the same scale —
they are read as 64-bit integers (exact in JS/TS numbers, below 2⁵³).
Every answer itself is a GCD, at most `5 * 10⁴`, so the returned array
stays 32-bit. The harmonic divisor loops cost
`O(V log V)` for `V = max(nums)`; an equivalent bottom-up Möbius
inversion over the same divisor sums produces identical counts with the
same asymptotics.

**Complexity:** `O(V log V + n + q log V)` time, `O(V + q)` space.
