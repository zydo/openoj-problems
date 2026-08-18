# Solutions — Fewest Palindrome Cuts

## Cut DP with Centre Expansion

Write `cut[i]` for the fewest cuts needed by the first `i` letters, and give
`cut[0]` the value `-1` — a sentinel whose only job is to make a prefix that is
itself one qualifying stretch cost zero, since the recurrence then adds one to
`-1`. Every other entry starts at its fallback value, one less than its index,
which is what cutting between every pair of letters costs.

The recurrence closes an optimal partition of the first `i` letters with its
final piece: that piece is some qualifying stretch `s[j..i)`, and removing it
leaves the first `j` letters, so `cut[i]` is the minimum of `cut[j] + 1` over
every such `j`.

The expensive-looking part is knowing which stretches qualify, and a table
would answer it at quadratic memory. The alternative is to generate the
qualifying stretches instead of testing for them. Every stretch that reads the
same in both directions has a centre — a single letter for odd lengths, the gap
between two letters for even ones — and widens outward from it as long as the
two ends match. Walking all `2n - 1` centres and widening each one produces
every qualifying stretch exactly once, at its own centre, and each widening
step can relax `cut[r + 1]` with `cut[l] + 1` immediately. Centres are visited
left to right, and every stretch that could improve some `cut[l]` ends at
letter `l - 1`, hence at a strictly earlier centre — so each value the
expansion reads is already final.

On `"sever"` the gap between the two e's widens into `eve` and relaxes the
entry for the first four letters to `cut[1] + 1 = 1`; the trailing single
letter then carries that to `cut[5] = 2`, the pieces being `s`, `eve`, `r`,
and no centre produces anything better. `"otto"` needs the whole-string
stretch, whose relaxation writes `cut[0] + 1 = 0`. The two widening loops
together do quadratic work — linearly many centres, each widening at most
linearly far — while the only storage is the linear cut array, which is what
the follow-up asks for.

**Complexity:** `O(n^2)` time, `O(n)` space.
