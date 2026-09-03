# Solutions — Raising The Machine Floors

## Two minima per machine

When a machine holds at least two parts, detaching its smallest part raises
its floor to its second-smallest capacity. All detached parts can be
sent to one receiving machine; that receiver ends up holding the globally
smallest capacity, so choosing the machine with the smallest second minimum as
the receiver loses as little as possible.

Scan every machine for its two smallest capacities. Add all second minima,
replace the smallest of them with the global minimum, and return the result.
If each machine holds a single part, no transfer can improve the total, so
return the sum of those parts.

**Complexity:** `O(mn)` time, `O(1)` space.
