# Solutions — Total Subarray Spread

## Running extremes over a fixed left endpoint

Lengthening a subarray by one value updates its extremes in constant time:
the maximum of `nums[i..j]` is the larger of the maximum of `nums[i..j-1]`
and `nums[j]`, and the minimum follows the same pattern. So no subarray
ever needs re-scanning. Anchor the left endpoint `i`, set `mn = mx =
nums[i]`, and move `j` rightward, tightening `mn` when a smaller value
appears, raising `mx` when a larger one does, and adding `mx - mn` to the
running total for each subarray closed at `j`.

The two updates share one `if/elif` because a single newcomer cannot be
both a strict new low and a strict new high; when it ties a bound or lands
between them, neither extreme moves. Subarrays of length one have spread
`0`, so the sweep starts `j` at `i + 1` and they cost nothing — the total
is exactly the sum of `max - min` across all longer subarrays.

Trace `nums = [1,-2,4]`: anchored at index 0, the sweep sees `-2` (new low,
`mn = -2`, spread `3`), then `4` (new high, `mx = 4`, spread `6`); anchored
at index 1, the pair `[-2,4]` spreads `6`. Total `3 + 6 + 6 = 15`.

With `n <= 1000`, the near-half-million iterations finish well inside the
limits, which is why the shipped solution stops at the double loop instead
of the linear follow-up. Beyond it, only three scalars are held.

**Complexity:** `O(n²)` time, `O(1)` space.
