# Solutions — Shift Letters Over Ranges

## Difference array and prefix sums

Carrying out the instructions one at a time can rewrite the same span of
characters many times — with `5 * 10⁴` instructions over a string of the same
length that is quadratic work. The observation that removes the blow-up: order
does not matter. Two forward steps and a backward step over a position land on
the same letter however they are interleaved, so the only quantity worth
computing is the net step count of each position.

Record each instruction in `O(1)` with a difference array: add the step at
`start` and subtract it at `end + 1`, using an array of length `n + 1` so the
second marker is always in range. A left-to-right running total over that array
then yields the net step at every index, and one modular update per character
produces the answer. In Python a single expression does it —
`(ord(c) - 97 + step) % 26 + 97` — because `%` with a positive modulus is
non-negative, which covers backward steps and wraps past both ends of the
alphabet without any branching.

Build the output as a list of characters and `join` once, so assembly stays
linear. Overlapping and repeated spans need no special care; their steps simply
accumulate. For `s = "fjord"` with instructions `[[0,1,1],[2,4,0],[1,3,1]]`, the
net steps are `+1, +2, 0, 0, -1`, giving `glorc`.

**Complexity:** `O(n + q)` time, `O(n)` space.
