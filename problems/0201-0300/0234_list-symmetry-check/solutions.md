# Solutions — List Symmetry Check

## Middle by two pointers, second half reversed

A palindrome's back half, read forward, repeats its front half — so the question is really how to hold both halves up against each other at once. Copying the values into an array and comparing against its reverse answers that with `O(n)` extra memory, which is exactly what the follow-up rules out; the list itself has to be rearranged instead. Two pointers find the middle in a single pass: `slow` steps one node at a time, `fast` two, and when `fast` runs off the end, `slow` stands at the front of the back half.

The back half is then reversed in place — each node is unlinked and prepended to a growing `second` list, three pointer writes per node — so it reads backward. One pointer walks from `head`, one from `second`, and the two move in lockstep comparing values. On an odd length, `slow` lands on the middle node, so the middle ends up at the tail of `second` and faces itself in the final comparison, which cannot fail; every other node is checked against its mirror exactly once.

The reversal leaves the back half backward when the method returns — the original statement never asks for the list to be restored, and only the boolean ever crosses the wire, so the mutation is unobservable. The whole method touches each node a constant number of times across the three passes and allocates nothing beyond a handful of pointers.

**Complexity:** `O(n)` time, `O(1)` space.
