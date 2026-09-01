# Shelf of Bounded Stacks

## Description

Imagine an unbounded row of stacks, numbered from `0` left to right, where
every stack holds at most the same fixed number of items.

Implement the `BoundedStackShelf` class:

- `BoundedStackShelf(int capacity)` initializes the shelf, fixing each
  stack's limit at `capacity`.
- `void push(int val)` places `val` on top of the leftmost stack that still
  has room, extending the row by one stack when every existing stack is
  full.
- `int pop()` removes and returns the item on top of the rightmost non-empty
  stack, or returns `-1` when the whole shelf is empty.
- `int popFromStack(int index)` removes and returns the item on top of stack
  `index`, or returns `-1` when that stack is empty or does not exist.

### Example 1

```text
Input:
["BoundedStackShelf","push","push","push","push","push","push","push","popFromStack","push","pop","popFromStack","pop","pop","popFromStack","pop"]
[[3],[4],[8],[15],[16],[23],[42],[108],[1],[9],[],[0],[],[],[5],[]]
Output: [null,null,null,null,null,null,null,null,42,null,108,15,9,23,-1,16]
Explanation: With capacity 3, the first pushes fill stack 0 with
[4,8,15], stack 1 with [16,23,42], and start stack 2 at [108].
popFromStack(1) removes 42, and the next push(9) refills that freed slot,
which is now the leftmost with room, making stack 1 [16,23,9]. pop()
removes 108 from the rightmost non-empty stack. popFromStack(0) removes
15. The following pops drain 9, then 23. popFromStack(5) returns -1
because no stack 5 exists. The last pop removes 16.
```

### Constraints

- `1 <= capacity <= 2 * 10⁴`
- `1 <= val <= 2 * 10⁴`
- `0 <= index <= 10⁵`
- At most `2 * 10⁵` calls are made to `push`, `pop`, and `popFromStack`.

## Hints

### Hint 1

Keep the stacks in a list, and track which indices might have room so
`push` never has to scan the whole row.

### Hint 2

A min-heap of candidate indices works if every consumer re-checks that a
candidate is still valid: indices past the trimmed end and stacks already
at capacity must be discarded when they surface.
