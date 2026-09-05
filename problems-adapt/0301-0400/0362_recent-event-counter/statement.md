# Recent Event Counter

## Description

Track events in a rolling five-minute window. Timestamps are measured in
seconds and arrive in non-decreasing order; multiple events may share the same
second. At query time `t`, count events whose timestamps lie in
`(t - 300, t]`.

Implement the `RecentEventCounter` class:

- `RecentEventCounter()` creates an empty counter.
- `void recordEvent(int timestamp)` records one event at `timestamp`.
- `int countRecent(int timestamp)` returns the number of events in the current
  300-second window.

### Example 1

```text
Input:
["RecentEventCounter", "recordEvent", "recordEvent", "recordEvent", "countRecent", "recordEvent", "countRecent", "countRecent", "countRecent"]
[[], [5], [5], [120], [120], [305], [305], [419], [420]]
Output: [null, null, null, null, 3, null, 2, 2, 1]
Explanation: At time 305, events at second 5 have just left the open lower
boundary; at time 420, the event at second 120 has also expired.
```

### Constraints

- `1 <= timestamp <= 2 × 10⁹`
- Call timestamps are non-decreasing.
- At most `300` calls are made in total.

### Follow-up

How would the design change if one second could contain an enormous number of
events?
