# Solutions — Backfill the Blank Rows

## Correlated lookup of the nearest earlier non-blank

Each row either already names an item or must inherit one, so the query can
be read as a per-row question: among rows with a smaller `id` and a
non-null `item`, take the item of the greatest such `id`. A correlated
subquery answers it directly — filter to `id` strictly less than the
current row's with `item IS NOT NULL`, order descending by `id`, keep the
first hit. `COALESCE` then prefers the row's own item whenever it is
already set, leaving filled rows untouched.

The outer query emits every row ordered by ascending `id`, which is the
required output order.

**Complexity:** `O(n²)` time in the worst case (SQLite evaluates the
subquery per row), `O(n)` space.
