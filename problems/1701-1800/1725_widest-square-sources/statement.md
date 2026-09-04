# Widest Square Sources

## Description

An array `rectangles` is given, where `rectangles[i] = [li, wi]` describes
the `i`-th rectangle with sides `li` and `wi`.

A rectangle may be trimmed down to a square whose side `k` is allowed as
long as it fits both ways, i.e. `k <= li` and `k <= wi`. A piece shaped
`[4,6]`, say, can still hold a square of side at most 4.

Call the largest side achievable this way over the whole input `maxLen`.
Report how many of the rectangles are able to produce a square of exactly
that side.

### Example 1

```text
Input: rectangles = [[6,9],[4,10],[12,7],[8,6]]
Output: 1
Explanation: The squares each rectangle can yield have sides [6,4,7,6].
The best side is 7, and only one rectangle reaches it.
```

### Example 2

```text
Input: rectangles = [[3,5],[5,3],[2,9],[6,4],[4,6]]
Output: 2
Explanation: The squares each rectangle can yield have sides [3,3,2,4,4].
The best side is 4, and two rectangles reach it.
```

### Constraints

- `1 <= rectangles.length <= 1000`
- Every `rectangles[i]` holds exactly 2 sides.
- `1 <= li, wi <= 10⁹`
- `li != wi`

## Hints

### Hint 1

The square carved out of a single rectangle can never exceed its shorter
side, so the rectangle is fully summarized by `min(li, wi)`.

### Hint 2

Sweep the rectangles once, keeping the running best of those shorter sides.

### Hint 3

A second sweep then counts how many rectangles match that best value — or
carry both the best and its tally in the same pass.
