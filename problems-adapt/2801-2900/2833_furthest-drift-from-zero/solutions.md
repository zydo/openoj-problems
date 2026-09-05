# Solutions — Furthest Drift From Zero

## Spend every underscore on one side

The fixed moves leave nothing to decide: each `'L'` steps −1 and each
`'R'` steps +1 unconditionally, so after playing only them you sit at
the offset `left − right`, where `left` and `right` count the two fixed
characters. Only the underscores are choices — each can be spent as
either step — and Hint 1 observes they should never split: any mixture
only lets some of them cancel against the rest, so an optimal answer
rewrites every `'_'` with one single character.

Which character to pick follows from the offset. Extending the side the
fixed moves already favor pushes every underscore another unit away
from the origin, while extending the weaker side first has to burn
`|left − right|` of its supply just to cross back past 0. The furthest
reachable point is therefore `|left − right| + wilds`: for `"RR__LL"`
the two sides tie and the two underscores add up to a distance of 2; for
`"L_L_R"` the left side leads by one and the two wildcards extend the
reach to 3; for `"_"` there is no commitment at all, so the lone
wildcard reaches point 1.

Nothing larger than the input length can ever be produced, so plain
32-bit counters hold the arithmetic comfortably throughout.

**Complexity:** `O(n)` time, `O(1)` extra space.
