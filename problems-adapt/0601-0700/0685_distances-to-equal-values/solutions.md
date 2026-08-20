# Solutions — Distances to Equal Values

## Grouped Prefix Sums

A position's total only ever involves positions holding the same value, so
the first move is to bucket the positions by value, and never compare across
buckets again. Each bucket then holds its value's positions in increasing
order — a small one-dimensional problem: sum the gaps from every point to
every other point of the same bucket.

Summing gaps pair by pair is quadratic, and one value may own the whole
array, so each bucket needs the gaps in bulk. With `prefix` the running
total of the bucket's positions, the `j`-th occurrence (0-based) at position
`i` has `j` earlier occurrences, all at positions `<= i`: their combined gap
is `i * j - prefix[j]`. The `m - 1 - j` later occurrences all sit at
positions `>= i` and contribute `(prefix[m] - prefix[j + 1]) - i * (m - 1 - j)`.
Both sides are plain arithmetic, so one bucket costs work proportional to its
size, not its square.

Walk `[3, 3, 8, 3, 8]`: the 3-bucket is `[0, 1, 3]` with prefix sums
`[0, 0, 1, 4]`; for the middle occurrence at position 1 the earlier side is
`1 * 1 - 0 = 1` and the later side is `(4 - 1) - 1 * 1 = 2`, matching the
hand total of 3. A value occurring once lands in a bucket of size 1, where
both formulas give 0 — exactly the rule for lonely values.

Every position is placed in one bucket and charged a constant amount of
work, so beyond the initial pass the method is linear.

**Complexity:** `O(n)` time, `O(n)` space.
