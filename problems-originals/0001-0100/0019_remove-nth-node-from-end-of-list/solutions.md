# Solutions — Remove Nth Node From End of List

## Two pointers with a dummy head

The node to unlink is the nth from the end, and a singly linked list can only be walked forward — so the natural idea of counting the length first and re-walking to the `len - n`-th node costs two passes. The two-pointer trick removes the second counting pass: launch a `fast` pointer `n` nodes ahead of a `slow` one, then advance both in lockstep until `fast` falls off the end. At that moment `slow` has walked exactly `len - n` nodes, which lands it on the predecessor of the node being removed — the only place an unlink is possible.

A dummy node placed in front of the head makes removing the true head the same predecessor-unlink as removing any other node, so no special case exists anywhere in the loop; returning `dummy.next` also hands back an empty list for free when every node is removed. After the lockstep walk, one statement — `slow.next = slow.next.next` — drops the target node, and the answer is the list that remains.

Each pointer moves at most `sz` nodes in total, and the two walks together visit each node a constant number of times, which answers the follow-up: the removal happens in a single sweep with no length computed up front.

**Complexity:** `O(sz)` time, `O(1)` space.
