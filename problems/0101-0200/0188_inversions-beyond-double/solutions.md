# Solutions — Inversions Beyond Double

Both methods replace the quadratic pair scan with a per-entry question —
standing on one entry, how many later entries does it more than double?
Merge sort answers wholesale: halving the array, sorting the halves, and
letting one two-pointer sweep per merge level count every cross pair at
once. The Fenwick tree answers online instead: walking in from the right
end, it asks a rank structure over the compressed values how many entries
already gone by the current one more than doubles.

## Merge-Sort Counting

Every qualifying pair couples an earlier entry with a later one, so halving
the array separates the work cleanly: pairs living entirely inside one half
are the recursion's job, and the cross pairs — `left[i] > 2 * right[j]` — are
the only ones needing direct attention. That is the merge-sort skeleton:
recurse to sort and tally both halves, tally the cross pairs between the two
sorted runs, merge, and hand the sorted run up.

Both halves being sorted turns the cross tally into a two-pointer sweep with
no backtracking. Walking `left[i]` upward, the pointer `j` crawls along
`right` while `left[i] > 2 * right[j]`; wherever it halts, `j` is the tally
of right-half entries qualifying for this `left[i]`. The next `left[i]` is at
least as big, so everything the pointer already passed qualifies again and
`j` resumes rather than restarting — one full sweep per merge level is linear.
On the first example's top split — left `[3, 8]`, right sorted `[1, 2, 5]` —
the sweep credits the 3 against `1` and the 8 against `1` and `2`, then
stalls at `5`: three of the four pairs, the fourth living inside the right
half (`5` against `2`). Python's unbounded integers also dodge the trap that
`2 * right[j]`
sets in fixed-width languages, where entries at both int32 extremes make the
doubled value wrap.

The merge itself is the textbook stable one (`left[i] <= right[j]` draws from
the left), and since only values and their positions-in-aggregate matter,
shuffling equal entries during sorting costs nothing. Linear tally plus
linear merge per level, `log n` levels over `n` entries; the extra memory is
the half-slices and merged runs, which along any live recursion path sum to
about the array size.

**Complexity:** `O(n log n)` time, `O(n)` space.

## Fenwick over Compressed Ranks

Walking in from the right end inverts the question just as neatly as halving
the array does: by the time the walker arrives at an entry, every value it
has already processed is precisely the suffix to that entry's right, so the
tally grows by a rank query — "how many held values `v` satisfy
`2 * v < x`?" — and rank queries are what a Fenwick tree answers in
logarithmic time. Each step is query-then-insert: the prefix total below the
qualifying cut is added, and only then does `x` join the structure, which is
also what keeps an element from being counted against itself.

The full 32-bit value range rules out an offset table, so the ranks come
from sorting the distinct values — an `m`-slot universe with `m` at most
`n`. The beyond-double twist then moves the cut off `x`'s own rank: the
qualifying entries are those with `2 * v < x`, so the cut is binary-searched
over the doubled values (kept in a wide type, since doubling either int32
extreme wraps in 32 bits) and the prefix below it counts exactly the
right-hand entries `x` more than doubles; `x` itself is then inserted at its
own rank. On the first example the walk seats `2`, `5`, and `1` before `8`
arrives: the cut falls between values `3` and `5`, since `2 · 5 = 10` is not
below `8`, so the sweep credits `1` and `2` but not `5`; the final `3` finds
only `1` below its cut — four pairs, matching the merge.

No recursion and no merging: the array is never reordered, the order
statistics accumulate one insertion at a time, and each entry costs two
binary searches and two low-bit walks — `update` climbs with
`i += i & -i`, `query` descends with `i -= i & -i` — all logarithmic in
`m`. The extra memory is the sorted ranks, the doubled thresholds, and the
`m + 1` tree slots.

**Complexity:** `O(n log n)` time, `O(n)` space.
