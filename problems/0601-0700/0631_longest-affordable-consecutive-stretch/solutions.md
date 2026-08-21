# Solutions — Longest Affordable Consecutive Stretch

## Sliding window with a monotonic deque

A block's cost is `max(startCosts) + k * sum(usageCosts)`, and both terms only
grow as the block widens — every cost is positive, so cost is monotone in the
window. Monotonicity is what makes a two-pointer sweep correct for maximizing
length under a budget: advance the right end one slot at a time, retreat the
left end while the cost exceeds the budget, and keep the largest length ever
seen. No window needs reconsidering, because a window that was too expensive
stays too expensive when it grows.

The running sum of `usageCosts` is a plain accumulator — add on the right,
subtract on the left. The window maximum of `startCosts` needs more care, and
a monotonic deque of indices supplies it: keep indices whose start costs are
strictly decreasing, popping from the back any index whose cost is `<=` the
incoming one (it can never dominate again), so the front always holds the
argmax. When the left pointer moves past the front index, the front leaves the
deque too, which is what stops stale maxima from inflating the cost.

For `startCosts = [4,9,2,5,8]` and `usageCosts = [3,1,2,2,4]` with
`budget = 40`: slots 0-2 cost `9 + 3 * 6 = 27` and fit; admitting slot 3
raises the bill to `9 + 4 * 8 = 41`, forcing a retreat, and no later window of
four fits either — the longest affordable stretch is 3.

Every index enters and leaves the deque at most once, so the nested loops do
linear work in total. The retreat may empty the window completely — an input
where even the cheapest slot alone busts the budget then reports 0, as it
should.

**Complexity:** `O(n)` time, `O(n)` space.
