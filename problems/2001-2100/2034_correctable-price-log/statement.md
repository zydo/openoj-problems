# Correctable Price Log

## Description

A quoted price arrives tagged with the moment it was observed. The records
reach you as a stream, and the stream is messy in two ways: observations
show up out of order, and an early report is sometimes wrong — a later
record carrying the same moment replaces the price previously logged for
it.

Build a log that supports:

- **record(timestamp, price)** — write `price` down as the price at
  `timestamp`, superseding anything earlier logged for that moment.
- **latest()** — the price at the most recently observed moment in the log.
- **highest()** — the largest price currently in the log.
- **lowest()** — the smallest price currently in the log.

Implement the `PriceLog` class:

- `PriceLog()` — an empty log.
- `void record(int timestamp, int price)` — records or corrects the price
  at `timestamp`.
- `int latest()` — the price at the log's greatest timestamp.
- `int highest()` — the greatest price across all timestamps.
- `int lowest()` — the smallest price across all timestamps.

### Example 1

```text
Input:
["PriceLog", "record", "record", "latest", "highest", "lowest", "record", "highest", "latest", "record", "latest", "lowest"]
[[], [3,8], [1,6], [], [], [], [3,4], [], [], [5,9], [], []]
Output: [null, null, null, 8, 8, 6, null, 6, 4, null, 9, 4]
Explanation:
PriceLog log = new PriceLog();
log.record(3, 8); // moments [3] with prices [8].
log.record(1, 6); // moments [1, 3] with prices [6, 8].
log.latest();     // 8 — the greatest moment is 3.
log.highest();    // 8.
log.lowest();     // 6.
log.record(3, 4); // corrects moment 3; moments [1, 3] with prices [6, 4].
log.highest();    // 6 — the 8 is gone with the correction.
log.latest();     // 4 — moment 3 still holds the latest price.
log.record(5, 9); // moments [1, 3, 5] with prices [6, 4, 9].
log.latest();     // 9.
log.lowest();     // 4.
```

### Example 2

```text
Input:
["PriceLog", "record", "record", "record", "highest", "lowest"]
[[], [2,7], [2,3], [2,7], [], []]
Output: [null, null, null, null, 7, 7]
Explanation: The price at moment 2 ends where it began — 7, then a wrong
3, then 7 again. The log holds one moment, priced 7.
```

### Constraints

- `1 <= timestamp, price <= 10⁹`
- At most `10⁵` calls to `record`, `latest`, `highest`, and `lowest` in
  total.
- `latest`, `highest`, and `lowest` are only called after at least one
  `record`.

### Follow-up

A correction never removes a moment, it only rewrites that moment's price
— can the extrema be maintained without ever removing anything?

## Hints

### Hint 1

Two facts live independently: which moment is the newest (one running
maximum), and which price each moment currently carries (a map keyed by
moment). Composing the two answers `latest`.

### Hint 2

For the extrema, a sorted multiset of prices would serve, but every
correction would need a real deletion from it. A heap cannot delete an
arbitrary entry — though maybe it never has to.

### Hint 3

Push `(price, moment)` onto a max-heap and a min-heap with every record,
and call an entry stale when the map no longer shows that price for its
moment. Lazily popping stale tops leaves the true extremum on top, and
each entry is popped at most once.
