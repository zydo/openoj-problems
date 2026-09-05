# Solutions — Counting Tiles By Their Dark Cells

## Count only the tiles a dark cell touches

A grid of up to 10⁵ x 10⁵ cells holds far too many tiles to visit one by
one, but at most 10⁴ cells are dark, and a tile can only be non-empty if
some dark cell lies inside it. A dark cell at `(x, y)` belongs to exactly
the tiles whose top-left corner is one of `(x - 1, y - 1)`, `(x - 1, y)`,
`(x, y - 1)` and `(x, y)` — fewer near the outer edges, where such a corner
would violate the valid range `0 <= x < m - 1`, `0 <= y < n - 1`. So a hash
map keyed by top-left corner accumulates how many dark cells each touched
tile holds: every coordinate bumps the up-to-four corners around it, and
because the coordinates are pairwise distinct every bump is a different
dark cell, which is precisely the per-tile count wanted.

The answer array falls out of the map. `arr[i]` for `i = 1..4` counts the
entries holding `i` (no entry can exceed 4, a tile has only four cells),
and every tile containing at least one dark cell is present exactly once,
since each of its dark cells enumerates that same corner key. The number
of entries therefore equals the touched tiles, which makes the zero bucket
pure arithmetic: `arr[0] = (m - 1) * (n - 1) - map.size()`. That total
reaches about ten billion on the largest grids, so it overflows 32-bit
integers on its own — count in 64-bit throughout.

**Complexity:** `O(k)` time, `O(k)` space, where `k = coordinates.length`.
