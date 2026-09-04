# Ring Deque

## Description

A ring deque is a fixed-capacity double-ended queue backed by a wrap-around
buffer, so insertions and removals at either end run in constant time
without shifting the rest of the contents.

Implement the `RingDeque` class:

- `RingDeque(int k)` creates a deque with capacity `k`.
- `boolean insertFront(int value)` / `boolean insertLast(int value)` add at
  the front/rear; return `false` when full.
- `boolean deleteFront()` / `boolean deleteLast()` remove from the
  front/rear; return `false` when empty.
- `int getFront()` / `int getRear()` read the front/rear element, or `-1`
  when empty.
- `boolean isEmpty()` / `boolean isFull()` report the deque's state.

### Example 1

```text
Input:
["RingDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output: [null, true, true, true, false, 2, true, true, true, 4]
Explanation: With capacity 3, inserting 1 and 2 at the rear and then 3 at
the front produces [3,1,2]. The deque is full, so the first insertion of 4
fails. Removing the rear value 2 frees a slot; inserting 4 at the front then
produces [4,3,1], whose front is 4.
```

### Constraints

- `1 <= k <= 1000`
- `0 <= value <= 1000`
- At most `2000` calls are made across all methods.
