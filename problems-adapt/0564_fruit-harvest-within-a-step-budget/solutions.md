# Solutions — Fruit Harvest Within a Step Budget

## Sliding Window over Sorted Positions with Prefix Sums

A walk that turns twice is never worth it: the middle leg gets traversed three
times, and undoing the first turn covers the same points at equal or lower
cost. So some optimal walk turns at most once, which leaves four shapes — left
only, right only, left then right, right then left — and every one of them
gathers the fruit of a single unbroken stretch of the position-sorted array.
That collapses the search from "all walks" to "all stretches".

The cheapest step cost of covering stretch `[l, r]` from `startPos` follows the
same four shapes: when the start lies left of the stretch it is `r − startPos`,
when it lies right it is `startPos − l`, and when it lies inside, one leg is
walked twice — `min(2·(startPos − l) + (r − startPos), 2·(r − startPos) +
(startPos − l))`. Example 2 is the inside case: the stretch `[4, 7]` from
start 5 costs `2·1 + 2 = 4`, exactly the budget.

The code builds a prefix-sum table over the sorted amounts, then sweeps the
array with two pointers. For each right endpoint it retires left endpoints
whose stretch cost exceeds `k`, and whenever the surviving stretch is
affordable it offers `prefix[right + 1] − prefix[left]` as a candidate. Both
pointers only advance, so the sweep is linear. The affordability re-check
before updating the best answer handles the lone-fruit edge: a stretch of one
unreachable fruit shrinks to itself and is simply never counted, so a start
next to nothing reachable — example 3 — leaves the answer at 0.

**Complexity:** `O(n)` time, `O(n)` space, where n is the number of fruit
positions.
