# Counting Right-Triangle Triples

## Description

A triple of integers `(a, b, c)` forms a **right-triangle triple** when
`a² + b² = c²` — the same relation the side lengths of a right triangle
satisfy, with `c` playing the hypotenuse. Order matters here: `(3, 4, 5)`
and `(4, 3, 5)` are two different triples.

Given an integer `n`, count the right-triangle triples whose three entries
all lie in `[1, n]`.

### Example 1

```text
Input: n = 1
Output: 0
Explanation: with every entry forced to 1, the equality 1² + 1² = 1² is
impossible, so no triple qualifies.
```

### Example 2

```text
Input: n = 24
Output: 12
Explanation: the qualifying triples are the two orderings of (3, 4, 5),
the two of (6, 8, 10), the two of (5, 12, 13), the two of (8, 15, 17),
the two of (9, 12, 15), and the two of (12, 16, 20).
```

### Example 3

```text
Input: n = 249
Output: 324
```

### Constraints

- `1 <= n <= 250`

## Hints

### Hint 1

Once you fix the two legs `a` and `b`, the hypotenuse is already decided:
it must be the square root of `a² + b²`. When is a candidate `c` actually
countable?

### Hint 2

The square root of an integer can be tested for "perfect squareness" with
a rounding-and-resquaring check, so a double loop over `a` and `b` is all
the enumeration you need.
