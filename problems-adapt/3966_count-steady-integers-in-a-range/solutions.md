# Solutions — Count Steady Integers in a Range

## Digit DP

The interval collapses into two threshold counts: write `f(x)` for the number
of steady integers in `[0, x]`, and the answer is `f(r) - f(l - 1)`. Each
`f(x)` comes from a digit DP over the decimal writing of `x` with state
`(pos, tight, prev, started)`: where we are, whether the prefix still
matches `x` digit for digit (a tight prefix caps the next digit at
`digits[pos]` rather than 9), which digit went down last, and whether a real
digit has gone down at all.

Leading zeros get the special treatment because they are decoration, not
digits: while nothing has started, laying a 0 keeps `started` off and clears
`prev`, asking no adjacency question. Once underway, a digit `d` may be laid
only when `abs(d - prev) <= k`. Reaching the far end of the digit string
scores 1 — every finished number counts, single-digit numbers having no
neighboring pair to interrogate, and 0 included with them.

Memoization lets each state be settled once. The `tight` states thread one
chain down the bound's digits, so nearly everything cached is a freely reusable
`tight = false` state; with `r <= 10^15` there are at most `D <= 16`
positions, ten candidate previous digits, and two flags, so both evaluations
are instant. And since `l >= 10`, the steadiness of 0 — which the DP grants —
subtracts away.

On Example 3 the two walks agree with the eye: `f(10005) - f(9994)` picks out
9997 through 10002, the six integers whose digit steps all stay within 2.

**Complexity:** `O(D * 10^2)` time, `O(D * 10)` space.
