# Solutions — Fewest Swaps to Gather the Ones

## Fixed-Length Window With a Zero Tally

The run of ones must contain every one in the array, so its length is
pinned to `ones`, the total count of ones; the only decision left is where
the run goes. For a chosen placement, each `0` inside the window needs one
swap to leave and each swap expels exactly one, so the placement's cost is
its interior zero count. Minimizing swaps is therefore the same as finding
the length-`ones` window with the fewest zeros.

Count the zeros of the first window directly, then walk the window to the
right end one position per step: the element entering at `bits[i]` adds its
zero-ness and the element leaving at `bits[i - ones]` drops its, so the
tally never needs a rescan. The minimum seen along the walk is the answer —
for `[1,0,0,1,0,1]` the best window is the final `[1,0,1]` with a single
zero, hence one swap; for `[0,0,1,1,1,0,0]` some window holds no zero at
all and the answer is zero.

Two easy situations fall out without special handling: with `ones <= 1` any
window already consists of ones alone, and the initial count returns 0; an
all-ones array likewise scores zero zeros immediately. Every element is
read a constant number of times, so 10⁵ entries pass in one sweep.

**Complexity:** `O(n)` time, `O(1)` space.
