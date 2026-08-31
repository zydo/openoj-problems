# Stack Built From Queues

## Description

Build a last-in-first-out stack using nothing but two queues internally.
Your stack must support the four usual operations.

Implement the `QueueStack` class:

- `push(x)` places `x` on top of the stack.
- `pop()` removes and returns the element currently on top.
- `top()` returns the element currently on top without removing it.
- `empty()` returns whether the stack currently holds no elements.

You may only use a queue's own standard operations — enqueue at the back,
dequeue or peek from the front, size, and empty checks. If your language
lacks a native queue, simulate one with a list or deque, but touch it only
through those operations.

### Example 1

```text
Input:
["QueueStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output: [null, null, null, 2, 2, false]
Explanation:
QueueStack stack = new QueueStack();
stack.push(1);
stack.push(2);
stack.top(); // returns 2
stack.pop(); // returns 2
stack.empty(); // returns false
```

### Constraints

- `1 <= x <= 9`
- At most `100` calls total are made across `push`, `pop`, `top`, and
  `empty`.
- Every call to `pop` and `top` is guaranteed valid.

### Follow-up

Can the whole stack be built from a single queue instead of two?

## Hints

### Hint 1

A queue naturally exposes its OLDEST element at the front — exactly
backwards from what a stack's `top` needs, which is the MOST recently
pushed element.

### Hint 2

After pushing a new element, rotate every earlier element behind it one at
a time. The new element then sits at the front, ready for `top` or `pop`
to read directly.
