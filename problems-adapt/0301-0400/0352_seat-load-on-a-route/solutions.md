# Solutions — Seat Load on a Route

## Difference Array Sweep

The verdict hinges on one quantity: how many passengers are on board at
each stretch of the route. A group changes that quantity exactly twice —
`+size` where it boards and `-size` where it alights — so writing those two
deltas into a difference array indexed by mark reduces the whole question to
one accumulation pass: add the deltas in mark order and compare the running
load against `capacity`.

Marks stay within 0…1000, which is why a fixed 1001-slot array works and no
event sorting is needed: scanning the slots by index _is_ travelling the
route. The placement of each negative delta carries the one semantic that
matters: an alighting lands on the group's `end` mark itself, so while
accumulating, seats released at a mark are credited ahead of any boarding
placed on the same mark. Example 2 leans on exactly this — the first group's
`-4` at mark 3 and the second group's `+4` at mark 3 meet in one slot and
cancel, so the load never shows 8.

The sweep reports `false` at the first mark where the running sum crosses
`capacity`, and `true` if the route finishes within bounds. A lone group
bigger than `capacity` is caught the same way, at its boarding mark.

**Complexity:** `O(G + M)` time, `O(M)` space, for `G` groups and
`M = 1001` marks.
