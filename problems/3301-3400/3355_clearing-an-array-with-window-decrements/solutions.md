# Solutions — Clearing an Array with Window Decrements

## A Coverage Condition, Read Off a Difference Array

The process looks sequential — windows arrive in order, subsets chosen
on the fly — but the choices at different positions never constrain each
other, and a window's only power over a position is to remove a single
unit from it. So the order of the windows is irrelevant, and the whole
question collapses to a static condition: position `i` can reach `0`
exactly when at least `nums[i]` windows cover it. The condition is also
sufficient, because each window's subset is a free choice — when supply
exceeds demand, pick each position in only as many covering windows as
it needs and skip the rest, and no entry is ever driven below zero.

Counting the coverage per position without walking each window's stretch
is what a difference array is for: put `+1` at `l` and `-1` at `r + 1`
in a buffer of length `n + 1` — the spare slot at the end swallows the
`r + 1 == n` write without a bounds check. A single accumulating sweep
over that buffer yields the running coverage, and the answer is `true`
precisely if the sweep never finds `coverage[i] < nums[i]`, returning
`false` at the first shortfall.

For `nums = [1,2,2]` with windows `[0,1]` and `[2,2]`, the sweep
produces coverage `[1,1,1]`: position 1 is short one window, and the
verdict is `false` no matter how the subsets are chosen. In
`nums = [1,1]` with three copies of `[0,1]`, coverage `[3,3]` clears
the bar of `[1,1]`, and the surplus is harmless — one window per
position suffices and the rest can be spent on empty subsets.

Positions holding `0` impose no demand, so they pass regardless of
coverage; and because both the buffer fill and the check are linear
passes over disjoint inputs, nothing in the algorithm depends on the
windows being sorted, nested, or disjoint.

**Complexity:** `O(n + q)` time, `O(n)` space.
