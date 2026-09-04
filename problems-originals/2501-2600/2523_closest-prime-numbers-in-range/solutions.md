# Solutions — Closest Prime Numbers in Range

## Sieve of Eratosthenes plus a consecutive-prime scan

Every candidate pair is two primes inside `[left, right]`, so the first
job is knowing exactly which numbers in the window are prime. A Sieve of
Eratosthenes up to `right` computes all of them in one global pass:
multiples of each surviving base `f` are crossed off starting at
`f * f`. The window itself needs no separate logic — the scan just reads
flags between `left` and `right`.

The best pair can always be taken from _consecutive_ primes of the
window. If a pair has some other prime strictly between its members,
that interior prime forms adjacent pairs whose gaps are each smaller.
So one ascending sweep keeps only the previous prime seen; when the gap
to it improves on the current best, the pair is recorded. Replacing
only on strict improvement means the earliest qualifying pair survives
gaps — which is precisely the "smallest num1" tie rule.

Bounds are tiny (`right <= 10⁶`, gaps fit comfortably in 32 bits), so
the work is the sieve itself.

**Complexity:** `O(right log log right)` time for the sieve plus an
`O(right - left)` scan, `O(right)` space for the flag table.
