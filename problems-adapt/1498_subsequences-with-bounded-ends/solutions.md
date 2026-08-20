# Solutions — Subsequences With Bounded Ends

## Sort and Two Pointers With Powers of Two

Membership defines a subsequence, order does not, so reordering the array
costs nothing. After sorting, a chosen set passes exactly when its smallest
and largest members sum to at most `target`: everything else chosen lies
between those two and can never breach the bound by itself. With the
smallest member pinned at index `i` and the farthest usable partner at
index `j`, each element strictly between them is a free take-or-drop
choice, so `2^(j - i)` subsequences have their minimum sitting precisely at
`i`.

Instead of hunting `j` with a search per `i`, two pointers walk inward from
both ends of the sorted array. When the current ends satisfy the bound,
every element up to the right end is a legal partner of the left one, and
the pointer's earlier retreats rule out anything beyond — so the right
pointer is exactly the farthest partner, `2^(right - left)` is banked, and
the left end steps in. When the bound fails, the right end is too heavy to
pair with anything at or after the left end and retreats. On
`[3, 3, 6, 4]` with `target = 9` the sorted walk `[3, 3, 4, 6]` banks
`2^3 + 2^2` for the two 3s, shrinks past the 6 (`4 + 6 > 9`), then banks
`2^0` for the lone 4 — thirteen in all.

Powers of two are precomputed modulo `10^9 + 7` up to `n - 1`, so every
contribution is a single lookup and the running total is reduced at each
step. Single-element sets need no special casing: when the pointers meet,
the sum being tested is the element added to itself, which is precisely
the standing-alone condition — the reason `[5]` fails at `target = 9`
while `[4]` passes at `target = 8`.

**Complexity:** `O(n log n)` time, `O(n)` space.
