# Solutions — Fewest Supply Stops to Destination

## Greedy with a Max-Heap of Passed Stations

Treat the current energy total as the farthest coordinate reachable from the
origin. Add every supply point at or before that coordinate to a max-heap,
without immediately deciding to stop there.

When the destination is still beyond reach and no new point can be added, a
stop is necessary. Among all passed supplies, taking the largest amount is
optimal because each choice costs one stop and a larger addition can only make
at least as many later points reachable. Pop that amount, extend the reachable
coordinate, and increment the count.

If the heap is empty during a shortfall, no past or future supply can be used,
so return `-1`. Once the accumulated range reaches `destination`, return the
number of heap pops. The non-strict reachability comparison permits arrival at
a supply point with zero energy, as required.

The deferred choices correspond to a valid journey: every popped supply was
already reachable before it was selected. Exchanging any smaller selected
amount for the largest available one never increases the number of stops,
which proves the greedy rule.

**Complexity:** `O(n log n)` time and `O(n)` space.
