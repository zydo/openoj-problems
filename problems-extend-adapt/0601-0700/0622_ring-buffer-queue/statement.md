# Ring Buffer Queue

## Description

A ring buffer queue is a fixed-capacity FIFO structure whose backing storage
wraps around: once the last slot fills, the next insertion reuses whatever
slot the queue's front already vacated, so freed space in the middle of the
buffer is never wasted the way a naive array-backed queue would waste it.

Implement the `RingBufferQueue` class without using your language's built-in
queue type:

- `RingBufferQueue(int k)` creates a queue with capacity `k`.
- `boolean enQueue(int value)` inserts `value` at the rear; returns `false`
  when the queue is already full.
- `boolean deQueue()` removes the front element; returns `false` when the
  queue is empty.
- `int Front()` returns the front element, or `-1` when empty.
- `int Rear()` returns the rear element, or `-1` when empty.
- `boolean isEmpty()` / `boolean isFull()` report the queue's state.

### Example 1

```text
Input:
["RingBufferQueue", "enQueue", "enQueue", "deQueue", "enQueue", "enQueue", "isFull", "Front", "Rear"]
[[2], [5], [6], [], [7], [8], [], [], []]
Output: [null, true, true, true, true, false, true, 6, 7]
Explanation: With capacity 2, the queue fills at 5,6; dequeuing 5 frees one
slot, which the enQueue(7) reuses; enQueue(8) then fails because the queue
is full again at 6,7.
```

### Constraints

- `1 <= k <= 1000`
- `0 <= value <= 1000`
- At most `3000` calls are made across all methods.
