# New Bulbs For The Dark Spans

## Description

An integer array `lights` of length `n` describes a road whose positions are
numbered `0` through `n - 1`.

Position `i` of the road carries:

- a working bulb of strength `lights[i]` when `lights[i] = v > 0` — it lights
  every position from `max(0, i - v)` through `min(n - 1, i + v)`, inclusive;
- nothing at all when `lights[i] = 0`.

A position counts as lit when at least one working bulb reaches it.

You may hang extra bulbs anywhere on the road. Every extra bulb is weak: one
hung at position `j` lights only the range `max(0, j - 1)` through
`min(n - 1, j + 1)`, inclusive.

Return the fewest extra bulbs that leave no dark position on the road.

### Example 1

```text
Input: lights = [0,0,0,0,0,0]
Output: 2
Explanation:
    The road starts completely dark. Hang one bulb at position 1 — it
    lights 0, 1 and 2 — and another at position 4, which lights 3, 4 and
    5. Two weak bulbs tile the whole road, and one cannot.
```

### Example 2

```text
Input: lights = [1,0,0,0,0,2]
Output: 1
Explanation:
    The working bulbs already reach 0, 1 (strength 1 at the left end) and
    3, 4, 5 (strength 2 at the right end). Only position 2 stays dark, and
    one bulb hung at position 3 lights 2, 3 and 4, closing the gap.
```

### Example 3

```text
Input: lights = [0,0,1,0]
Output: 1
Explanation:
    The working bulb at position 2 lights 1, 2 and 3. Position 0 is dark;
    hanging one bulb at position 1 lights 0, 1 and 2 and finishes the job.
```

### Example 4

```text
Input: lights = [3,0,0,0,0,0,0]
Output: 1
Explanation:
    The strong bulb at the left end covers positions 0 through 3. The dark
    stretch 4 through 6 is spanned by a single extra bulb at position 5,
    which lights 4, 5 and 6.
```

### Constraints

- `1 <= n == lights.length <= 10^5`
- `0 <= lights[i] <= n`

### Hint 1

Start by recording which positions the existing working bulbs already
reach — a difference array makes that pass linear.

### Hint 2

Then walk the road from the left. The moment a dark position `i` appears,
hang a new bulb as far right as it can sit while still reaching `i`.

### Hint 3

Because every extra bulb has a fixed reach of one, that seat is `i + 1`
(unless the road ends sooner). The new bulb then covers `i` through
`i + 2`, so skip past everything it lit and keep scanning.
