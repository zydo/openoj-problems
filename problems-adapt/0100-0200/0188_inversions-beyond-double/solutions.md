# Solutions — Inversions Beyond Double

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
