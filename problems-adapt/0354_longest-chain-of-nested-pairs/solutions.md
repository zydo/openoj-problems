# Solutions — Longest Chain of Nested Pairs

## Width sort plus binary-searched LIS on heights

A nested chain is a strictly increasing sequence in two coordinates at once, and the whole solution collapses it to one: order the pairs by width ascending, and among equal widths by height descending. In that order a chain must advance through strictly growing widths — one pair per width at most — and the descending height among equal widths turns same-width pairs into a decreasing run that cannot possibly chain with itself, so what remains is exactly the longest strictly increasing subsequence of heights.

That subsequence falls out of patience sorting over a `tails` array. For each height `h` in order, binary search (`bisect_left`) locates the first tail `>= h`: absent one, `h` extends the longest chain so far and is appended; otherwise it overwrites that tail. The array stays sorted and its length is the answer — overwriting is safe because a smaller tail only strengthens the invariant that `tails[i]` is the least height any chain of length `i + 1` can end on, leaving later heights more room to extend. Using `bisect_left` rather than `bisect_right` is what enforces the strict increase the nesting rule demands, turning away equal heights.

Walk `pairs = [[4,9],[1,3],[5,8],[2,7]]` through it. Sorting by width gives heights `3, 7, 9, 8`: the `tails` array grows `3` → `3,7` → `3,7,9`, and the final `8` replaces `9` to leave `3,7,8` — length 3, the chain `[1,3] ⊂ [2,7] ⊂ [5,8]`.

Duplicates are absorbed by the descending tie-break together with the strict search: a second copy of a pair can only replace the tail the first copy sits on, never lengthening anything. A single pair yields 1, and the quadratic LIS — hopeless at `10^5` elements — never enters the picture.

**Complexity:** `O(n log n)` time, `O(n)` space.
