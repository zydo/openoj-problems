# Solutions — Count Subarrays Fixable With K Increments

## Right-to-left window over a monotonic stack of plateaus

Since every step adds `1` to a single element, the cheapest repair of a
stretch is to lift each element exactly to the running maximum on its left:
that profile costs `Σ (running_max(i) - nums[i])`, and any other
non-decreasing target sits at least that high. Pin the left end and slide the
right end outward — this lift total only grows — so each left end owns a
farthest right end, everything up to it counts, and summing the reaches gives
the answer exactly.

The sweep runs right-to-left so a monotonic stack can carry the cost forward.
The deque holds indices of the current running-max plateaus, values strictly
decreasing from front to back. When a new `left` with value `nums[left]`
arrives, every plateau below it is swallowed: the whole span of elements
rises from its old value to `nums[left]`, adding
`(span length) · (nums[left] - old value)` to the running cost, and `left`
becomes the new front. Should the cost pass `k`, the right end gives ground
instead: the rightmost element contributes exactly
`nums[dq[head]] - nums[right]`, the current maximum minus its own value, which
is subtracted while `head` steps past any plateau leader that falls off.

A lazy head pointer keeps indices physically in the deque after they are
logically gone, so both the swallows and the head advances cost amortized
constant time — every index passes through each end at most once over the
whole sweep.

![Lift-to-running-max costs for [7,4,2,3,5,5]: with the left end at 1 the window costs 3, and when the leading 7 arrives the window shrinks to [7,4,2] to fit k = 8.](figures/solution-window-cost.svg)

Walking example 1 (`nums = [7,4,2,3,5,5]`, `k = 8`) through the sweep:

1. `left` runs 5 → 2: each value sets a new low, so the deque just stacks
   plateaus and the cost stays 0, contributing 1 + 2 + 3 + 4 = 10 subarrays.
2. `left = 1` (value 4): the plateaus holding 2 and 3 are swallowed — lifting
   index 2's `2` to 4 costs 2, index 3's `3` to 4 costs 1 — so the cost is 3
   and the window `[1..5]` adds 5 more (total 15).
3. `left = 0` (value 7): swallowing everything left adds 9 + 2 + 2 and drives
   the cost to 16.
4. Over budget, the right end retreats: index 5 pays 7 − 5 = 2, index 4 pays
   2, index 3 pays 7 − 3 = 4, index 2 pays 7 − 2 = 5 — leaving cost 8 with
   the window `[0..2]`, exactly the budget.
5. That window contributes 3, for a total of 18.

Edge behaviour: a generous `k` simply never shrinks the window and the answer
is the full triangular count; equal neighbours share a plateau (the swallow
test is strict `<`); and although costs can reach about `10⁵ · 10⁹`, they stay
comfortably inside 64-bit arithmetic.

**Complexity:** `O(n)` time, `O(n)` space.
