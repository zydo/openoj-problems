# Busiest Meeting Room

## Description

You are given an integer `n` and a list `meetings` of half-closed intervals
`[start, end)`. There are `n` rooms numbered `0` to `n - 1`, and each entry
`meetings[i]` is one meeting occupying some room from `start_i` inclusive to
`end_i` exclusive. All start values are distinct.

Assign meetings to rooms in order of original start time, following these
rules:

- a meeting always takes the free room with the lowest number;
- if every room is occupied when a meeting's turn comes, the meeting waits and
  starts the moment a room opens, keeping its original duration;
- when a room opens at the same moment for several waiting meetings, the one
  with the earlier original start goes first.

Return the number of the room that hosts the most meetings; on a tie, the
lowest room number.

### Example 1

```text
Input: n = 2, meetings = [[1,4],[2,3],[5,9],[6,8]]
Output: 0
Explanation: The first meeting takes room 0 for [1,4) and the second room 1 for
[2,3). At time 5 both rooms are open, so the third meeting takes the
lower-numbered room 0 for [5,9), and the fourth takes room 1 for [6,8). Each
room ends up hosting two meetings; the tie goes to room 0.
```

### Example 2

```text
Input: n = 3, meetings = [[0,7],[1,3],[2,9],[4,6]]
Output: 1
Explanation: The first three meetings fill rooms 0, 1, 2 immediately. When the
fourth arrives at time 4, room 1 has just opened (its meeting ended at 3), so it
hosts [4,6) as well — two meetings, more than any other room.
```

### Example 3

```text
Input: n = 1, meetings = [[2,5],[3,4],[9,12]]
Output: 0
Explanation: With one room everything serializes: the second meeting waits
until 5 and runs [5,6), keeping its one-unit duration. Room 0 hosts all three.
```

### Constraints

- `1 <= n <= 100`
- `1 <= meetings.length <= 10⁵`
- each meeting is a pair: `meetings[i].length == 2`
- `0 <= start_i < end_i <= 5 * 10⁵`
- the `start_i` values are pairwise distinct.

## Hints

### Hint 1

Since allocation follows original start order, sort the meetings first and deal
with them once.

### Hint 2

Two priority queues capture the whole rulebook: one of free room numbers
(lowest pops first), one of `(end_time, room)` for occupied rooms (earliest
finish pops first).

### Hint 3

Before assigning a meeting, return every room that has finished by its start to
the free queue — that is what lets the lowest-numbered simultaneously-free room
win.

### Hint 4

A plain per-room counter is enough to find the busiest room at the end.
