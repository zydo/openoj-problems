# Solutions — Every Node's Right-Hand Neighbor

## Level-chain walk

The tree is perfect, so a parent's two children sit side by side in the next
level: `left.next` is always `right`, and `right.next` is always the next
parent's `left`. That turns each already-wired level into a linked list the
walk can traverse for free — no queue, no recursion.

Start from the root (a one-node level whose `next` stays null) and walk
downward: `level` always names the leftmost node of the current level, and
the inner walk hops along its `next` chain wiring the level below — each
parent links its own pair, then bridges to the next parent's `left`. When
the current level's first node has no left child the tree's leaves are
reached (a perfect tree ends everywhere at once) and the walk stops.

Every node is visited exactly once and the only state is the two walk
cursors — the constant extra space the follow-up asks for.

**Complexity:** O(n) time, O(1) extra space.
