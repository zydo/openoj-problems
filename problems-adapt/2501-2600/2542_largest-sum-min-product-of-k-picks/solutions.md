# Solutions — Largest Sum-Min Product of K Picks

## Sweep the Minimum, Heap the Companions

The product's second factor is a minimum over the chosen `nums2` values, and
a minimum cannot be pushed upward directly — so guess it instead. Sort the
positions by `nums2` in descending order and sweep: standing on a position
carrying value `b`, everything already passed has `nums2 >= b`, which makes
`b` a legitimate minimum for any set drawn from the passed positions plus
this one. Under that assumption the remaining freedom collapses — the
companions should be the positions with the `k - 1` largest `nums1` values
among those passed.

"The `k` largest seen so far" is a sliding trophy list: a min-heap of size
`k` with a running sum. Push each arriving `nums1` value; when the heap
overflows, eject its smallest and subtract it. Each step costs `O(log k)` and
the stored sum is always the top-`k` total of everything passed. The first
moment the heap fills, `total * b` is the best score attainable with `b` as
the minimum, and the answer is the champion of these candidates across the
sweep.

Equal `nums2` values need no case work: among several positions sharing the
minimum, whichever the sweep reaches last finds all the others already inside
the heap, so the strongest companion set is evaluated at least once. With
`k <= n` guaranteed, the heap does fill, and because all values are
non-negative the zero-initialized champion is safely overwritten on the k-th
step. Sorting at `O(n log n)` outweighs the heap's `O(n log k)`.

In Example 1 the sweep visits values 5, 4, 3, 1; at the position carrying 3
the heap holds the `nums1` values 2, 3 and 4 for a sum of 9, and
`9 * 3 = 27` becomes champion — the last step (minimum 1) can only manage
`11 * 1`. Example 3 shows the trade the sweep resolves: the strong 6 keeps
the 2 beside it for `(6+2) * 3 = 24`, while the 9 in `nums2` carries a 1
worth so little that even `(1+2) * 8 = 24` merely ties.

**Complexity:** `O(n log n)` time, `O(n)` space.
