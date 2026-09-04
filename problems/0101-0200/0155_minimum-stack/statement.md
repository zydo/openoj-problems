# Minimum Stack

## Description

Build a stack of integers on which the smallest element held is as cheap to
read as the top one.

Implement the `MinimumStack` class:

- `MinimumStack()` — start with an empty stack.
- `void push(int value)` — place `value` on top of the stack.
- `void pop()` — remove the top element.
- `int top()` — return the top element.
- `int minimum()` — return the smallest element currently on the stack.

Every one of the four operations must finish in `O(1)` time.

### Example 1

```text
Input:
["MinimumStack", "push", "push", "push", "minimum", "pop", "minimum", "top"]
[[], [3], [8], [1], [], [], [], []]
Output: [null, null, null, null, 1, null, 3, 8]
Explanation:
MinimumStack stack = new MinimumStack();
stack.push(3);
stack.push(8);
stack.push(1);
stack.minimum(); // 1
stack.pop();     // discards the 1
stack.minimum(); // 3 — the stack remembers its earlier state
stack.top();     // 8
```

### Example 2

```text
Input:
["MinimumStack", "push", "push", "minimum", "pop", "minimum", "push", "push", "minimum", "top", "pop", "minimum"]
[[], [6], [6], [], [], [], [9], [2], [], [], [], []]
Output: [null, null, null, 6, null, 6, null, null, 2, 2, null, 6]
Explanation:
Two copies of 6 sit on the stack; popping one leaves the minimum at 6
because the other copy is still there. Pushing 2 makes 2 the minimum, and
popping it again restores 6.
```

### Constraints

- `-2³¹ <= value <= 2³¹ - 1`
- Methods `pop`, `top`, and `minimum` are never invoked on an empty stack.
- At most `3 * 10⁴` calls in total across the four operations.

## Hints

### Hint 1

Reading the minimum by scanning the stack is linear work, and keeping one
cached smallest value fails the moment a `pop` removes it — there would be
nothing left to consult without scanning again. The whole history of minima
has to be available without recomputation.

### Hint 2

Pair every pushed value with the smallest value seen at or below it at the
time of the push: either the value itself, or the minimum recorded by the
entry it lands on. The top entry then holds both answers — its own value for
`top`, its recorded minimum for `minimum`.

### Hint 3

A `pop` only ever rewinds the stack to a configuration it had before, and
the entry newly exposed already carries the minimum of exactly that
configuration. Repeated smallest values are covered automatically: every
copy stores its own snapshot, so the minimum persists until the last copy
goes.
