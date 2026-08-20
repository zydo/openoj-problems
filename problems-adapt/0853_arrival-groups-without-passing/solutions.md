# Solutions — Arrival Groups Without Passing

## Sort by position, count fleet leaders

For a traveler starting at `p` with velocity `v`, the unobstructed arrival
time is `(destination - p) / v`. Sort the paired starts and velocities in
descending start order, so the traveler nearest the endpoint is processed
first.

Keep the arrival time of the current leading group. A traveler behind it whose
own time is less than or equal to that value must catch the group at or before
the endpoint; it merges and does not change the group's arrival time. A
strictly greater time means it can never catch the group ahead, so it becomes
the leader of a new group and replaces the tracked time.

The comparison deliberately includes equality because meeting exactly at the
endpoint still combines the travelers. Processing from front to back is valid
because a merged traveler can never make the group ahead arrive earlier or
permit passing.

Each newly observed record-high arrival time starts one group. The answer is
therefore the number of such records in the position-sorted sequence.

**Complexity:** `O(n log n)` time and `O(n)` space.
