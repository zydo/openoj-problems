# Switchback Arrays I

## Description

You are given three integers `n`, `l`, and `r`.

An array of length `n` is a _switchback array_ when all three of these hold:

- every entry is an integer in the inclusive window `[l, r]`;
- no entry repeats the one immediately before it;
- each step switches direction relative to the one before — after a move to
  a larger value comes a move to a smaller one, and the other way around.

So the array never runs flat, and it never climbs or falls twice in a row:
it climbs, falls, climbs, falls in strict alternation.

Count the switchback arrays of length `n` over the window `[l, r]`. Because
the total grows quickly, report it modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 4, l = 1, r = 3
Output: 16
Explanation: Three values are on offer, and a length-4 switchback has to
revisit some of them; sequences such as [1,2,1,2], [2,1,3,1] and [3,2,1,2]
qualify, and enumerating every one of them gives 16.
```

### Example 2

```text
Input: n = 5, l = 2, r = 6
Output: 492
Explanation: Five values leave many alternating continuations open after
the first entry is fixed; counting them all yields 492.
```

### Example 3

```text
Input: n = 4, l = 4, r = 7
Output: 62
Explanation: Only the width of the window matters, not where it sits — a
window of four consecutive values admits 62 switchbacks of length 4 no
matter its endpoints.
```

### Constraints

- `3 <= n <= 2000`
- `1 <= l < r <= 2000`

## Hints

### Hint 1

Keep dynamic-programming tables indexed by the last value together with the
direction the next step must take; after a fall the next step must rise,
and after a rise it must fall.

### Hint 2

Each transition is a range sum over the previous table: arrays whose next
step must rise extend onto larger values, and those whose next step must
fall extend onto smaller ones.

### Hint 3

Carry those range sums as running totals while rebuilding each layer, so a
layer costs one linear pass over the window rather than a pass over every
pair of values — all arithmetic modulo `10⁹ + 7`.
