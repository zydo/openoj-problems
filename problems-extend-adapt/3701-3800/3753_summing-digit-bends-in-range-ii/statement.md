# Summing Digit Bends In A Range II

## Description

Two integers `num1` and `num2` mark off the inclusive range
`[num1, num2]`.

Give each number in the range a **bend count**: read its decimal digits
and count every interior digit that is either strictly greater than both
of its immediate neighbors or strictly less than both. A digit never
counts when a neighbor equals it, and the first and last digits — each
having only one neighbor — are never eligible. Numbers with fewer than
three digits have no interior digits, so their bend count is 0. For
instance, 4959 bends twice (the 9 rises above both 4s beside it, and the
5 sinks below both 9s), while 2468 never bends because its digits only
ever rise.

Return the sum of the bend counts of all numbers in `[num1, num2]`.

### Example 1

```text
Input: num1 = 123456789012, num2 = 123456789020
Output: 19
Explanation: Every number in this block climbs 1, 2, ..., 9 and then
falls to 0, so its 9 (rising into, then falling away) and its 0 (falling
into, then rising away) both bend — 2 each. In 123456789020 the trailing
0 also rises into the final 2 and falls back, a third bend. That is
8 × 2 + 3 = 19.
```

### Example 2

```text
Input: num1 = 999999999999988, num2 = 1000000000000000
Output: 1
Explanation: Walls of equal 9s never bend, and 1000000000000000 is one
1 followed by zeros whose interior is all equal 0s. The only
contribution comes from 999999999999989, whose lone 8 sits strictly
below the 9s on both sides.
```

### Example 3

```text
Input: num1 = 10, num2 = 99
Output: 0
Explanation: Every number here has exactly two digits, and no digit of a
two-digit number has neighbors on both sides, so nothing can bend.
```

### Constraints

- `1 <= num1 <= num2 <= 10¹⁵`
- The answer fits in a signed 64-bit integer.

## Hints

### Hint 1

Stepping through almost `10¹⁵` numbers one at a time is hopeless.
Instead compute a prefix total `f(N)` — the summed bend counts of
`[1, N]` — and combine two of those as `f(num2) − f(num1 − 1)`.

### Hint 2

Sweep `N`'s digits from the most significant end, remembering for each
live prefix whether it still equals `N`'s leading part and which two
digits were placed last. A digit's bend is settled the moment its right
neighbor is placed.

### Hint 3

Zeros that precede the first real digit are not digits of the number.
Carry a "started" flag and let bend scoring begin only among genuinely
placed digits.
