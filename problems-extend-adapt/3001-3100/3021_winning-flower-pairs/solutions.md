# Solutions — Winning Flower Pairs

## Parity counting

The choice of row never matters: every turn removes exactly one flower, so
a game that starts with `x + y` flowers on the field lasts exactly `x + y`
turns no matter how the picks are split between the rows. The field is
empty for the first time at the end of turn number `x + y`, and the rule
makes that mover the winner — they capture their opponent on the spot.
Alice takes the odd-numbered turns and Bob the even ones, so Alice empties
the field exactly when `x + y` is odd; an even total hands the final move,
and the win, to Bob. The examples agree: `(1,2), (1,4), (2,1), (2,3),
(2,5)` are precisely the pairs of Example 1 whose sums `3, 5, 3, 5, 7` are
odd, and Example 2's 24 is exactly `4 * 3 + 3 * 4` — the four odd values
in `[1, 7]` matched against the three even ones, taken both ways around.

Counting the winning pairs is then just census work across the two ranges:
the interval `[1, k]` holds `ceil(k / 2)` odd numbers and `floor(k / 2)`
even numbers, so the pairs with different parities number
`ceil(n / 2) * floor(m / 2) + floor(n / 2) * ceil(m / 2)`. At the stated
bounds `n = m = 10⁵` this reaches `5 * 10⁹`, which exceeds the 32-bit
range, so fixed-width languages widen to 64-bit integers before
multiplying.

**Complexity:** `O(1)` time, `O(1)` space.
