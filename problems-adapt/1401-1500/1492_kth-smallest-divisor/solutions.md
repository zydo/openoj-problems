# Solutions — Kth Smallest Divisor

Two regimes exist. Scanning `1..n` and counting divisors is the direct
reading of the definition; scanning only up to the square root halves
that by pairing each small divisor `d` with its complement `n / d`. With
`n <= 1000` both are trivially fast, so the presented solution is the
pairing scan — the version that also answers the follow-up.

## Pair Small Divisors With Their Complements

Walk `i` from `1` while `i * i <= n`, counting every divisor as you meet
it in ascending order. When `k` is reached at some `i <= sqrt(n)`, return
`i` immediately. Otherwise let `c` be the count of divisors found up to
the square root; each remaining divisor is a complement `n / d` for a
small divisor `d < i`, met in descending complement order, so the wanted
index maps back through the count: if `k > 2 * c - (perfect square ? 1 :
0)` there is no k-th factor; else take the `(2c - k + 1)`-th smallest
small divisor's complement. Constant arithmetic per candidate.

**Complexity:** `O(sqrt n)` time, `O(sqrt n)` space for the recorded
small divisors.
