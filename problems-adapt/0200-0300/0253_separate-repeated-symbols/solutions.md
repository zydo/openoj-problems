# Solutions — Separate Repeated Symbols

## Frequency Order with Even-Then-Odd Placement

Count every letter and sort the distinct letters by descending frequency,
using alphabetical order for ties. The arrangement is feasible exactly when
the largest count does not exceed `(n + 1) // 2`; otherwise there are too few
other letters to separate its copies.

Allocate the result and fill indices `0, 2, 4, ...` in sorted letter order.
After passing the final even index, wrap to index `1` and continue through the
odd indices. This deterministic traversal produces the required canonical
answer.

Copies of one letter land two positions apart. The feasibility bound also
makes the transition from the even side to the odd side safe, so no equal
letters become adjacent.

**Complexity:** `O(n)` time and `O(n)` space; sorting at most 26 letters is
constant-sized.
