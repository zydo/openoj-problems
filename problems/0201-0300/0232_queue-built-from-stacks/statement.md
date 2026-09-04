# Queue Built From Stacks

## Description

Build a first-in-first-out queue using nothing but two stacks internally.
Your queue must support the four usual operations.

Implement the `StackQueue` class:

- `push(x)` places `x` at the back of the queue.
- `pop()` removes and returns the element currently at the front.
- `peek()` returns the element currently at the front without removing it.
- `empty()` returns whether the queue currently holds no elements.

You may only use a stack's own standard operations — push to the top, pop
or peek from the top, size, and empty checks. If your language lacks a
native stack, simulate one with a list, but touch it only through those
operations.

### Example 1

```text
Input:
["StackQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output: [null, null, null, 1, 1, false]
Explanation:
StackQueue queue = new StackQueue();
queue.push(1);
queue.push(2);
queue.peek(); // returns 1
queue.pop(); // returns 1
queue.empty(); // returns false
```

### Constraints

- `1 <= x <= 9`
- At most `100` calls total are made across `push`, `pop`, `peek`, and
  `empty`.
- Every call to `pop` and `peek` is guaranteed valid.

### Follow-up

Can every individual operation run in amortized `O(1)` time — even
though some single `pop` calls may need `O(n)` work?

## Hints

### Hint 1

Keep two stacks: one that only ever receives new pushes, and one that
serves the front of the queue.

### Hint 2

When the serving stack runs empty, dump the entire pushing stack into it
one element at a time — that reversal puts the oldest pushed element on
top, exactly where the queue's front needs it. Each element only ever
makes that trip once, so the amortized cost per operation stays constant.
