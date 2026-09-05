# Double-Booking Calendar

## Description

Design a calendar that lets an event's time range be booked at most
twice — that is, at most two accepted events may ever overlap at the
same moment; a third overlapping event must be rejected.

An event spans `[start, end)`: it occupies every real number `x` with
`start <= x < end`.

Implement the `DoubleBookCalendar` class:

- `DoubleBookCalendar()` initializes an empty calendar.
- `book(start, end)` attempts to add the event `[start, end)`. Returns
  `true` and books it if doing so never causes three accepted events to
  overlap at any single moment; otherwise returns `false` and leaves the
  calendar unchanged.

### Example 1

```text
Input:
["DoubleBookCalendar", "book", "book", "book", "book", "book", "book"]
[[], [15, 25], [45, 55], [15, 45], [10, 20], [10, 15], [20, 50]]
Output: [null, true, true, true, false, true, false]
Explanation:
DoubleBookCalendar calendar = new DoubleBookCalendar();
calendar.book(15, 25); // true — nothing booked yet
calendar.book(45, 55); // true — no overlap with [15, 25)
calendar.book(15, 45); // true — overlaps [15, 25) once, giving a double booking there, but never a triple
calendar.book(10, 20); // false — [10, 20) would triple-book [15, 20), already double-booked
calendar.book(10, 15); // true — touches nothing beyond [15, 15), which is empty
calendar.book(20, 50); // false — would triple-book [20, 25)
```

### Constraints

- `0 <= start < end <= 10⁹`
- At most `1000` calls are made to `book`.
