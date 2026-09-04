# Deque With A Middle Gate

## Description

A queue with three doors: values can enter at the front, the back, or —
unusually — the middle, and can leave from any of those three points. The
middle of an even-length queue is defined as the left of its two central
positions; the middle of an odd-length queue is its exact center.

Implement the `MidGateQueue` class:

- `MidGateQueue()` initializes an empty queue.
- `void pushFront(int val)` adds `val` at the front.
- `void pushMiddle(int val)` adds `val` at the middle.
- `void pushBack(int val)` adds `val` at the back.
- `int popFront()` removes and returns the front value, or `-1` if empty.
- `int popMiddle()` removes and returns the middle value, or `-1` if
  empty.
- `int popBack()` removes and returns the back value, or `-1` if empty.

### Example 1

```text
Input:
["MidGateQueue","pushFront","pushBack","pushMiddle","pushMiddle","popFront","popMiddle","popMiddle","popBack","popFront"]
[[],[1],[2],[3],[4],[],[],[],[],[]]
Output: [null,null,null,null,null,1,3,4,2,-1]
Explanation: The pushes build [1,3,4,2] — the middle pushes landed at
positions between 1 and 2, then between 3 and 4. popFront removes 1,
leaving [3,4,2]. popMiddle takes 3 (left of center), popMiddle takes 4,
and popBack removes 2. The final popFront finds the queue empty and
returns -1.
```

### Constraints

- `1 <= val <= 10⁹`
- At most `1000` calls are made to `pushFront`, `pushMiddle`,
  `pushBack`, `popFront`, `popMiddle`, and `popBack`.

## Hints

### Hint 1

Two balanced halves (front half reversed, back half in order) put the
middle gate at the boundary between them.

### Hint 2

Rebalance by moving one element whenever the halves drift two apart —
then every operation is O(1).
