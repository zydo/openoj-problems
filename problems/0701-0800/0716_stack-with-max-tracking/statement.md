# Stack With Max Tracking

## Description

Design a stack that supports the usual push/pop/top operations, plus two
extra operations for reading and removing its largest element.

Implement the `MaxTrackingStack` class:

- `push(x)` pushes `x` onto the stack.
- `pop()` removes the element on top of the stack and returns it.
- `top()` returns the element on top of the stack without removing it.
- `peekMax()` returns the largest element currently in the stack, without
  removing anything.
- `popMax()` removes the largest element currently in the stack and
  returns it. If several elements tie for largest, only the one nearest
  the top is removed.

### Example 1

```text
Input:
["MaxTrackingStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [3], [8], [3], [], [], [], [], [], []]
Output: [null, null, null, null, 3, 8, 3, 3, 3, 3]
Explanation:
MaxTrackingStack stack = new MaxTrackingStack();
stack.push(3);    // stack = [3]
stack.push(8);    // stack = [3, 8]
stack.push(3);    // stack = [3, 8, 3]
stack.top();      // returns 3
stack.popMax();   // removes and returns 8; stack = [3, 3]
stack.top();      // returns 3
stack.peekMax();  // returns 3, the largest of what remains
stack.pop();      // removes and returns 3; stack = [3]
stack.top();      // returns 3
```

### Constraints

- `-10⁷ <= x <= 10⁷`
- At most `10⁴` calls total are made to `push`, `pop`, `top`, `peekMax`,
  and `popMax`.
- There is always at least one element in the stack when `pop`, `top`,
  `peekMax`, or `popMax` is called.
