# Solutions — Fewest Block Adjustments to Match a Target

## Positive rises of the difference array

Let `d[i] = nums[i] - target[i]` be the miss at each position. An operation
lowers or raises a stretch of `d` by one, and the task is to erase `d`
starting from the flat zero array. Any single operation can steepen the
profile by at most one step — it moves two edges of one stretch — so the total
climbing that must be supplied is the sum of upward steps along the sequence
`0, d[0], d[1], …, d[n-1], 0`, where the zeros pad both ends. That sum is a
lower bound, and it is also attained: open an interval at each rise and close
it at a matching later fall, so no step is ever paid twice.

The loop computes exactly this. `prev` walks through the padded sequence, and
every increase of `cur` over `prev` is added to the answer; decreases are
free, riding along as the closing edges of intervals opened earlier. When the
scan stops on a negative value, one final climb back to the trailing zero is
charged, while stopping on a positive value costs nothing extra — its drop to
zero is itself a fall.

Raises and lowers of `nums` need no separate handling, because lowering a
block is precisely an interval whose effect shows up as a rise out of a
negative dip. The whole answer equals half the total variation of the padded
miss sequence, which is why a uniform gap like `[2,2,2] → [5,5,5]` costs only
3 while the alternating `[1,2,1,2] → [2,1,2,1]` pays one operation per
oscillation, 4 in all.

**Complexity:** `O(n)` time, `O(1)` space.
