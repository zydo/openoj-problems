# Solutions — Neighbors That Share No Bits

## Direct range enumeration

The distance rule gives one short bounded window. Iterate its positive
values and add exactly those whose bitwise AND with `n` is zero.

**Complexity:** `O(k)` time, `O(1)` space.
