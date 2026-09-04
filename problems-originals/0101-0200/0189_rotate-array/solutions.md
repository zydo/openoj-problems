# Solutions — Rotate Array

## Three reversals

A right rotation by `k` cuts the array into two blocks — the last `k` elements and the first `n - k` — and trades their order. Reversing the whole array performs exactly that trade, but flips each block's internal order as a side effect; reversing each block a second time restores that order without moving the blocks back. The normalization `k %= n` comes first, because a rotation by `n` steps is the identity and any larger `k` wraps around to `k % n`.

Each of the three passes is a swap-only two-pointer walk, so the rotation rewrites the given array with no second allocation — the `O(1)` extra space the follow-up asks for. Degenerate inputs fall out naturally: `k = 0` or any multiple of `n` reverses the full range twice and lands back on the identity, a one-element array is untouched, and values are merely permuted, so boundary values like `-2³¹` need no special handling.

Once the passes finish the method returns the same array it received — now rotated — which is what the judge compares.

**Complexity:** `O(n)` time, `O(1)` space.
