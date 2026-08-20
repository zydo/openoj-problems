# Solutions — Longest Subarray With Sum k

## Prefix Sums with a First-Occurrence Hash Map

Every contiguous stretch is the gap between two running totals: the slice
`(j, i]` adds up to `k` precisely when `acc(i) - acc(j) = k`, which pins the
earlier total at `acc(i) - k`. The whole question therefore collapses into
one sweep that, at each position, asks whether that complementary total has
been passed already — and how far back.

A running accumulator `acc` replaces any stored prefix array, and a map
`first` holds the *earliest* index at which each total value has occurred,
seeded with `{0: -1}` so a slice starting at index 0 is discovered the
moment `acc` itself reaches `k`. Keeping only the first occurrence is the
maximizing choice: among all legal left cut points with the same total, the
earliest stretches the length `i - j` furthest, so later repeats of the same
value are never allowed to overwrite.

The lookup runs before the insert at each step, which bars the empty slice
from pairing a prefix with itself. `best` collects the widest `i - j` and
starts at 0, so a `k` that no stretch produces simply returns 0 — the fate
of `[3,-1,4]` with `k = 10`. The seed entry pays off in the first example:
`[2,-2,4,1,-3,5]` walks its accumulator to 7 only at the last index, pairs
with the seeded `-1`, and returns the full length 6.

The map can hold up to `n + 1` distinct totals — the mixed signs guarantee
variety — and each step costs one addition, one lookup, and at most one
insert.

**Complexity:** `O(n)` time, `O(n)` space.
