# Solutions — Paying To Isolate A Coprime Value

## Prime-factor inclusion-exclusion

Precompute how many inputs are divisible by every divisor. For each possible
chosen value, inclusion-exclusion over its distinct prime factors counts the
conflicting entries, and the cheapest rewrite count follows from whether
that value is already present.

**Complexity:** `O(M log M + M * 2^w)` time, `O(M)` space, where `M` is the
largest value in play and `w` the number of distinct prime factors.
