# Nonoverlapping Reservation Book

## Description

Create a reservation book that accepts a time slot only when it shares no
time with any slot accepted earlier. A slot `[start, end)` includes `start`
but excludes `end`, so two slots may meet at an endpoint.

Implement the `ReservationBook` class:

- `ReservationBook()` creates an empty book.
- `boolean reserveSlot(int start, int end)` returns `true` and records the
  slot when it does not overlap an existing reservation. Otherwise it returns
  `false` and leaves the book unchanged.

### Example 1

```text
Input:
["ReservationBook", "reserveSlot", "reserveSlot", "reserveSlot",
 "reserveSlot", "reserveSlot", "reserveSlot"]
[[], [35,45], [5,15], [15,35], [11,22], [45,52], [44,46]]
Output: [null, true, true, true, false, true, false]
Explanation: [5,15), [15,35), and [35,45) may touch without overlapping.
The request [11,22) crosses two accepted slots. After [45,52) is accepted,
[44,46) overlaps reservations on both sides and is rejected.
```

### Constraints

- `0 <= start < end <= 10^9`
- `reserveSlot` is called at most `1000` times.

## Hints

### Hint 1

Keep accepted slots ordered by their starting times.

### Hint 2

At the insertion position of a new slot, only the immediately preceding and
following slots can overlap it.

### Hint 3

For half-open slots, an endpoint equal to a neighbor's endpoint is allowed.
Insert only after both strict overlap tests pass.
