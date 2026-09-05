# Solutions — Nearest Pair in the Plane

## Join each coordinate pair once

The query self-joins `GridPoints` with a strict lexicographic ordering:
`a.horizontal < b.horizontal`, or equal horizontal coordinates with
`a.vertical < b.vertical`. Thus every unordered pair appears once and no
point can pair with itself.

For each joined pair, the expression calculates the Euclidean distance from
the squared horizontal and vertical deltas. `MIN` selects the smallest
value, and the outer `ROUND` produces the requested two-decimal
`nearest_distance`.

The self-join considers `n(n - 1) / 2` pairs and the aggregate keeps only a
running minimum.

**Complexity:** `O(n^2)` time, `O(1)` space.
