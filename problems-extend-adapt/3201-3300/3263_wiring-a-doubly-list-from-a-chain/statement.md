# Wiring A Doubly List From A Chain

## Description

You are given the head of a singly linked list — each node holds a value and
a `next` pointer only. Build the doubly linked counterpart: one fresh node
per input value, in the same order, each chained forward through `next`, and
every node except the first also pointing back through `prev` at the node
built just before it. The first node's `prev` and the last node's `next`
must both be null.

The returned chain is checked by walking it forward through `next`, which
must replay the input's values exactly, while each `prev` back-link is
verified along the walk — a list wired only in the forward direction does
not pass.

### Example 1

```text
Input: head = [5,4,3,2,1]
Output: [5,4,3,2,1]
Explanation: Five nodes come back in the same order, each one pointing back
at its predecessor.
```

### Example 2

```text
Input: head = [7]
Output: [7]
Explanation: A lone node is both head and tail, so both of its links stay
null.
```

### Example 3

```text
Input: head = [10,20,10,20,10,20]
Output: [10,20,10,20,10,20]
Explanation: Repeated values still mean distinct nodes — six nodes with five
forward links and five back-links between them.
```

### Constraints

- The input list holds between `1` and `50` nodes.
- `1 <= Node.val <= 50`

### Follow-up

Can you produce the answer in one walk over the input, allocating nothing
except the nodes of the list you are building?

## Hints

### Hint 1

Keep a handle on the most recently built node and hang each new node off it;
nothing else needs to be remembered.

### Hint 2

The very first append has no predecessor to point back at, so test once for
whether the tail exists yet and leave that node's `prev` null.
