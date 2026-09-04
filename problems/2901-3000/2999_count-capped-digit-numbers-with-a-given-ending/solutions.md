# Solutions — Count Capped-Digit Numbers With a Given Ending

## Digit walk over the free prefix

Every qualifying number splits as a prefix glued to the fixed ending `s`:
value `a * 10^len(s) + int(s)`, where `a` is empty or a positive integer whose
digits all respect the cap. Only `a` is free, so the method computes
`f(finish) - f(start - 1)` and each `f(x)` counts admissible prefixes under the
bound `x`.

For one bound: when `x` is below `int(s)`, or `s` has more digits than `x`,
nothing qualifies. Otherwise `cap = (x - int(s)) // 10^len(s)` is the largest
prefix value that keeps the glued number within `x`. The empty prefix
contributes 1 — the number `s` itself, legal exactly because `x >= int(s)` —
and each prefix length `p` from 1 to `digits(x) - len(s)` adds the count of
`p`-digit capped numbers not exceeding `cap`. Longer prefixes would push the
total past `x`; shorter ones are exactly the earlier loop iterations.

`count_exact_len` settles each length in one of three regimes. Below
`10^(p-1)`: no `p`-digit number fits, answer 0. At or above `10^p - 1`: the cap
binds nothing, and the closed form `limit * (limit+1)^(p-1)` applies — the
leading digit picks from `1..limit`, the rest from `0..limit`. In between the
cap has exactly `p` digits and a memoized walk follows them with a `tight`
flag, branching over digits no greater than `min(cap digit, limit)`. Take the
first worked example, `finish = 1000`, `limit = 3`, `s = "21"`: `cap` comes
out as 9, so the 1-digit prefixes are `{1, 2, 3}` and 2-digit ones are cut to
zero — 3 plus the bare `21` gives 4. With `finish` at most `10^15`, at most 16
digits are ever in play, and `start - 1 = 0` correctly yields 0.

**Complexity:** `O(D^2 * limit)` time with `D` the digit count of `finish`,
`O(D)` space.
