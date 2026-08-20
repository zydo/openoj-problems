# Solutions — Sort Three Values

## Two-Pass Counting Sort

An alphabet of three values makes comparison unnecessary: once you know how
many `0`s, `1`s and `2`s the input holds, the finished array is already
determined. That observation turns the sort into bookkeeping. The first sweep
tallies occurrences into a fixed `counts` table indexed by the value itself,
so `counts[v]` ends up holding exactly how often `v` was seen.

The second sweep reconstructs the array from the tallies. A single write
index advances left to right while three short loops emit `counts[0]` zeros,
then `counts[1]` ones, then `counts[2]` twos. Nothing is lost when a slot is
overwritten, because the tally pass has already recorded every element — the
original arrangement of equal values never mattered anyway. On the example
`[1,0,2,1,0,0,2]` the tallies are `3, 2, 2`, and the write pass emits
`[0,0,0,1,1,2,2]`.

The only state beyond the array itself is the three-slot table, and the
rearrangement lands in place, which is what the follow-up's one-sweep
variant trades away simplicity to avoid. Both approaches are linear; the
counting one just needs two looks at the data instead of one.

**Complexity:** `O(n)` time, `O(1)` space.
