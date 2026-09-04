# The Ride Queue

## Description

A dispatch queue pairs up riders and drivers as they arrive: whoever
has been waiting longest gets served first. Riders join the queue
requesting rides, drivers join as they become available, and each
matching pairs the earliest waiting rider with the earliest available
driver.

Implement the `RideQueue` class:

- `RideQueue()` initializes the queue with no riders and no drivers.
- `void addRider(int riderId)` adds a new waiting rider.
- `void addDriver(int driverId)` adds a new available driver.
- `int[] matchDriverWithRider()` pairs the earliest available driver
  with the earliest waiting rider and removes both. It returns
  `[driverId, riderId]`, or `[-1, -1]` when no match is possible.
- `void cancelRider(int riderId)` cancels that rider's request, if the
  rider is still waiting (already-matched or unknown riders are simply
  ignored).

### Example 1

```text
Input:
["RideQueue", "addRider", "addRider", "addDriver", "matchDriverWithRider", "addDriver", "cancelRider", "matchDriverWithRider", "addRider", "matchDriverWithRider"]
[[], [4], [7], [1], [], [9], [7], [], [5], []]
Output: [null, null, null, null, [1, 4], null, null, [-1, -1], null, [9, 5]]
Explanation:
RideQueue queue = new RideQueue();
queue.addRider(4);            // rider 4 waits first.
queue.addRider(7);            // rider 7 waits behind.
queue.addDriver(1);           // driver 1 is available.
queue.matchDriverWithRider(); // [1, 4] — earliest driver with earliest rider.
queue.addDriver(9);           // driver 9 is available.
queue.cancelRider(7);         // rider 7 withdraws.
queue.matchDriverWithRider(); // [-1, -1] — a driver with no rider.
queue.addRider(5);            // rider 5 joins.
queue.matchDriverWithRider(); // [9, 5].
```

### Example 2

```text
Input:
["RideQueue", "addDriver", "addDriver", "addRider", "matchDriverWithRider", "cancelRider", "matchDriverWithRider", "addRider", "matchDriverWithRider"]
[[], [3], [8], [6], [], [6], [], [2], []]
Output: [null, null, null, null, [3, 6], null, [-1, -1], null, [8, 2]]
Explanation:
RideQueue queue = new RideQueue();
queue.addDriver(3);           // drivers may arrive before riders.
queue.addDriver(8);           // driver 8 queues behind 3.
queue.addRider(6);            // rider 6 joins.
queue.matchDriverWithRider(); // [3, 6].
queue.cancelRider(6);         // rider 6 is already gone; no effect.
queue.matchDriverWithRider(); // [-1, -1] — driver 8 waits alone.
queue.addRider(2);            // rider 2 joins.
queue.matchDriverWithRider(); // [8, 2].
```

### Constraints

- `1 <= riderId, driverId <= 1000`
- Rider ids are unique among riders and each is added at most once;
  likewise for driver ids.
- At most `1000` calls in total are made to `addRider`, `addDriver`,
  `matchDriverWithRider`, and `cancelRider`.

## Hints

### Hint 1

Two first-in-first-out queues preserve the arrival order on each side.

### Hint 2

A cancel can hit any waiting rider, so keep a way to strike a rider
from the middle of the queue without walking the whole thing.

### Hint 3

When matching, ignore riders that were canceled so the earliest valid
rider is the one paired.
