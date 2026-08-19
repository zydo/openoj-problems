# Solutions — Longest Duplicated Slice

## Binary Search on Length with a Hash Set

Let feasible(L) mean "some length-L slice starts in two places". Truncating both
appearances of a feasible slice by one character leaves two appearances of a
shorter slice, so feasible(L) forces feasible(L − 1) and the feasible lengths run
0, 1, …, answer with nothing beyond. A downward-closed predicate is the setting
binary search was made for, and the whole string cannot start twice inside
itself, so the top of the range is n − 1.

The loop keeps lo on a length known to work and hi on the largest length not yet
ruled out. Rounding the midpoint upward — (lo + hi + 1) // 2 — is what stops lo
from being probed forever once it becomes the midpoint, and lo holds the answer
when the two meet.

A probe drops each of the n − L + 1 windows into a set and stops the instant a
window is already present. Nothing is skipped, because appearances that share
characters count; on "banana" the length-3 probe stores "ban", "ana", "nan" and
then meets "ana" a second time, so 3 is feasible, while the length-4 probe sees
"bana", "anan", "nana" and finishes with three distinct windows.

Comparing whole windows rather than fingerprints keeps the check exact — nothing
has to be re-verified after a collision, which is the usual tax on a rolling
hash. Building and hashing one window costs O(L), so a probe is O(n·L), and at
n ≤ 2000 that is quick enough at every probed length that the constant factor
beats the fancier method.

**Complexity:** `O(n² log n)` time and `O(n²)` space in the worst case.
