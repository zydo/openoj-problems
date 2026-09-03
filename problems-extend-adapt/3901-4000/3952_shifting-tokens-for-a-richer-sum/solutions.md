# Solutions — Shifting Tokens For A Richer Sum

## Token-block greedy

A maximal token block that starts after a zero can spread across the zero's
cell and every cell of the block except one, so take the stretch's total and
give up its smallest value. A block beginning at index 0 has no cell to
reach into and keeps its own indices exactly. These stretches are disjoint,
so the per-block gains simply add up.

**Complexity:** `O(n)` time, `O(1)` space.
