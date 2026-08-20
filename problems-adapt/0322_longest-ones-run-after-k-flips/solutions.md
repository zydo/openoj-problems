# Solutions — Longest Ones Run After K Flips

## Sliding window counting zeros

Changing up to `k` zeros is the same as hunting for the longest stretch that
holds no more than `k` zeros — nothing is ever genuinely rewritten. Two pointers
carry the stretch: `right` walks `nums` and bumps `zeros` whenever a `0` steps
in; the moment `zeros` passes `k`, a `while` loop retreats the `left` edge,
dropping `zeros` back by one each time a `0` walks out, until the budget holds
again.

Once the retreat finishes (skipped altogether when the newcomer kept things
legal), `right - left + 1` measures the widest legal stretch that terminates at
`right`, and `best` carries the champion over the whole sweep. Retreating the
minimum necessary instead of restarting is what lets a stretch ride across long
expanses: for `[0,1,1,0,0,1,1,1,0,1]` with `k = 2`, the window absorbs both
middle zeros and then keeps rolling right through the block of ones to reach
width 7. Both pointers only ever move forward, and each index enters and leaves
the window once, so the sweep is linear.

The extremes need no special branches. With `k = 0`, any `0` inside forces a
retreat past it, so the code simply measures the longest existing block of
ones — `[1,0,0,1,1]` answers `2`. With `k` at least the array's whole zero
count, the retreat never triggers and the window swallows everything.

**Complexity:** `O(n)` time, `O(1)` space.
