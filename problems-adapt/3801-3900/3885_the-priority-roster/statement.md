# The Priority Roster

## Description

A roster holds events, each carrying a unique id and a priority.
Popping always takes the highest-priority event; among equals, the
smallest id goes first.

Implement the `PriorityRoster` class:

- `PriorityRoster(int[][] events)` initializes the roster from the
  given events, where `events[i] = [eventId_i, priority_i]`.
- `void updatePriority(int eventId, int newPriority)` changes the
  priority of the active event with id `eventId`. The event is
  guaranteed to be active.
- `int pollHighest()` removes and returns the id of the active event
  with the highest priority. If several active events share the
  highest priority, return the smallest id among them. If no event is
  active, return `-1`.

An event is active until `pollHighest()` removes it.

### Example 1

```text
Input:
["PriorityRoster", "pollHighest", "updatePriority", "pollHighest", "pollHighest"]
[[[[3, 5], [8, 9], [1, 5]]], [], [3, 9], [], []]
Output: [null, 8, null, 3, 1]
Explanation:
PriorityRoster roster = new PriorityRoster([[3, 5], [8, 9], [1, 5]]);
roster.pollHighest();    // 8 — it alone holds priority 9.
roster.updatePriority(3, 9); // event 3 is raised to priority 9.
roster.pollHighest();    // 3 — now the highest.
roster.pollHighest();    // 1 — the last event left.
```

### Example 2

```text
Input:
["PriorityRoster", "pollHighest", "pollHighest", "pollHighest", "pollHighest"]
[[[[10, 4], [20, 4]]], [], [], [], []]
Output: [null, 10, 20, -1, -1]
Explanation:
PriorityRoster roster = new PriorityRoster([[10, 4], [20, 4]]);
roster.pollHighest();    // 10 — tied at 4, the smaller id goes first.
roster.pollHighest();    // 20.
roster.pollHighest();    // -1 — the roster is empty.
roster.pollHighest();    // -1 — it stays empty.
```

### Constraints

- `1 <= events.length <= 10⁵`
- `events[i] = [eventId, priority]`
- `1 <= eventId, priority, newPriority <= 10⁹`
- All event ids in `events` are unique.
- Every `updatePriority` names an active event.
- At most `10⁵` calls in total are made to `updatePriority` and
  `pollHighest`.

## Hints

### Hint 1

An update can simply push a fresh priority version and leave the old
one behind.

### Hint 2

When popping, discard top entries whose priority no longer matches the
event's live priority, then read the first one that agrees.
