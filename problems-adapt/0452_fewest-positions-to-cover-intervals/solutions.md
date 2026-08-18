# Solutions — Fewest Positions To Cover Intervals

## Greedy positions at the earliest right end

Each interval is a stretch of the number line, and one chosen position
serves exactly the intervals that contain it. So the task is the classic
point-cover question: pick as few positions as possible so that no interval
is left without one.

The greedy orders intervals by right end and always places the next position
at the right end of the first interval not yet covered. Why that is safe:
some position must cover this interval, and no useful position for it lies
beyond its right end; among the positions inside it, the right end reaches
every interval that any earlier one could, since moving right only adds
intervals whose starts lie before it. An optimal solution can therefore
always be rearranged to put a position exactly there.

The sweep keeps `last_position`, the most recently placed position. An interval
whose `start > last_position` was missed by everything placed so far, so a new
position goes down at this interval's `end` — the earliest end left,
preserving the invariant. The comparison is deliberately strict: intervals
are closed, so an interval beginning exactly at `last_position` is already
covered and costs nothing. In example 1, sorted by right end
`[1,4], [2,5], [3,9], [6,11]`, the position 4 covers the first three (their
starts are all at most 4), and `[6,11]` starts past 4, forcing a second
position; in example 3, `-3` covers both `[-6,-2]` and `[-3,1]` because -3
is an endpoint of each.

Coordinates span the whole signed 32-bit range, so the sweep never assumes
nonnegative positions; the sort handles ties and fully disjoint inputs
(example 2) naturally — disjoint intervals each take a position.

**Complexity:** `O(n log n)` time for the sort plus one linear pass,
`O(n)` space for the sorted copy (or `O(1)` extra when sorting in place).
