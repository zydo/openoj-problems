# Solutions — Cheapest Gathering of K Ones

## Median window gathering with ternary search

The collector never has to relocate. A real one reaches the standing cell
through slides at one move per cell of distance, and a manufactured one
always costs exactly two — one flip to place it beside the standing cell,
one slide to take it in. So if `t` real ones are walked in, the remaining
`k - t` are manufactured at two moves each, and the whole plan is priced
by choosing `t` and the standing cell.

For a fixed `t`, the walked ones should be `t` consecutive positions in
the sorted list of one-positions: passing over an available one to fetch
a farther one can only cost more. For a fixed group of one-positions, the
sum of slide distances shrinks to its minimum when the collector stands
at the group's median. Both facts together make the walking price a
window quantity: with `prefix` summing the one-positions, the cost of
dragging the left half up to the median and the right half down to it is
an arithmetic expression in prefix differences, evaluated per window in
constant time.

So `total(t) = window_cost(t) + 2 * (k - t)` over the feasible band
`t in [max(0, k - maxFlips), min(k, m)]`, where `m` is the number of real
ones and the band's edges follow from at most `maxFlips` manufactured
ones. `total(t)` is convex on this band — the gathering cost is convex in
the window width and the second term is linear — so ternary search
squeezes the band to a handful of candidates, each then evaluated
directly. Corners resolve themselves: `t = 0` prices the all-manufactured
plan at `2k`, windows wider than `m` are infeasible, and the promise
`maxFlips + sum(nums) >= k` keeps the band nonempty.

On Example 1 the ones sit at 0, 2, 3, 6; the best window of three is
{0, 2, 3}, whose median 2 costs 0 + 1 + 2 = 3, and no flip budget exists
to beat it. On Example 2 the far one at 6 would cost 6 slides, while
`t = 1` plus one manufactured one costs 0 + 2 = 2 — the flip wins by four
moves.

**Complexity:** `O(n + m log m)` time, `O(m)` space.
