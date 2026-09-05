# Solutions — Subarray Sums Within Bounds

Write every subarray total as a prefix difference and the count becomes:
index pairs `i < j` with `prefix[j] - prefix[i] ∈ [lower, upper]`, over a
prefix array of length `n + 1` that opens with a 0. Both solutions count
exactly those pairs; neither inspects subarrays at all. What differs is the
bookkeeping that makes each right-hand prefix find its legal left partners.
One sorts the prefixes by halving — merge sort's recursion counts cross
pairs while both halves sit sorted. The other never sorts: it sweeps the
prefixes once, left to right, dropping each into a Fenwick tree keyed by
value, so that every arrival can ask the tree how many of its predecessors
land in the wanted window.

## Merge-Sort Divide and Conquer

Merge sort's recursion divides the pair count cleanly: pairs wholly inside
the left half, pairs wholly inside the right half, and — counted while both
halves sit sorted at the same moment — the cross pairs.

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

## Fenwick Tree

No recursion, no sorting of halves — just one pass and a counting structure.
The prefix values span up to roughly ±2⁴⁶, far too wide for a direct array,
so they are first coordinate-compressed: the sorted, de-duplicated list of
all `n + 1` prefix values assigns each a rank, and a Fenwick (binary
indexed) tree over those ranks can add 1 at a rank and report how many
inserted values sit at or below any rank — both in a handful of steps,
walking the index's lowest set bit up or down.

The sweep then reads like the definition. Insert `prefix[0] = 0` (a
subarray starting at index 0 must be countable), and for each `j = 1..n`,
standing at `prefix[j] = p`: an earlier prefix `e` forms a qualifying pair
exactly when `e ∈ [p - upper, p - lower]`. Two rank lookups turn that
interval into a count — everything at most `p - lower`, minus everything
below `p - upper` — after which `p` itself is inserted and the next
position takes its turn. Querying before inserting is what enforces `i < j`
without any index comparisons: a prefix is simply not in the tree when its
own turn comes. On `[3,-4,2]` against `[-1, 4]`, the arrivals `3`, `-1`,
`1` query the windows `[-1, 4]`, `[-5, 0]`, `[-3, 2]` against the
predecessors `{0}`, `{0, 3}`, `{0, 3, -1}` and collect 1 + 1 + 2.

The compression pass costs a sort — the same `O(n log n)` the merges
spend — and each of the `n + 1` prefixes then costs two queries and one
insert, each a logarithmic number of tree hops. 32-bit-scale elements make
the prefix differences overflow 32-bit arithmetic in the fixed-width
languages, so the sums travel in wider types there, exactly as the hints
warn.

**Complexity:** `O(n log n)` time, `O(n)` space.
