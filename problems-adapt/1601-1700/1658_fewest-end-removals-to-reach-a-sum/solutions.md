# Solutions — Fewest End Removals to Reach a Sum

## Sliding window on the kept middle

Peeling only from the two ends until the peelings total `x` is the same as
keeping one unbroken middle stretch whose sum is `total - x`; the moves spent
are exactly the elements outside it. Fewest moves therefore means longest
kept stretch summing to `target = total - x`, and the answer is
`len(nums) - best`.

Every element is positive, so widening the stretch only raises its sum — the
textbook shrink-when-overgrown window applies. Push the right edge forward
one element at a time; whenever the running sum passes `target`, advance the
left edge until it is back at or under. Each time the sum lands exactly on
`target`, the stretch's length becomes a candidate. Since sums rise strictly
with width, letting a shrunk window re-widen could never find a hit the
forward-only sweep missed.

![The example array 2, 3, 1, 4, 2 with the window chasing target 8 = 12 − 4: at right = 2 the window 2, 3, 1 sums to 6 and keeps growing, at right = 3 the sum 10 forces a shrink to 3, 1, 4 which hits 8, and the longest hit of length 3 leaves a 2 outside each end — the 2 moves that remove x = 4.](figures/solution-middle-window.svg)

The borders are settled first: `target < 0` means `x` outweighs the whole
array and returns -1; `target == 0` means nothing may be kept, returning
`len(nums)` at once. Should no window ever equal `target`, the answer is -1.

**Complexity:** `O(n)` time, `O(1)` space.
