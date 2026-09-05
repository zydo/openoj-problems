# Solutions — Two-Way Thinning Survivor

## Shrinking the Run in Place

One pass never scatters the survivors: they stay an arithmetic run — first
term, then first term + gap, and so on — so the four facts (first term, gap,
length, next direction) carry the whole state and each pass collapses to a
few integer operations. A left sweep keeps the run's head no matter what; a
right sweep keeps it exactly when the length is odd, because an even length
puts the head in a crossed-out slot from the right end's point of view, and
the head then advances by one gap. Either way the length drops to about half
(`(length + 1) // 2`, the middle survivor of an odd run being safe from both
directions), the gap doubles, and the direction flips.

For `n = 14`: the row of all fourteen thins to the seven odd numbers, the
right sweep takes `[1, 5, 9, 13]`, the next left sweep leaves `[1, 9]`, and the
final right sweep keeps `9`. For `n = 11` the same bookkeeping walks `11` all
the way home — after the first two passes the run is `[3, 7, 11]` and the head
jumps land it back on `11`.

The loop stops once a single number is left and returns the first term, which
is that survivor. At `n = 1` no pass ever runs. Since each pass halves the
count, the loop turns over roughly fifty times even at the top of the range —
materializing the row, which `10^15` numbers would demand, is never on the
table.

**Complexity:** `O(log n)` time, `O(1)` space.
