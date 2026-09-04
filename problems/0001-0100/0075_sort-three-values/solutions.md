# Solutions — Sort Three Values

Neither solution ever compares two elements with each other — with three
possible values, the multiset is all that matters, and each solution reads one
element at a time and decides where it belongs. The counting sort spends its
first sweep on bookkeeping, then rewrites the array from the tallies. The
three-way partition never leaves the array at all: it grows settled regions
from both ends while an unexamined band in the middle shrinks, which is what
the follow-up's single-sweep challenge asks for.

## Counting Sort

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

## Three Way Partition

The single-sweep answer keeps four regions alive at once — settled `0`s at
the front, settled `1`s behind them, settled `2`s at the back, and between
them a band of elements not yet examined. Three pointers hold the borders:
`low` just past the zeros, `mid` at the band's front, `high` at its back.
Every step reads `nums[mid]`, one element closer to done, and the loop ends
when the band empties (`mid` passes `high`) — so each element is read
exactly once.

What the read element is decides which border moves. A `0` swaps to the end
of the zero region and both `low` and `mid` step up — the element arriving
from the zero side is always a settled `1` (or `mid == low`, the swap being
a self-swap), already known and safely passed. A `1` is already in its home
region, so `mid` alone advances. A `2` swaps to the front of the tail
region and `high` retreats, but `mid` deliberately stays: whatever the
tail sent back is unexamined, and the next iteration must read it before
deciding anything. That asymmetry — advance after a low swap, hold after a
high swap — is the whole correctness of the sweep.

On `[1,0,2,1,0,0,2]`: the leading `1` just advances `mid`; the `0` swaps
left; the `2` trades with the trailing `2` and shrinks the band; the second
`1` advances; and the three remaining zeros migrate left one swap each,
leaving `[0,0,0,1,1,2,2]`. Every swap targets a border position, elements
never travel more than once in each direction, and nothing beyond the three
indices is stored.

**Complexity:** `O(n)` time, `O(1)` space.
