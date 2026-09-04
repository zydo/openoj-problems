# Solutions — Moments the Lit Set Is a Prefix

## Approach: Running maximum against the step count

After `k` steps the panel is prefix-lit exactly when the switched-on
positions are precisely `{1, 2, ..., k}` — since every step switches on a
distinct position, that holds if and only if the largest position switched on
so far equals `k`. So one pass tracks `rightmost`, the running maximum of
`flips[0..i]`; the count increments each time `rightmost == i + 1`. No switch
array is needed, and the permutation property guarantees no position is
touched twice.

**Complexity:** `O(n)` time, `O(1)` space.
