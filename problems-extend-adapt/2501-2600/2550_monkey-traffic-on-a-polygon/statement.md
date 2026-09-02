# Monkey Traffic on a Polygon

## Description

A regular convex polygon has `n` vertices labeled `0` through `n - 1`
in clockwise order, and one monkey sits at every vertex. The figure
below shows such a polygon with six vertices.

![diagram](figures/2550-1.svg)

At one shared instant, every monkey walks to an adjacent vertex — each
monkey independently picks clockwise or anticlockwise. A collision
occurs whenever at least two monkeys occupy the same vertex afterward,
or when two monkeys travel the same edge in opposite directions and
cross mid-way.

Return the number of distinct movement patterns that produce at least
one collision. The answer can be enormous, so give it modulo `10⁹ +
7`.

### Example 1

```text
Input: n = 6
Output: 62
Explanation: Six monkeys choose directions independently, giving
2⁶ = 64 movement patterns. Exactly two of them avoid every collision —
all six clockwise, or all six anticlockwise — so the remaining
64 - 2 = 62 patterns collide somewhere.
```

### Example 2

```text
Input: n = 10
Output: 1022
Explanation: There are 2¹⁰ = 1024 patterns, and as always only the two
unanimous rotations end peacefully, so 1024 - 2 patterns collide.
```

### Constraints

- `3 <= n <= 10⁹`

## Hints

### Hint 1

Flip the question around: instead of hunting collisions directly,
characterize the movement patterns in which no two monkeys ever meet,
then subtract that count from `2ⁿ`.
