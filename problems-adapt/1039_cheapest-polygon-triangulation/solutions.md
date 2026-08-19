# Solutions — Cheapest Polygon Triangulation

## Interval DP over corner ranges

Pin down one side of the polygon and ask which triangle owns it. For the side
that joins corner `i` to corner `j`, the owner is `(i, k, j)` for some corner
`k` strictly between them, and once `k` is named the two leftover pieces —
corners `i` through `k`, and corners `k` through `j` — are independent
polygons, each again pinned along the side that closes it. So with `best[i][j]`
standing for the cheapest way to cut up the piece spanning corners `i..j`:

```text
best[i][j] = min over i < k < j of
                 best[i][k] + best[k][j] + values[i] * values[k] * values[j]
```

Every drawing of the piece names exactly one such `k`, and every `k` yields
drawings, so ranging over `k` covers all of them without ever listing a drawing
in full. A range holding two corners or fewer contains no triangle and costs
nothing, which a zero-filled table already says. Order the work by the width
`j - i`, starting at width 2 — the narrowest range that is a triangle — and the
two sub-ranges on the right-hand side are always finished before they are read.
The answer is `best[0][n - 1]`.

On the hexagon `[2,6,2,9,2,8]` the recurrence settles on `k = 4` for the full
range: the piece `0..4` is cut for 68 and the closing triangle `(2, 2, 8)` adds
32, for 100.

**Complexity:** `O(n^3)` time, `O(n^2)` space.
