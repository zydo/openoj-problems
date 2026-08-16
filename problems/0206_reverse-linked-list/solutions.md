# Solutions — Reverse Linked List

## Iterative Pointer Reversal

The list is reversed in place by walking it once and flipping one `next` pointer at a time. Three references carry the state: `prev` is the already-reversed portion's head (initially `None`), `current` is the node being processed, and `nxt` temporarily holds the rest of the list.

The loop's four steps are ordered to protect the only fragile operation: `nxt = current.next` must save the forward link _before_ `current.next = prev` overwrites it, or the remainder of the list would be lost. After the pointer flips, `prev` advances to the newly reversed node and `current` steps to the saved successor. Invariant: at the top of each iteration, the chain behind `prev` is fully reversed and the chain ahead of `current` is untouched.

When `current` becomes `None` the whole list has been consumed and `prev` points at the original tail, which is the new head and the return value. An empty list never enters the loop and returns `None` unchanged; a single node gets its `next` set to `None` (already the case) and is returned as is.

**Complexity:** `O(n)` time, `O(1)` space.
