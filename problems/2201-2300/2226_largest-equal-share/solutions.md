# Solutions — Largest Equal Share

## Binary search on the answer

Set a candidate share `s` and ask whether the piles can satisfy `k` children at
that size. A pile holding `p` tokens splits into `floor(p / s)` shares of `s`
(whatever is left over is waste), so the whole question reduces to comparing
`Σ floor(p / s)` against `k`. Feasibility only ever moves one way: if `s` works,
every smaller share works too, since fewer tokens are demanded per child. The
answer is the largest feasible `s`, i.e. the boundary of a monotone predicate —
exactly what binary search locates.

The feasibility check `can` sweeps `piles` once and stops the instant the
running share count reaches `k`, so oversized candidates are rejected early.
It also treats `s = 0` as feasible, which anchors the search's low end: when
the tokens cannot go around even one apiece, the boundary never leaves `0` and
that is what gets returned.

The search itself spans `[0, max(piles)]` and takes the upper midpoint
`mid = (lo + hi + 1) // 2`. A feasible `mid` lifts `lo` up to `mid`, an
infeasible one drops `hi` to `mid - 1`; the `+ 1` matters because with the
plain midpoint the two bounds could sit forever at distance one, each step
leaving the interval unchanged. On exit `lo` is the best share.

Working through `piles = [6, 9, 4]` with `k = 4`: the interval opens at
`[0, 9]`; `s = 5` yields `1 + 1 + 0 = 2` shares, too few, so the interval
becomes `[0, 4]`; there `s = 2` gives `3 + 4 + 2 = 9` shares, moving up to
`[2, 4]`; `s = 3` gives `2 + 3 + 1 = 6`, still feasible, so `[3, 4]`; finally
`s = 4` gives `1 + 2 + 1 = 4` shares — exactly enough — and the search closes
at `lo = 4`.

`k` runs to `10¹²`, so share totals need full-width arithmetic; Python's
integers make that a non-issue, and no floating point appears anywhere in the
computation. Each feasibility probe reads the array once and the search makes
`O(log max(piles))` probes, with no storage beyond a few scalars.

**Complexity:** `O(n log(max(piles)))` time, `O(1)` space.
