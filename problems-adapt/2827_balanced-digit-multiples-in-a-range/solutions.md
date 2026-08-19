# Solutions — Balanced-Digit Multiples in a Range

## Digit DP over Prefixes

Count qualifying values up to a bound with `f(n)`, the number of them in
`[1, n]`, and answer `f(high) - f(low - 1)`. Sweeping the range itself is
hopeless at a bound of `10⁹`, but a digit DP visits the decimal digits of `n`
once while carrying exactly what the two conditions need: the running digit
balance and the running remainder modulo `k`.

The state is `(pos, tight, started, balance, mod)`. `pos` is the digit index
in play; `tight` says whether the prefix built so far still matches the
bound's own prefix — which caps the next digit at the bound's, while a loose
prefix may take any digit up to 9; `started` separates leading zeros, since a
leading zero contributes nothing to either the balance or the digit count —
this is what makes `30` read as one odd and one even digit rather than three;
`balance` is the even-digit count minus the odd-digit count written so far;
`mod` is the number formed so far modulo `k`. A state at the final position
succeeds when at least one digit was written, the balance is zero, and the
remainder is zero.

The balance can never wander far — it is bounded by the digit count, ten at
most — so the memoized state space stays small, roughly positions × balance
values × residues, with a ten-way branch per state. Memoization carries the
weight: within one bound every loose subproblem is shared, so the recursion
enumerates states, not numbers. `f(0)` returns 0, which covers `low = 1`
where `low - 1 = 0` adds nothing.

**Complexity:** `O(D² · k)` time and space, with `D <= 10` the digit count of
`high`.
