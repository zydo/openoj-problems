# Solutions — Clean Subarrays After One Pair Removal

## Two Smallest Bounds With a Removal-Gain Ledger

Count clean subarrays by where they start. A subarray beginning at position `a`
may run right until the first point where some pair would sit fully inside it,
so all that matters is `b1(a)` — the smallest right endpoint among pairs whose
left endpoint is at least `a`. The count starting at `a` is `b1(a) - a`, and
summing over `a` gives the total for the current pair set. Sweeping `a` from `n`
down to `1`, bucketing each pair at its smaller element, activates pairs in
exactly the order the sweep needs, and `b1` can be maintained alongside its
runner-up `b2`.

Deleting a pair pays off only where it is the *unique* holder of `b1`: there the
bound softens to `b2`, admitting `b2 - b1` further subarrays. So the sweep banks
`cnt[b1] += b2 - b1` at each position and the best deletion is the fullest
bucket. Keying by the value `b1` rather than by pair identity is safe because of
how ties resolve: when two pairs share a right endpoint, the second one fails
the `b < b1` test and lands in `b2`, making that bucket's contribution zero —
which is exactly right, since with a duplicate in reserve no single deletion
loosens the bound.

Walk the smaller of the two examples, `n = 5` with pairs `[1,5]` and `[2,4]`:
starting from the right, positions 5, 4, and 3 have no active pair, so `b1` sits
at the sentinel `n + 1` and they contribute 1, 2, and 3 subarrays. Position 2
activates `[2,4]`, capping runs at 4 for a contribution of 2, and position 1
also activates `[1,5]`, leaving `b1 = 4` with `b2 = 5` for a contribution of 3 —
eleven in total before any deletion. The gain ledger fills only at the last two
positions: 2 and then 1 more units into `cnt[4]`, so deleting `[2,4]` buys back
3 subarrays and the answer is 14, while deleting `[1,5]` would buy nothing
because `5` was never the tight bound.

The returned value is `sum of (b1 - a) + max(cnt)`. When no pair is ever
uniquely tight, every bucket stays empty and the deletion is a no-op — still the
correct answer, since one pair must go regardless.

Edge cases: pairs arriving in either order are normalized first; equal right
endpoints are neutralized by the `b1`/`b2` tie rule; several pairs pressing on
the same start contribute only through the tightest for the count and the
second-tightest for the gain.

**Complexity:** `O(n + p)` time and `O(n)` space, with `p` the number of pairs.
