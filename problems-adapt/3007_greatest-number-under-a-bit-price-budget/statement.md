# Greatest Number Under a Bit-Price Budget

## Description

You are given integers `k` and `x`.

Number the bit positions of a number's binary writing `1, 2, 3, ...` starting
from the least significant bit. Only the positions `x, 2x, 3x, ...` are
**watched**: the price of a number is how many of its watched bits are set.
For instance, `13` is `1101` in binary, so with `x = 1` its price is `3`, while
with `x = 2` only position `4` is watched and set, giving a price of `1`.

The running cost of `n` is the sum of the prices of every number from `1` to
`n`. A number is within budget when its running cost is at most `k`.

Return the greatest number within budget.

### Example 1

```text
Input: k = 6, x = 1
Output: 4
Explanation: Every bit is watched. Prices for 1..7 are 1, 1, 2, 1, 2, 2, 3,
so the running costs are 1, 2, 4, 5, 7, 9, 12. The running cost reaches 5 at
n = 4 and jumps past the budget at n = 5, so 4 is the greatest number within
budget 6.
```

### Example 2

```text
Input: k = 4, x = 2
Output: 7
Explanation: Positions 2, 4, 6, ... are watched. Prices for 1..10 are
0, 1, 1, 0, 0, 1, 1, 1, 1, 2, giving running costs 0, 1, 2, 2, 2, 3, 4, 5, 6,
8. The budget of 4 holds exactly through n = 7.
```

### Example 3

```text
Input: k = 15, x = 3
Output: 30
Explanation: Positions 3, 6, 9, ... are watched, so only bits worth 4, 32,
128, ... are charged for. The running cost is flat across stretches where no
watched bit turns on; it climbs to exactly 15 at n = 30 and to 16 at n = 31,
making 30 the greatest number within budget.
```

### Constraints

- `1 <= k <= 10^15`
- `1 <= x <= 8`

## Hints

### Hint 1

The running cost never decreases as `n` grows. What does that monotonicity let
you do with the search for the greatest in-budget number?

### Hint 2

To evaluate a candidate `n`, you need the total price of `1..n` without adding
`n` individual prices. Fix one watched position and ask: how many numbers in
`[1..n]` have that bit set?

### Hint 3

A fixed bit is set in runs — so many on, then so many off, repeating. Counting
full periods plus a partial one gives a closed form for each watched position.

### Hint 4

Positions whose bit value exceeds `n` can never be set within `[1..n]`; stop
the per-position loop there. With `k <= 10^15` the answer stays well below
2^60, so the search needs only a few dozen evaluations.
