# Solutions — Smallest Subarray Over a Length-Scaled Threshold

## Monotonic Stack over Minimal Spans

Which windows of length `k` are eligible? Precisely those whose smallest
element `m` satisfies `m * k > threshold` — every other element clears a bar
the minimum has already cleared. Flipped around, an element of value `m` can
anchor an eligible window only once the window reaches length
`threshold // m + 1`; the `+ 1` keeps the inequality strict in integer
arithmetic, which sidesteps floating-point division entirely at values near
`10⁹`. The problem therefore reduces to: does some element command a stretch
of the array, where it is the minimum, at least that long?

Each index `i` owns one maximal such stretch — from just past the nearest
strictly smaller element on its left to just before the nearest
smaller-or-equal element on its right. Two monotonic stack sweeps build both
boundary arrays in linear time. The strictness is deliberately asymmetric
(`<` toward the left, `<=` toward the right): a plateau of equal values hands
its shared stretch to exactly one member, so no stretch is missed or
double-counted.

The final scan keeps the smallest `threshold // nums[i] + 1` that fits within
index `i`'s stretch. On `nums = [3,9,4,9,3]` with `threshold = 11`: each `9`
would need length 2 but rules only its own position; the middle `4` needs
`11 // 4 + 1 = 3` and rules exactly the three-element stretch `[9,4,9]`; the
`3`s need length 4 and do rule four and five elements — but 3 is already the
best on offer, so it wins. When no index qualifies the method reports `-1`,
which is the situation where every value is too small for the room it
commands.

**Complexity:** `O(n)` time, `O(n)` space.
