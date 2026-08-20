# Solutions — Largest Minimum City Power

## Bisect the Target, Repair with a Rightmost-Build Sweep

Raising the floor over all cities is a search-shaped goal: if some placement
of the `k` plants pushes every city to power `t` or more, the same placement
covers every smaller target. So bisect `t` over `[0, min(power) + k]` — the
ceiling holds because one plant adds at most 1 to any single city's power, so
`k` plants lift the weakest city by at most `k`. Use the upper-mid split
(`mid = (lo + hi + 1) // 2`) since the predicate is "target reachable" and the
search climbs.

The starting powers come from a difference array: a plant at `i` contributes
its count over the window `max(0, i-r)..min(n-1, i+r)`, so mark the count at
the window's left edge, cancel it just past the right edge, and prefix-sum.
That replaces `n` window additions with one linear pass.

Testing one target sweeps left to right and fixes shortfalls as it meets
them. A short city `i` gets its missing plants built at `min(n-1, i + r)` —
the farthest site that still reaches `i` — which serves the current city and
the longest possible tail of future ones, so every other legal site for
helping `i` is dominated. A second difference array carries each batch's
effect forward and retires it when the sweep passes the batch's window, and a
running `used` counter aborts the moment the plants built exceed `k`. The
target stands exactly when the sweep finishes within budget.

The sweep is `O(n)` and the search runs it `O(log(min(power) + k))` times.
That logarithm is not a luxury: `k` reaches 10⁹, so the placement itself can
never be simulated — only searched. In Example 1 the bisection settles on 4
with both plants built in city 1; in Example 3 all three plants land in city
3 itself, the rightmost site covering the weakest city, and the floor rises
from 3 to 6.

**Complexity:** `O(n log(min(power) + k))` time, `O(n)` space.
