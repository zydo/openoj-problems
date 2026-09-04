# Solutions — Splitting a Stream by Greater Counts

## Two Fenwick trees over compressed values

Every step needs `above` for both lists — how many stored elements strictly
exceed the incoming value — and storage is append-only. That is a rank query
plus insertion per step: compress the distinct values to ranks `1..m`, and let
each list carry its own Fenwick tree counting occurrences per rank. Then
`above(arr, v) = len(arr) - prefix_count(rank(v))`, because everything not at
most `v` is exactly what exceeds it.

The deal seeds `first = [nums[0]]` and `second = [nums[1]]` with both trees
loaded, then works through the rest of the stream: compute both counts, hand
the element to the strictly larger count, break ties toward the shorter list,
and remaining ties toward `first` — the `len(first) <= len(second)` comparison
routes equal lengths to `first`, exactly as the rule demands. Every append is
one tree update.

Compression tames values up to 10^9, and duplicates come out right for free:
the trees count per rank and `above` uses an "at most" prefix sum, so equal
values never count as exceeding themselves. In the third worked example
(`[5, 5, 4, 4]`), each 4 sees counts 1 vs 1 — the 5s do not exceed a 4 twice —
so the length tiebreak does all the deciding and the lists finish 2 and 2. The
returned array is `first` concatenated with `second`.

**Complexity:** `O(n log n)` time, `O(n)` space.
