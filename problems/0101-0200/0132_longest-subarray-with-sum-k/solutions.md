# Solutions — Longest Subarray With Sum k

Every contiguous stretch is the gap between two running totals: the slice
`(j, i]` adds up to `k` precisely when `acc(i) - acc(j) = k`. Both solutions
live inside that one identity, and both spend their effort pairing positions
whose totals differ by exactly `k` — but they organize the pairing
differently. One sweeps left to right once, carrying a hash map of totals
already passed and asking, at every position, how far back the complementary
total first appeared. The other splits the array in half recursively and
pairs each prefix of the right half against the suffixes of the left —
divide and conquer, in the manner of a merge sort, with a hash map per level
instead of a merge.

## Prefix Sums with a First-Occurrence Hash Map

The whole question collapses into one sweep that, at each position, asks
whether the complementary total has been passed already — and how far back.

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

## Divide and Conquer

Split the array at a midline. A subarray with sum `k` either lies wholly in
the left half, wholly in the right half, or crosses the midline — the first
two are the same problem on half the span, so only the crossing case needs
new machinery, exactly the division a merge sort performs.

A crossing subarray is a suffix of the left half glued to a prefix of the
right. Scan the left half from the midline outward, accumulating suffix
totals into a map from total to the *longest* suffix carrying it — scanning
away from the mid and overwriting keeps the longest, the mirrored twin of
the first-occurrence rule above. Then scan the right half outward from the
midline, accumulating prefix totals; a prefix summing to `s` needs a left
suffix summing to exactly `k - s`, and the map answers with the longest
one, so the pair glued at the midline is the best crossing subarray for
that prefix. Example 3 spells it out: the top midline falls after
`4,-1,2`, the suffix sweep records `2 → 1`, `1 → 2`, `5 → 3`, and the
right prefix `1,-2` summing to `-1` demands `k - (-1) = 5` — supplied by
the whole left half, length `3 + 2 = 5`, the subarray `[4,-1,2,1,-2]`.

Subarrays hugging the midline on one side only are covered by the recursive
calls — a pure prefix of the right half is just a subarray of the right
half — so the crossing scan may assume both parts non-empty. Each level
does linear work in maps that vanish when the level returns, and the
recursion is `log n` deep. Mixed signs make every suffix total a live
candidate, which is why the map is keyed by value and not by position.

**Complexity:** `O(n log n)` time, `O(n)` space.
