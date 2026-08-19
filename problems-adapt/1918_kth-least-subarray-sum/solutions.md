# Solutions — Kth Least Subarray Sum

## Binary search on the answer with a sliding window

Materializing and sorting all `n(n+1)/2` run sums is quadratic, hopeless
at `n = 2·10^4`. The method instead bisects on the value of the answer.
With every `nums[i]` positive, the function `f(x)` — how many runs sum to
at most `x` — never decreases in `x`, and it can only step upward at
values that genuinely occur as run sums. So the least `x` with
`f(x) >= k` is itself the k-th least sum, produced by a real run.

`f` comes from the textbook sliding window: march the right end forward
while accumulating `window_sum`, shrink from the left whenever the sum
passes the `limit`, then credit `right - left + 1` — the tally of runs
ending at `right` that fit. Each element joins and leaves the window at
most once, so one evaluation is linear. Positivity is what carries the
argument: shrinking strictly lowers the sum, and the runs credited at
each step are exactly those contained in the window.

The bisection spans `[min(nums), sum(nums)]` — no run sums less than the
smallest element or greater than the total. The invariant pins the answer
inside `[lo, hi]` until the interval collapses. The edges are automatic:
`k = 1` settles on `min(nums)`, `k = n(n+1)/2` on `sum(nums)`, and ties
are harmless because the predicate counts them with multiplicity —
Example 1 lands on the second of the two 4s that way.

**Complexity:** `O(n log S)` time (where `S = sum(nums)`), `O(1)` space.
