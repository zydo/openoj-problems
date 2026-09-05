# Solutions — Lamps Left Lit

Switching a lamp on and off is an involution, so a lamp's final state
depends only on the parity of how many times its number appears — the
order and spacing of the operations never matter. That observation collapses
the simulation into a fixed hundred-slot table and one index-ordered sweep.

## Boolean lamp table

Keep a boolean table indexed 1 to 100, all off initially. Walk `lamps` once
and flip the entry at index `lamps[i]`, on to off or off to on. After the
walk a lamp is lit exactly when its number was toggled an odd number of
times, which is precisely the state the operation sequence leaves behind.
Then sweep the table from index 1 to 100 and collect the positions still
on: the sweep visits lamp numbers in ascending order, so the required
sorted output falls out without any explicit sort.

The table is a fixed 101-entry array whose size does not depend on the
input, and every element of `lamps` lies between 1 and 100, so indexing is
always in range. Values never leave the range 1 to 100, far inside 32-bit
integers — even a byte would hold them. Both loops are plain iterations
(at most `n` flips plus a constant 100-step sweep), so no language risks
recursion depth, and the only extra storage is the constant-size table
plus the returned list of at most 100 entries.

**Complexity:** `O(n)` time, `O(1)` space.
