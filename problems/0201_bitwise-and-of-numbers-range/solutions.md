# Solutions — Bitwise AND of Numbers Range

## Common Binary Prefix

The AND of every number in `[left, right]` keeps a bit set only if _all_ of them have that bit set. Any bit below the common binary prefix of `left` and `right` is guaranteed to differ somewhere in the range — as the counter walks from `left` to `right`, every suffix bit flips through 0 — so those bits all vanish. What survives is exactly the shared prefix of the two endpoints, padded with zeros.

The implementation extracts that prefix by repeatedly shifting both endpoints right until they become equal, counting the shifts. At that point the numbers agree on every remaining bit, and shifting the value back left by the counted amount restores the common prefix in its original position. The loop runs at most 31 times for 32-bit inputs, so the work is proportional to the bit length rather than to the size of the range — even `[1, 2147483647]` is answered after ~31 iterations with 0, because the endpoints share no prefix bit.

The degenerate case `left == right` never enters the loop and simply returns the number itself, which is correct since a one-element range ANDs to itself.

**Complexity:** `O(log right)` time, `O(1)` space.
