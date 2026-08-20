# Solutions — Happy Number

## Hash Set Cycle Detection

Summing the squares of a number's digits is a deterministic map on the
positive integers, so from any start the generated sequence must do one of
two things: hit `1`, a fixed point of the map, or slide into a cycle that
avoids `1` entirely. The method just runs the map and drops every produced
value into a `seen` set. Landing on `1` first means the start was happy;
producing a value already in the set means the tail is now looping, and the
answer is false.

One step peels digits off with `divmod(m, 10)`, squaring and adding as it
goes, so its cost is the digit count. Magnitudes collapse fast: a 32-bit
input maps in its first step to at most 810 — ten digits, all nines, give
10 × 81 — and stays under that afterwards, which bounds both the loop
length and the set size no matter how large the start is.

A single test, `while n != 1 and n not in seen`, covers both exits — the
happy exit leaves `n` at 1 and the comparison returns true, the cycling
exit leaves it elsewhere and returns false — and the input `1` itself
returns true before any step runs.

**Complexity:** `O(log n)` time, `O(log n)` space.
