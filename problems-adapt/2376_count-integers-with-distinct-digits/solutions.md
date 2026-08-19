# Solutions — Count Integers With Distinct Digits

## Length Combinatorics Plus a Digit Walk

Two groups make up the answer, and neither requires enumerating anything.
Every distinct-digit number with fewer digits than `n` sits below `n` by
definition, so its group is pure combinatorics. The remaining group —
distinct-digit numbers with exactly as many digits as `n`, still at most
`n` — is settled by walking `n`'s own digits while holding the prefix built
so far equal to `n`'s prefix and carrying a bitmask of the digits that
prefix has already spent. Write `D` for the digit count of `n`; since
`n <= 2 * 10⁹`, `D <= 10`.

For the first group: a `k`-digit number with no repeated digit picks its
leading digit in 9 ways (no leading zero) and each further position as an
ordered pick from the shrinking leftover pool, giving `9 * perm(9, k - 1)`
per length `k < D`. For the second group, stand at position `i` of `n` with
digit `d` there and try every smaller digit `x` that the prefix has not
used (`x >= 1` at the leading position to forbid leading zeros). Every
completion of such a prefix stays distinct-digit, and the remaining
`D - i - 1` positions fill by ordered picks from the `10 - (i + 1)` unused
digits — `perm(10 - (i + 1), D - i - 1)` each. Then `d` itself extends the
prefix; if `d` was already spent, this prefix can never yield a
distinct-digit number and the walk stops. A walk that clears all `D`
positions without a repeat means `n` itself qualifies and adds a final one.
On `n = 1210`: the shorter lengths give 738, position 1 contributes
`perm(8, 2) = 56` (prefix `10`), position 2 contributes `perm(7, 1) = 7`
(prefix `120`), and the digit `1` at position 3 is already spent, so the
walk ends at 801.

A one-digit `n` degenerates to the count `n` itself, and the arithmetic
never touches more than a few hundred multiplications because `D <= 10`.

**Complexity:** `O(D²)` time, `O(D)` space.
