# Fewest Bit Toggles Between Numbers

## Description

A toggle switches a single bit of a number's binary form — a 0 becomes a 1,
or a 1 becomes a 0. Any bit position may be toggled, including leading-zero
positions that are not printed: toggling the fourth bit from the right of 7
(`111`) turns it into `1111`, which is 15.

Given two integers `start` and `goal`, return the fewest toggles needed to
turn `start` into `goal`.

### Example 1

```text
Input: start = 21, goal = 6
Output: 3
Explanation:
In five bits, 21 is `10101` and 6 is `00110`. Three positions disagree:
- toggle the rightmost bit: 10101 -> 10100
- toggle the second bit from the right: 10100 -> 10110
- toggle the leftmost bit: 10110 -> 00110
Fewer than three toggles cannot fix three disagreeing positions, so the
answer is 3.
```

### Example 2

```text
Input: start = 5, goal = 40
Output: 4
Explanation:
5 is `0000101` and 40 is `0101000` when padded to seven bits. Four
positions disagree (the rightmost, the third, the fourth, and the sixth
from the right), and each needs its own toggle, so the answer is 4.
```

### Example 3

```text
Input: start = 0, goal = 0
Output: 0
Explanation:
The numbers are already equal, so no toggle is needed.
```

### Constraints

- `0 <= start, goal <= 10⁹`

## Hints

### Hint 1

A toggle is only useful at a position where the two numbers disagree; a
position where they already match must be left alone.

### Hint 2

The XOR of `start` and `goal` marks every disagreeing position with a set
bit in one value — the answer is simply how many bits are set in that
value.
