# Solutions — Maximum Sortable Blocks

Both solutions rest on the same pin: a cut after position `k` is legal
exactly when `arr[0..k]` holds the smallest `k+1` entries of the array, so no
value needs to cross. The multiset balance verifies that against a sorted
copy, carrying one counter per value because entries repeat. The cut-counting
sweep asks the same question through order statistics — the prefix holds the
smallest entries precisely when its running maximum does not exceed the
suffix's running minimum — and never sorts anything.

## Running multiset balance against the sorted array

A cut after position `k` survives the sorting step only if the entries in
`arr[0..k]` are, as a multiset, the same entries that occupy `sorted(arr)[0..k]`.
Anything else means some value has to cross the cut, and sorting inside a block
can never move it. Because entries repeat, comparing running maxima against
running minima strictly is not enough here — the test has to be multiset
equality.

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

## Running prefix maxima against suffix minima

The legality condition has a second reading that needs no sorted copy. The
prefix `arr[0..k]` holds the smallest entries of the array exactly when
nothing after the cut is smaller than anything before it:
`max(arr[0..k]) ≤ min(arr[k+1..])`. One direction is immediate — the smallest
entries are ≤ all the rest. For the other, only a strictly smaller suffix
entry could push a prefix value out of the sorted prefix, and no suffix entry
is strictly smaller than any prefix entry; equal values across the boundary
are interchangeable, so the prefix multiset is the sorted prefix's, repeats
included.

The comparison has to be non-strict, and that is where repeats bite. On
`[2,1,2]` the cut between the `1` and the final `2` compares prefix max `2`
against suffix min `2` — equal, and legal, since the two equal values serve
the sorted order equally well on either side; a strict `<` would reject it
and undercount. On `[1,3,3,2,6]` the two legal cuts read `1 ≤ 2` after the
leading `1` and `3 ≤ 6` before the `6`, while the cuts inside `[3,3,2]` read
`3 ≤ 2` and fail — three blocks, as before.

One backward scan turns the array into suffix minima — `suffix_min[i]`, the
smallest entry from `i` to the end — and one forward scan carries the running
prefix maximum, counting every position whose suffix minimum is at least it.
Each legal cut opens one more block and the whole array always closes the
last, so the answer is the cut count plus one. The array of suffix minima is
the only extra storage.

**Complexity:** `O(n)` time, `O(n)` space.
