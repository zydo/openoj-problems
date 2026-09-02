# Reaching the Target Point on a Grid

## Description

Picture an unbounded grid whose points carry integer coordinates. You
start at `(1, 1)` and want to arrive at `(targetX, targetY)` after a
finite sequence of steps. From a point `(x, y)` a single step takes you
to exactly one of:

- `(x, y - x)`
- `(x - y, y)`
- `(2 * x, y)`
- `(x, 2 * y)`

Return `true` if some sequence of steps lands on the target and `false`
otherwise.

### Example 1

```text
Input: targetX = 8, targetY = 24
Output: true
Explanation: (1,1) -> (2,1) -> (2,2) -> (4,2) -> (4,4) -> (8,4) ->
(8,8) -> (8,16) -> (8,24) is a legal path.
```

### Example 2

```text
Input: targetX = 12, targetY = 18
Output: false
Explanation: Along any path out of (1,1) the odd part of the gcd of the
two coordinates never changes from 1, while gcd(12,18) = 6 has odd part
3 — so no path can arrive.
```

### Example 3

```text
Input: targetX = 3, targetY = 5
Output: true
Explanation: (1,1) -> (1,2) -> (1,4) -> (1,3) -> (1,6) -> (1,5) ->
(2,5) -> (4,5) -> (8,5) -> (3,5) is a legal path.
```

### Constraints

- `1 <= targetX, targetY <= 10⁹`

## Hints

### Hint 1

Try travelling backwards, from `(targetX, targetY)` toward `(1, 1)`: the
moves invert into `(x + y, y)`, `(x, y + x)`, `(x / 2, y)` when `x` is
even, and `(x, y / 2)` when `y` is even.

### Hint 2

Ask what the two doubling moves are actually buying you — in which
situations do they help at all?

### Hint 3

Consider how applying only the two subtractive-style moves affects
`gcd(x, y)`.

### Hint 4

Combine the two observations into a criterion on the gcd that tells you
exactly when `(1, 1)` can be reached.
