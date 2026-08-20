# Collision Survivors

## Description

`movers` describes a line of bodies, listed from leftmost to rightmost. No
entry is zero: its magnitude is the body's strength, and its sign is the way it
is headed — positive for rightwards, negative for leftwards. Every body covers
ground at the same rate, so a pair converges only when a rightward body has a
leftward body somewhere ahead of it.

Whenever two bodies converge and reach each other, the weaker of the two is
wiped out; equal strengths wipe out both. Bodies headed the same way, or headed
apart, never reach each other.

Return the bodies still standing once nothing more can happen, in left-to-right
order.

### Example 1

```text
Input: movers = [7,-3,12]
Output: [7,12]
Explanation: 7 and -3 close on each other, and 7 is the stronger, so -3 goes.
That leaves 7 and 12 both headed right, which settles the row.
```

### Example 2

```text
Input: movers = [-2,6,-6,3]
Output: [-2,3]
Explanation: -2 has nothing to its left to reach it. 6 and -6 match in
strength, so the pair cancels. Nothing is then left between -2 and 3, and they
are headed apart.
```

### Example 3

```text
Input: movers = [2,3,1,-9,-4]
Output: [-9,-4]
Explanation: -9 outweighs 1, then 3, then 2, and clears the whole left side
before anything stops it. -4 is behind it and headed the same way, so it
survives untouched.
```

### Constraints

- `2 <= movers.length <= 10⁴`
- `-1000 <= movers[i] <= 1000`
- `movers[i] != 0`

## Hints

### Hint 1

Work left to right and keep only the bodies that are still standing among those
you have read. Ask what the next body can possibly disturb.

### Hint 2

A newcomer sits to the right of everything you have kept, so the only body it
can reach is the last one kept — and only if the newcomer is headed left while
that one is headed right. Every other pairing is already settled.

### Hint 3

If the newcomer wins that encounter, it has to face whatever was behind its
victim, and possibly whatever was behind that. A structure whose last element
is cheap to inspect and cheap to drop — a stack — makes the repeat encounters
fall out as a loop, and each body enters and leaves it at most once.
