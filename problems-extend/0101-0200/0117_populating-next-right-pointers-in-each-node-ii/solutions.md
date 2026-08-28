# Solutions — Populating Next Right Pointers in Each Node II

## Next-level chain building

The 116 trick — each parent links its own two children and bridges to the
next parent's child — breaks here, because a level's nodes may be missing
either child entirely. What survives is the outer shape: a level whose
`next` pointers are already wired is a linked list, and walking it visits
the level's nodes left to right without a queue.

So each pass walks the current level's chain and builds the next level's
chain as it goes: every child found (left first, then right) is appended
to a growing `next` chain through a `head`/`tail` pair. Gaps disappear on
their own — missing children are simply never appended, so the surviving
children close ranks. The walk restarts from the head of the freshly built
chain and stops when a pass finds no children at all.

Every node is appended exactly once and read exactly once; the only state
is the two chain cursors, which is the constant extra space the follow-up
asks for. The returned serialization walks the same chains level by level.

**Complexity:** O(n) time, O(1) extra space.
