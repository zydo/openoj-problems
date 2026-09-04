# Solutions — Longest Run With Bounded Spread

## Sliding window with two monotonic deques

The pairwise condition collapses to one comparison: a run is legal exactly when
its largest value minus its smallest value stays within `limit`. So the task is
to slide a window and always know its two extrema.

A two-pointer window is sound because legality is monotone under taking
sub-runs: any run containing an illegal run is itself illegal, so once the left
edge has advanced it never has reason to return. The extrema ride in two deques
of indices — the max-deque holding values in strictly decreasing order, the
min-deque strictly increasing. When a value arrives, every weaker candidate at
the back (smaller for the max-deque, larger for the min-deque) is discarded:
the newcomer outclasses it and outlives it. The fronts of the two deques are
then the window's maximum and minimum.

Each step admits one new index on the right. While `front(max) - front(min)`
exceeds `limit`, the left edge moves up, popping a deque front precisely when
the departing index is that front. After the shrink the window is legal again
and its length challenges the best. Although the loops nest, each index enters
and leaves each deque at most once, so the pass is linear.

Popping on non-strict comparisons keeps one copy of a repeated extreme, and a
one-element window always has spread zero, so the loop can never jam.

For `nums = [20,31,32,30,34,5,6]`, `limit = 4`: the 20 is evicted the moment
31 arrives (spread 11), and later the 34 pushes out the 30 — leaving
`[31,32,30,34]` with spread exactly 4, the winning length.

**Complexity:** `O(n)` time, `O(n)` space.
