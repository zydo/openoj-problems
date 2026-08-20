# Solutions — Best Pair Score Within k

## Monotonic Deque on y − x

The entries arrive with strictly increasing x, so for a pair `i < j` the
absolute value collapses to `x[j] - x[i]` and the score reads
`y[j] + x[j] + (y[i] - x[i])`. Once `j` is fixed, everything outside the
bracket is fixed too, so the partner to prefer among all entries with
`x[j] - x[i] <= k` is simply the one carrying the largest key `y - x` — a
sliding-window maximum in disguise, the window sliding rightward with `j`.

A deque of earlier indices keeps keys strictly decreasing, putting the best
candidate at the front. Stale entries leave first: while the front's x lies
more than `k` behind the current x, it is dropped — x never decreases, so
whatever is too distant now stays too distant for every later `j`. If a
candidate survives, its score against the current entry updates the running
maximum. Then the current entry joins: while the back's key is at most the
newcomer's, that back index is expelled, for it can never again outscore
the newer one, and the newcomer's larger x keeps it inside the window at
least as long.

Evicting on ties is what makes "at most" correct there — the newer equal
key dominates everywhere the older one could have helped. Every index is
appended once and removed at most once, so the sweep is linear. On
`[[0, 4], [2, 1], [3, 7], [6, 2]]` with `k = 2`: the entry `[3, 7]` evicts
`[0, 4]` from the front (3 − 0 exceeds 2) and scores 9 against `[2, 1]`;
one step later `[6, 2]` finds its window empty after `[3, 7]` is evicted
(6 − 3 exceeds 2), so nothing beats 9. The guarantee that a legal pair
exists ensures the minus-infinity sentinel never survives to the return.

**Complexity:** `O(n)` time, `O(n)` space.
