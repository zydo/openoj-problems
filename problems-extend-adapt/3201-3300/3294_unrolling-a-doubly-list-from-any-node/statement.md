# Unrolling A Doubly List From Any Node

## Description

You are handed one node that lives somewhere inside a doubly linked list.
Each node carries an integer `val` plus both direction pointers — `prev`
toward the node before it and `next` toward the node after it — and the
list is linked consistently in both directions. Values are unique within
the list, so the handed node's own value pins down exactly which node it
is.

Return the array of every element in the list, read head to tail. The
handed node may be the head, the tail, or anything in between.

### Example 1

```text
Input: values = [3,7,8,12], node = 12
Output: [3,7,8,12]
Explanation: The handed node is the tail, 12. Stepping back through
`prev` reaches the head 3, and one forward sweep reads out all four
elements.
```

### Example 2

```text
Input: values = [9,4,6], node = 4
Output: [9,4,6]
Explanation: The handed node sits in the middle; rewinding past it to the
head 9 and sweeping forward collects the whole list.
```

### Example 3

```text
Input: values = [100,200,300,400,500], node = 100
Output: [100,200,300,400,500]
Explanation: The head itself was handed over, so no rewind is needed —
the forward sweep alone reads out all five elements.
```

### Constraints

- The number of nodes in the list is in the range `[1, 500]`.
- `1 <= Node.val <= 1000`
- All values in a list are unique.

## Hints

### Hint 1

The `prev` pointers always lead home: from the handed node, keep stepping
to the previous node until none remains, and you are standing on the head.

### Hint 2

A single forward sweep over `next` from the head then gathers the
elements in order.

### Hint 3

Alternatively, run `next` to the tail first and read backward, reversing
the buffer at the end — two walks either way, constant extra space.
