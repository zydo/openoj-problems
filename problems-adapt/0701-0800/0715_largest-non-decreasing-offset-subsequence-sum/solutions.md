# Solutions — Largest Non-Decreasing-Offset Subsequence Sum

## Fenwick prefix-max DP over offsets

The inequality `nums[j] - nums[i] >= j - i` hides a simpler object. Move the
indices to the value side and it reads `nums[j] - j >= nums[i] - i`: calling
`b[x] = nums[x] - x` the _offset_ of position `x`, an admissible subsequence
is precisely one whose offsets never decrease. In Example 1 the offsets are
`[2, 3, 1, 4, 4]`; the kept indices `0, 1, 3, 4` walk `2, 3, 4, 4`, while
index `2`'s offset of `1` would break the order after `3`.

That reframing turns the task into "maximum-sum subsequence that is
non-decreasing in `b`", a shape with a standard DP: `dp[x] = nums[x] +
max(0, dp[y])` over all earlier `y` with `b[y] <= b[x]`. The `max(0, ...)`
implements the lone-element rule — when every available predecessor has a
negative `dp`, position `x` starts fresh, which is exactly Example 3's
situation, where the answer is the single largest value.

Computing that max by scanning all eligible `y` is quadratic. Keyed by rank
instead: compress the offsets once, then sweep positions left to right
maintaining a Fenwick (binary indexed) tree that stores, per rank, the best
`dp` over offsets up to that rank. Each position queries the prefix maximum
at its own rank — ties are genuinely eligible, since equal offsets satisfy
the rearranged inequality — forms `dp[x]`, records the running answer, and
inserts `dp[x]` at its rank. The tree's update pushes a value upward while
it improves a node, and its query takes the best over the canonical set of
covering nodes; both cost `O(log n)`. Initializing every tree slot to `0`
gives the `max(0, ...)` cutoff for free: an update only overwrites a slot
when it improves it, so negative `dp` values never displace the initial
zero, and every query returns at least 0.

**Complexity:** `O(n log n)` time, `O(n)` space.
