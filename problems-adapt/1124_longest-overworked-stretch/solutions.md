# Solutions — Longest Overworked Stretch

## Prefix Sum with First-Occurrence Map

Replace each day by `+1` when it is heavy (above eight hours) and `-1`
otherwise. Under that scoring a block is overworked precisely when its entries
add to a positive number, so the question turns into a classic one: how long
can a subarray with a positive sum be? The scoring is what makes the problem
tractable — every step moves the running total by one unit, never further.

Sweep left to right carrying the running total. A map `first` remembers, for
each total ever reached, the lowest index at which it appeared; it starts with
`{0: -1}` so that a block anchored at index `0` needs no special case. Two
situations can arise at index `i`. When the running total is already positive,
days `0..i` form an overworked block by themselves and `best` becomes `i + 1`.
Otherwise a block ending at `i` is overworked only if it starts just past an
index whose total was `total - 1`; that leaves a score of exactly `+1`. Any
smaller stored total would give a longer candidate, but it cannot be reached
without crossing `total - 1` first, so the earliest sighting of `total - 1` is
the leftmost usable start and `i - first[total - 1]` is the longest block
ending here.

Writing into `first` only for totals that are new is what keeps every recorded
index leftmost. When `total - 1` has never occurred, nothing ending at `i`
scores positively and `best` is left alone.

Days that are never heavy need no separate handling: the running total only
falls, neither branch triggers, and the answer stays `0`.

**Complexity:** `O(n)` time, `O(n)` space.
