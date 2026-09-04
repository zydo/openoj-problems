# Non-Overlapping Segment Placements

## Description

There are `n` points on a number line, the `i`-th of them (for
`0 <= i < n`) sitting at `x = i`. Draw exactly `k` straight segments,
each one joining two of these points — so every segment spans at least
two points, and endpoints always land on integers.

Two segments **overlap** when their interiors, the open stretches
strictly inside their endpoints, have a point in common. Merely
meeting at a shared endpoint does not count as overlapping. The `k`
segments are not required to touch every one of the `n` points.

Count the distinct ways to draw `k` mutually non-overlapping segments.
The count can be enormous, so report it modulo `10⁹ + 7`.

### Example 1

![diagram](figures/1621-1.svg)

```text
Input: n = 4, k = 2
Output: 5
Explanation: Naming a segment by its endpoints (left, right), the
five valid drawings are {(0,2),(2,3)}, {(0,1),(1,3)}, {(0,1),(2,3)},
{(1,2),(2,3)} and {(0,1),(1,2)}. In the first, second and fifth of
these the two segments meet at a shared endpoint, which is allowed.
```

### Example 2

```text
Input: n = 5, k = 1
Output: 10
Explanation: A single segment is any pair (l, r) with 0 <= l < r <= 4,
and there are C(5, 2) = 10 such pairs.
```

### Example 3

```text
Input: n = 40, k = 6
Output: 760021549
Explanation: The exact count of drawings is 28,760,021,745; reduced
modulo 10⁹ + 7 this becomes 760021549.
```

### Constraints

- `2 <= n <= 1000`
- `1 <= k <= n - 1`

## Hints

### Hint 1

A dynamic programming state can be captured by the current point index
plus how many segments still remain to be drawn.

### Hint 2

Give the state one more flag — whether a segment has been started but
not yet finished at the current index — and every state can then be
resolved in constant time. Counting-minded readers might instead ask
what the answer equals as a plain binomial coefficient.
