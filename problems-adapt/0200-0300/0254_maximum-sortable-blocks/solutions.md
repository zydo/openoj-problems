# Solutions — Maximum Sortable Blocks

## Running multiset balance against the sorted array

A cut after position `k` survives the sorting step only if the entries in
`arr[0..k]` are, as a multiset, the same entries that occupy `sorted(arr)[0..k]`.
Anything else means some value has to cross the cut, and sorting inside a block
can never move it. Because entries repeat, comparing running maxima against
running minima is not enough here — the test has to be multiset equality.

So take a sorted copy as the target and sweep the two arrays side by side with a
per-value counter. At each position, bump the counter for the original entry and
drop the counter for the target entry. Rather than scanning the whole map for
agreement, carry a single tally of unmatched entries: a counter that moves away
from zero contributes one more unmatched entry, and a counter that lands back on
zero cancels one. The tally is therefore zero precisely when the two prefixes
hold the same values with the same multiplicities.

Cut wherever the tally reads zero. Every such position is forced — skipping one
only glues two legal blocks together — so counting them gives the finest
slicing. On `[1,3,3,2,6]` the tally clears after the `1`, again after the second
`3` has met its partner and the `2` has been consumed, and finally at the end,
for three blocks. On a strictly decreasing array it never clears early, so the
answer is one.

**Complexity:** `O(n log n)` time — the sort dominates, the sweep is linear —
and `O(n)` space for the copy and the counters.
