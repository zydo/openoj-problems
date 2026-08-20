# Bottom-Boost Stack

## Description

Design a stack whose capacity is fixed at construction, and whose elements can
be raised in bulk from the bottom.

Implement the `BottomBoostStack` class:

- `BottomBoostStack(int maxSize)` creates an empty stack that will never hold
  more than `maxSize` elements.
- `void push(int x)` puts `x` on top — unless the stack is already at
  capacity, in which case nothing happens.
- `int pop()` removes the top element and returns it, or returns `-1` when the
  stack is empty.
- `void boost(int k, int val)` adds `val` to each of the `k` elements closest
  to the bottom; a stack shallower than `k` gets every element raised.

### Example 1

```text
Input:
["BottomBoostStack", "push", "push", "push", "boost", "pop", "boost", "pop", "pop"]
[[2], [4], [8], [6], [1, 5], [], [3, 2], [], []]
Output: [null, null, null, null, null, 8, null, 11, -1]
Explanation:
BottomBoostStack stk = new BottomBoostStack(2);
stk.push(4);     // stack is [4]
stk.push(8);     // stack is [4, 8]
stk.push(6);     // still [4, 8] — capacity 2 is reached
stk.boost(1, 5); // stack is [9, 8] — only the bottom element rises
stk.pop();       // returns 8, stack is [9]
stk.boost(3, 2); // stack is [11] — k exceeds the depth, so everything rises
stk.pop();       // returns 11, stack is []
stk.pop();       // returns -1 — the stack is empty
```

### Example 2

```text
Input:
["BottomBoostStack", "push", "push", "push", "push", "push", "boost", "boost",
 "pop", "boost", "pop", "pop", "pop", "pop", "push", "pop"]
[[4], [5], [9], [2], [7], [11], [2, 30], [10, 4], [], [1, 50], [], [], [], [], [70], []]
Output: [null, null, null, null, null, null, null, null, 11, null, 6, 43, 89, -1, null, 70]
Explanation:
// after the five pushes: [5, 9, 2, 7] — the fifth push finds capacity 4 reached
stk.boost(2, 30); // [35, 39, 2, 7]
stk.boost(10, 4); // [39, 43, 6, 11] — k = 10 covers the whole stack
stk.pop();        // returns 11, stack is [39, 43, 6]
stk.boost(1, 50); // [89, 43, 6]
stk.pop();        // returns 6, then 43, then 89, then -1 once empty
stk.push(70); stk.pop(); // returns 70
```

### Constraints

- `1 <= maxSize, x, k <= 1000`
- `0 <= val <= 100`
- No more than `1000` calls are made to each of `push`, `pop`, and `boost`.

### Follow-up

Can each of the three operations run while touching only a constant number of
slots, even when `k` matches the stack's full depth?

## Hints

### Hint 1

An array plus a depth counter makes pushing and popping constant work. The
costly step is `boost`, whose obvious form walks the bottom `k` slots — and
`k` may equal the whole stack.

### Hint 2

Rather than updating the bottom immediately, record the raise and hand it out
as elements leave. After `boost(k, val)` on a stack of depth `d`, exactly the
slots at depths `1..min(k, d)` are owed `val`; one stored number per depth can
say so.

### Hint 3

Popping depth `d` must also settle everything accumulated below that depth,
because boosts always cover a prefix starting at the bottom. So a pop returns
`value[d] + owed[d]`, and `owed[d]` is folded into `owed[d - 1]` as the slot
is retired.
