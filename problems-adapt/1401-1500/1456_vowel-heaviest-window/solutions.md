# Solutions — Vowel-Heaviest Window

## Fixed-size sliding window

Only stretches of exactly `k` letters matter, and neighbours among them differ
in at most two positions: the letter arriving at the right edge and the letter
dropping off the left. So the vowel count of one stretch can be turned into
the count of the next in constant time — count the first stretch in full, then
adjust by at most ±1 per edge on every slide.

The code seeds both the running count and the best from the first `k`
characters, then advances the right edge to the end of the string. Each step
bumps the count up when the arriving letter is a vowel, down when the
departing letter `k` positions back is one, and records the best value
whenever the running count surpasses it. Testing a letter is a membership
check against a five-element set, so a slide is constant work.

Because `k` never exceeds the string's length, the first stretch is always
whole and nothing degenerate can happen; when `k` equals the full length the
loop body never runs and the seeded count stands as the answer. For
`"queueing"` with `k = 4`, the stretch `ueue` pushes the running count to its
ceiling of 4, which no later slide beats.

**Complexity:** `O(n)` time, `O(1)` space.
