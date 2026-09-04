# Solutions — Busiest Meeting Room

## Two heaps over sorted meetings

Sorting the meetings by original start turns the rulebook into a single pass.
From there two min-heaps carry all the state: `free` holds unused room numbers,
and a min-heap pops the lowest number first, which is the allocation rule
verbatim; `busy` holds `(end_time, room)` pairs so the room that opens soonest
pops first, room number breaking end-time ties.

For each meeting `[s, e)`, first return every busy room whose end time has
passed `s` to the `free` heap. Emptying all simultaneous openings into `free`
_before_ allocating is what makes the lowest-numbered among them win. If a room
is free, take the smallest number and schedule `[s, e)`. Otherwise the meeting
waits for the earliest-opening room: pop it and reschedule with the duration
preserved — new end `old_end + (e - s)`.

A counter per room tallies hosts; the closing scan uses strict comparison, so
the lowest room number survives ties. Every meeting performs a constant number
of heap operations, so with `m` meetings and `n` rooms the simulation costs
little beyond the initial sort.

For `n = 2` and `meetings = [[1,4],[2,3],[5,9],[6,8]]`, rooms 0 and 1 open
together at time 5; room 0 hosts the third meeting, both rooms finish at two
hosts each, and the strict scan reports room 0.

**Complexity:** `O(m log m + m log n)` time, `O(n + m)` space.
