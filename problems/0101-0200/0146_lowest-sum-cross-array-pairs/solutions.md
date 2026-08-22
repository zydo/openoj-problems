# Solutions — Lowest-Sum Cross-Array Pairs

Both solutions must emit the `k` smallest pairs `(nums1[i], nums2[j])` in
order, ties going to the earlier `nums1` index — the lexicographically
first `k` triples `(sum, i, j)`. Neither materializes the Cartesian
product. One works *around* it: it never pops anything, but finds the
value of the `k`-th smallest sum directly by binary search on the number
line, counts pairs against each candidate in linear time, and then
harvests the chosen sums by position. The other works *inside* the
product: it merges the sorted rows of the pair matrix through a min-heap,
discovering the answers one pop at a time.

## Binary Search on the Sum

Ask a different question first: how many pairs sum to at most `s`? Both
arrays are sorted, so one descending pointer into `nums2` answers for all
of `nums1` at once — for each `nums1[i]`, the qualifying `nums2` entries
are a prefix, and as `i` rises the prefix only shortens, so the pointer
walks down once across the whole sweep. That count is monotone in `s`, so
the `k`-th smallest sum is pinned by binary search over the value range
between `nums1[0] + nums2[0]` and the two last elements: the least `s`
whose count reaches `k` is exactly the threshold the `k`-th output carries.
Thirty-odd linear sweeps replace the heap's churn.

Harvesting then reads off positions. Every pair with sum strictly below
the threshold is certainly among the answers, and by the threshold's
minimality there are fewer than `k` of them — collect them with the same
descending pointer, sort by `(sum, i, j)`, and what remains of the quota
is filled from the pairs summing to exactly the threshold, taken in `i`
then `j` order, which is precisely the tie-break the output demands. On
Example 1 the search lands on `5`: the four pairs below it
(`-5, -1, 1, 4`) fill almost everything, and the first equality pair
`(2, 3)` completes the five. Example 2 lands on `1` with only the two
`[0, -2]` below, topping up with both `[0, 1]`s.

The never-materialize rule survives: the harvested lists are bounded by
`k`, the counting sweeps never build a pair, and the search itself runs
over values, not elements. The price is the logarithmic pile of linear
counting sweeps — cheap against sorted arrays — and the wider integer
types, since candidate sums span twice the value range.

**Complexity:** `O((m + n) log(maxSum) + k log k)` time, `O(k)` auxiliary
space.

## Min-Heap Frontier

Imagine one sorted row for each position `i` in `nums1`. Row `i` contains
the pairs `(nums1[i], nums2[j])` as `j` increases. Because `nums2` is
sorted, the sums within every row are non-decreasing. We only need to merge
the beginnings of these rows rather than construct every pair.

Seed a min-heap with `(i, 0)` for the first `min(nums1.length, k)` rows. A
later row cannot reach the first `k` outputs: each of those earlier rows
already begins with a sum no greater than its first sum. Store `(sum, i,
j)` in the heap so the index `i` supplies the required tie-break.

The heap minimum is the next output pair. After removing `(i, j)`, insert
`(i, j + 1)` when that position exists. This restores one frontier item for
row `i`; every other row's smallest unseen item remains in the heap.
Repeating the operation `k` times therefore performs a partial merge of all
relevant rows. Duplicate values stay as separate indexed choices and are
emitted as often as they occur.

**Complexity:** `O(k log k)` time and `O(k)` auxiliary space.
