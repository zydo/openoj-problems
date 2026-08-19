# Design a Packet Buffer

## Description

Design a buffer that manages packets flowing through a network relay. Each
packet carries three fields:

- `source` — identifies the machine that produced the packet;
- `destination` — identifies the machine the packet is addressed to;
- `timestamp` — the moment the packet reached the buffer.

Implement the `PacketBuffer` class:

- `PacketBuffer(int capacity)` initializes the buffer to hold at most
  `capacity` packets at any moment. Accepting a packet into a full buffer
  drops the oldest stored packet to make room.
- `boolean receive(int source, int destination, int timestamp)` takes a packet
  in. The packet is a duplicate when the very same `source`, `destination`,
  and `timestamp` triple is stored right now, and duplicates are refused.
  Returns `true` when the packet was stored, `false` otherwise.
- `int[] dispatch()` releases the oldest stored packet, in arrival order,
  removing it from the buffer, and returns it as
  `[source, destination, timestamp]`. Nothing stored means an empty array.
- `int countInWindow(int destination, int startTime, int endTime)` reports how
  many stored packets carry the given `destination` and a timestamp inside the
  closed range `[startTime, endTime]`.

Packets arrive with non-decreasing `timestamp`.

### Example 1

```text
Input:
["PacketBuffer", "receive", "receive", "receive", "receive", "receive", "dispatch", "countInWindow", "countInWindow", "countInWindow"]
[[3], [4,9,50], [4,9,50], [6,9,60], [7,2,60], [8,2,80], [], [9,55,100], [2,55,70], [2,0,100]]
Output: [null, true, false, true, true, true, [6,9,60], 0, 1, 2]
Explanation:
PacketBuffer buffer = new PacketBuffer(3);   // capacity 3
buffer.receive(4, 9, 50);                    // stored — true
buffer.receive(4, 9, 50);                    // same triple is stored — false
buffer.receive(6, 9, 60);                    // stored — true
buffer.receive(7, 2, 60);                    // stored — true
buffer.receive(8, 2, 80);                    // full: (4,9,50) is dropped — true
buffer.dispatch();                           // hands over [6,9,60]
buffer.countInWindow(9, 55, 100);            // destination 9 holds nothing — 0
buffer.countInWindow(2, 55, 70);             // only (7,2,60) is in range — 1
buffer.countInWindow(2, 0, 100);             // (7,2,60) and (8,2,80) — 2
```

### Example 2

```text
Input:
["PacketBuffer", "receive", "dispatch", "dispatch", "countInWindow", "receive", "countInWindow"]
[[5], [3,7,20], [], [], [7,0,1000], [3,7,20], [7,20,20]]
Output: [null, true, [3,7,20], [], 0, true, 1]
Explanation:
PacketBuffer buffer = new PacketBuffer(5);
buffer.receive(3, 7, 20);   // stored — true
buffer.dispatch();          // hands over [3,7,20], emptying the buffer
buffer.dispatch();          // nothing stored — []
buffer.countInWindow(7, 0, 1000);  // nothing stored — 0
buffer.receive(3, 7, 20);   // the earlier copy left, so this is not a duplicate — true
buffer.countInWindow(7, 20, 20);   // 1
```

### Constraints

- `2 <= capacity <= 10⁵`
- `1 <= source, destination <= 2 * 10⁵`
- `1 <= timestamp <= 10⁹`
- `1 <= startTime <= endTime <= 10⁹`
- at most `10⁵` calls to `receive`, `dispatch`, and `countInWindow` in total
- `receive` calls arrive with non-decreasing `timestamp`

### Follow-up

Stored packets only ever leave as the oldest one — what does that spare you
from doing inside each destination's timestamp log?

## Hints

### Hint 1

Three structures describe the whole state: the arrival queue, the set of
triples currently stored, and one timestamp log per destination. Receiving
appends to all three; a departure removes one entry from each.

### Hint 2

Arrival timestamps never decrease, so every destination's log comes out
sorted without work — and a range count over a sorted list is a pair of
binary searches.

### Hint 3

Departures always consume the globally oldest packet, which sits at the front
of its own destination's log. Slide a per-destination start index forward
instead of deleting: the live part stays a suffix, and the searches begin at
that index.
