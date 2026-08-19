# Solutions — Cheapest Common Level

## Weighted median

Settling every element on a shared value `t` bills
`sum(|nums[i] - t| * cost[i])`, a piecewise-linear convex function of `t`:
each element adds a V-shaped term with slope `-cost[i]` left of its own
value and `+cost[i]` right of it. The slope of the whole bill at `t` is the
price weight sitting below `t` minus the weight above, so the minimum sits
where cumulative weight crosses half the total — the weighted median. Any
target away from that crossing has a slope that nudging toward the median
reduces.

Concretely: sort the `(nums, cost)` pairs by value, total the weights, and
walk the sorted order accumulating price until the running prefix reaches
`ceil(total / 2)`; the value at that crossing is the weighted median. The
`>=` test with `(total + 1) // 2` selects the lower median on an even weight
split, where either side bills the same. Elements already sitting at the
median contribute nothing, which handles the all-equal input for free.

A final linear pass charges `|num - median| * cost` per pair. The shared
value can always be taken from the existing elements, because a convex
piecewise-linear function over the integers bottoms out at a breakpoint, so
searching only sorted `nums` values loses nothing.

Sorting dominates; the two scans are linear. Bills can reach
`10^5 * 10^6 * 10^6`-scale totals, far past 32 bits — Python's native
integers absorb them.

**Complexity:** `O(n log n)` time, `O(n)` space.
