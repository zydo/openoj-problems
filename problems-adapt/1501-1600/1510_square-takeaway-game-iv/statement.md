# Square Takeaway Game IV

## Description

Alice and Bob play a single-pile takeaway game, Alice moving first.

The pile starts with `n` stones. On a turn, the mover takes away a
non-zero perfect-square number of stones — `1`, `4`, `9`, and so on —
provided the pile holds at least that many.

Whoever is faced with an empty pile on their turn has no legal move and
loses.

Return `true` when Alice, the opening player, can force a win assuming
both sides play perfectly, and `false` otherwise.

### Example 1

```text
Input: n = 9
Output: true
Explanation: 9 is itself a perfect square, so Alice clears the pile in
one move (9 -> 0) and Bob is stuck.
```

### Example 2

```text
Input: n = 17
Output: false
Explanation: every square Alice can take — 1, 4, 9, or 16 — leaves Bob a
pile of 16, 13, 8, or 1, and each of those wins for the player to move.
Perfect play by Bob denies Alice every line.
```

### Example 3

```text
Input: n = 13
Output: true
Explanation: taking 4 or 9 would leave 9 or 4 — a gift to Bob. Taking 1
instead leaves 12, a pile that loses for whoever must move from it.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

Classify each pile size as winning or losing for the player about to
move from it: the classification needs only the smaller sizes, so the
table fills in from the bottom up.

### Hint 2

A size is winning exactly when at least one square removal lands on a
losing size; stop searching squares at the first such move.
