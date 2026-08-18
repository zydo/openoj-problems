# Solutions — Subarray Sums Within Bounds

## Merge-Sort Divide and Conquer over Prefix Sums

Write every subarray total as a prefix difference and the count becomes:
index pairs `i < j` with `prefix[j] - prefix[i] ∈ [lower, upper]`, over a
prefix array of length `n + 1` that opens with a 0. Merge sort's recursion
divides that count cleanly: pairs wholly inside the left half, pairs wholly
inside the right half, and — counted while both halves sit sorted at the
same moment — the cross pairs.

The cross pass leans on the left half's sortedness. For each left value
`prefix[i]`, two pointers walk the right half: `l` steps past entries whose
difference falls below `lower`, and `r` steps past entries whose difference
stays at most `upper`. Everything in `[l, r)` pairs legally with
`prefix[i]`, and because successive left values are non-decreasing, neither
pointer ever retreats — the whole sweep is linear per merge instead of a
nested scan.

Once counted, the ordinary stable merge sorts the two halves together,
re-establishing the sortedness the parent call assumes; the recursion
bottoms out at length-1 spans contributing nothing. Python's unbounded
integers make the near-2³²-scale prefix differences harmless here, which is
exactly the trap the wider types guard against elsewhere.

The pair structure is why brute force cannot compete: 10⁵ elements breed
about 5 · 10⁹ pairs, while the divide and conquer touches each prefix
`O(log n)` times — one counting pass and one merge per level. Small inputs
agree with intuition: `[3,-4,2]` against `[-1, 4]` counts the 3, the 2, the
-1 and the whole-array 1; a lone element qualifies the moment its value
lands inside the interval, as `[-7]` against `[-7, 0]` shows.

**Complexity:** `O(n log n)` time, `O(n)` space.
