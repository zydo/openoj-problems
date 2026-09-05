# Step Orders That Land on Target

## Description

A walker stands at `startPos` on an endless number line that stretches
into the negatives as well. Every second, the walker takes exactly one
step — to the adjacent position on the left or the adjacent position on
the right.

Count the distinct sequences of exactly `k` steps that finish at
`endPos`. Two sequences count as different as soon as their step
directions differ in any slot, even when they revisit the same
positions. The count can be huge, so report it modulo `10⁹ + 7`.

### Example 1

Input: startPos = 1, endPos = 4, k = 3
Output: 1
Explanation: The only three-step route from 1 to 4 is three right
steps: 1 -> 2 -> 3 -> 4.

### Example 2

Input: startPos = 5, endPos = 5, k = 4
Output: 6
Explanation: Ending where you began after four steps takes two rights
and two lefts, and those four directions can be laid out in
C(4,2) = 6 orders.

### Example 3

Input: startPos = 3, endPos = 10, k = 6
Output: 0
Explanation: The target sits 7 away — farther than six steps can
reach.

### Constraints

- `1 <= startPos, endPos, k <= 1000`

## Hints

### Hint 1

Say the walk uses `r` steps to the right and `l` to the left. Their
difference `r - l` is pinned by the distance, and their sum `r + l` is
pinned by `k` — so both counts are forced.

### Hint 2

It is not the sequence that is forced but the tally: how many rights
and how many lefts.

### Hint 3

Once the tally is known, every arrangement of those steps is its own
distinct way — so count arrangements.
