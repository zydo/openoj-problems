# Solutions — Counting Uniform Substrings

A uniform substring lives entirely inside one maximal run of equal
characters, and a run of length `k` contributes `k * (k + 1) / 2` of
them — one for each choice of both endpoints inside the run.

## Run-length accumulation

Walk the string once carrying the current run length: it grows by one
when the character repeats the previous one and resets to one
otherwise. Adding the running length at each step charges every
position with the number of uniform substrings ending there —
position `i` inside a run contributes exactly its distance from the
run's start — which sums to the per-run triangle totals without ever
splitting the string explicitly. The running total is kept modulo
`10^9 + 7`; the per-step addition stays below the modulus after each
reduction, so 64-bit accumulators in the fixed-width languages never
overflow.

On `"baaaab"` the runs are `b, aaaa, b` with lengths 1, 4, 1,
contributing 1 + 10 + 1 = 12. On `"gghhigg"` the blocks 2, 2, 1, 2
contribute 3 + 3 + 1 + 3 = 10. A long single-character string at the length bound
wraps the modulus several times, which the modular accumulation
absorbs naturally.

**Complexity:** `O(n)` time, `O(1)` extra space.
