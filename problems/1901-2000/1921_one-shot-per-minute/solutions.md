# Solutions — One Shot per Minute

Every boat is fully described by one number: the minute it arrives,
`ceil(dist[i] / speed[i])`. The cannon fires at minutes 0, 1, 2, …, and the
statement's exact-moment rule means the i-th shot requires the targeted
boat's arrival to be strictly greater than `i` — a boat stepping into
the harbor as the cannon charges ends the game first. So the whole game
reduces to scheduling shots against arrival minutes.

## Greedy by arrival minute

If any set of k shots is feasible, then taking the k earliest arrivals in
that order is feasible too — replacing a shot with an earlier-arriving
boat never violates a "arrival > position" constraint. Hence sorting the
arrival minutes and shooting in that order is optimal, and the answer is the
length of the longest prefix whose i-th smallest arrival still exceeds `i`.

The code computes `(dist[i] + speed[i] - 1) / speed[i]` — integer arithmetic
for the ceiling, immune to any float rounding — sorts, and returns at the
first index where `arrivals[i] <= i`; if the scan completes, every boat
died and `n` is returned. Example 1 makes the loss rule concrete: arrivals
`[1,2,2]` fail at index 2, so exactly two boats sink.

**Complexity:** `O(n log n)` time for the sort, `O(n)` space.
