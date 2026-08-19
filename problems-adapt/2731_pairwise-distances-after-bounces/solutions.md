# Solutions — Pairwise Distances After Bounces

## Pass-Through Equivalence with Sorted Prefix Sums

A bounce only swaps which particle is which: two bodies rebounding off each
other end at exactly the points that two ghost bodies walking straight
through one another would occupy. Because the requested total pairs up
positions without caring which particle sits where, the bounces can be
deleted from the story entirely. After `d` seconds the multiset of positions
is just `x + d` for every particle told `'R'` and `x - d` for every `'L'`.

Summing pairwise distances over a sorted list is then a single sweep: at
index `i` (0-based) the pairs formed with every earlier point contribute
`pos[i] * i - prefix`, where `prefix` holds the running sum of the points
before `i`. Accumulating that term along the sorted order charges each
unordered pair exactly once.

For `nums = [-1, 1, 3]`, `s = "RLL"`, `d = 2`, the ghost points are
`1, -1, 1`, sorted to `[-1, 1, 1]`: the sweep adds `0`, then
`1 · 1 - (-1) = 2`, then `1 · 2 - 0 = 2`, for a total of 4 — matching the
bounced narrative in the statement.

Coordinates reach `3 · 10⁹` and the pair count scales with `n`, so raw
totals overflow 64 bits; Python integers carry them exactly and the single
reduction modulo `10⁹ + 7` happens at the very end, which the residue
request permits.

**Complexity:** `O(n log n)` time, `O(n)` space.
