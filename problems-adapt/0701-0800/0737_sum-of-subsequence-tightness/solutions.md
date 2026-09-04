# Solutions — Sum of Subsequence Tightness

## Threshold-count DP over distinct differences

Sorting `nums` first costs nothing — a subsequence is an index set, and
the tightness of a set depends only on its values. Once sorted, the
closest pair inside a chosen set is always a pair of _consecutive_ chosen
elements, so the tightness is the smallest gap between neighbors in the
chosen run. For a threshold `d`, let `f(d)` count the length-`k` sets
whose consecutive gaps are all at least `d`; those are exactly the sets
of tightness at least `d`. Enumerating the distinct pairwise differences
from largest to smallest, `f(d) - f(next larger d)` is the number of sets
whose tightness is exactly `d`, and summing `d * that count` modulo
`10^9 + 7` totals everything — no tightness value can exist outside the
set of pairwise differences.

`f(d)` itself is a length-bounded counting DP over the sorted array. For
each position `j`, binary search yields `splits[j]`, the count of earlier
positions `i` with `nums[i] <= nums[j] - d` — precisely the predecessors
allowed to sit directly before `j` in a gap-respecting set. Seeded with
`prev[j] = 1` (length-1 sets ending at `j`), each further chosen element
replaces `prev[j]` by the prefix sum of the previous layer restricted to
`[0, splits[j])`; one exclusive-prefix sweep prices a whole round in
`O(n)`, `k - 1` rounds finish, and a round summing to zero exits early.

Worked on `nums = [1,2,4,8]`, `k = 3`: the distinct differences are
{1, 2, 3, 4, 6, 7}. At `d = 3`, the sets with all gaps at least 3 are
[1,4,8] alone, so `f(3) = 1` and, since `f(4) = 0`, exactly one set has
tightness 3. At `d = 2`, [2,4,8] joins (`f(2) = 2`), pinning one set at
tightness 2. At `d = 1`, all four triples qualify (`f(1) = 4`), leaving
two sets at tightness 1. The total is `3*1 + 2*1 + 1*2 = 7`.

There are at most `n(n-1)/2` distinct differences (1225 at `n = 50`),
each paying one `O(nk)` DP plus `O(n log n)` of binary searches — tiny at
these constraints. Writing `D` for the number of distinct differences:

**Complexity:** `O(D * n * k)` time, `O(n^2)` space.
