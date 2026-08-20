# Solutions — Leftmost Window With a Given Hash

## Backward Rolling Hash

Exponents in the formula climb left to right, so the rightmost character of
a window carries `power^(k-1)` and the leftmost carries `power^0`. Slide a
window one seat to the left — from `s[i+1..i+k]` onto `s[i..i+k-1]` — and
the hash transforms in constant time: subtract the departing character's
term `val(s[i+k]) · power^(k-1)`, multiply what remains by `power` (every
surviving character's exponent rises by one), then add the arriving
`val(s[i])`. A `% modulo` after each step keeps the arithmetic small, and
`top = power^(k-1) mod modulo` is computed once by fast exponentiation.

Rolling right-to-left is what keeps the recurrence tidy: each step removes
exactly one top-power term and appends one constant term, matching the
formula term for term. Scanning left-to-right would need the reverse
manipulation — dividing by `power` under the modulus or rescaling — for no
gain. One language note: Python's `%` is non-negative even after a
subtraction, so no guard is needed; elsewhere, add a multiple of `modulo`
before the multiply.

The code hashes the rightmost window `s[n-k..]` directly with ascending
powers, then rolls left across every window. Since the task wants the
earliest match, the scan keeps overwriting the answer on every hit —
rightmost first, leftmost last — so the value left standing is the first
window in string order, as in example 2 where "ana" occurs twice and the
index-1 copy must win. The guarantee that a match exists makes the initial
placeholder unreachable on the return path.

**Complexity:** `O(n)` time, `O(1)` extra space beyond the returned window.
