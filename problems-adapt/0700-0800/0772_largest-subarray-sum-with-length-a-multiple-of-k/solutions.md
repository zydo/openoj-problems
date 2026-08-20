# Solutions — Largest Subarray Sum with Length a Multiple of K

## Prefix Sums Partitioned by Residue Class

A stretch running from boundary `l` to boundary `r` has length `r - l`,
and `r - l` is a multiple of `k` exactly when `l` and `r` land in the
same residue class modulo `k`. Expressing the element sum of a stretch
as `prefix[r] - prefix[l]`, the whole problem splits into `k`
independent pieces — one per residue class — and each piece asks the
same old question: over the prefixes in that class, maximize a later
value minus the smallest earlier value.

One sweep answers all classes at once. Walk the prefix indices `0`
through `n`, keeping `min_pref[r]` for the least prefix sum already
seen at an index congruent to `r`. At each index, form the candidate
`prefix[i] - min_pref[i % k]` *before* refreshing the bucket —
comparing first guarantees the paired prefix is strictly earlier, so no
empty stretch is ever scored — and keep the best candidate seen. Each
class's first index finds its bucket empty and simply seeds it, which
is also why an all-negative array correctly yields a negative answer:
nothing ever forces a `0` into the arithmetic.

Subtracting the minimum is safe whatever the signs are, because the
divisibility requirement constrains only the two boundaries: every
earlier prefix in the same class names a legal stretch, and the minimum
is the choice that maximizes the difference. For `nums =
[3,-1,4,-2,5]` with `k = 2`, the boundary at the final `5` sits in the
same class as the one just before the `-1`, and their prefix gap of `6`
is the winner; the whole-array sum `9` is unreachable because its two
boundaries disagree modulo `2`. When `k` equals the array's length, as
with `[4,-7,6]` and `k = 3`, the class structure leaves exactly one
legal pairing — the full array.

**Complexity:** `O(n)` time, `O(n)` space.
