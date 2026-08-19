# Solutions — Distinct Subsequence GCDs

## Enumerate Candidate GCDs over Multiples

Listing subsequences is hopeless, so reverse the question: for each candidate
`g` from 1 to the maximum element, decide whether some subsequence has gcd
exactly `g`. The load-bearing fact is monotonicity — extra entries hold the
gcd in place or drag it down. Among all subsequences built from multiples of
`g`, the smallest gcd belongs to the subsequence that keeps *every* multiple
of `g` in the array. Hence `g` is attainable precisely when the gcd of all
present multiples of `g` equals `g`: that full set is a witness when it holds,
and when the gcd sinks below `g`, no thinner selection of multiples can pull
it back up.

The implementation marks the values present and, per candidate `g`, steps
through `g, 2g, 3g, ...` up to the maximum, folding each present multiple into
a running gcd seeded at 0 (the identity, since `gcd(0, x) = x`). The scan cuts
short the instant the running gcd lands on `g`: gcds only fall during folding,
so the candidate is settled and the remaining multiples cannot matter. A
present `g` itself is confirmed by the very first multiple.

Each attainable gcd is credited at exactly one iteration — its own — so
nothing is double counted. With `M` the maximum value, the multiple-scanning
loops sum to the harmonic series `M/1 + M/2 + ... + M/M`, which is what keeps
the method practical for values as large as 200,000.

**Complexity:** `O(M log M)` time, `O(n)` space.
