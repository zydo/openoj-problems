# Solutions — Next Greater, List Nodes

## Monotonic stack of indices

Indexing into a linked list is impossible, so the walk begins by draining the
list into an ordinary array of values. The result array starts out as all zeros,
which is already the right answer for any position that never meets something
larger.

The sweep then holds a stack of positions whose values descend from bottom to
top — the ones still awaiting their resolver. When `value` arrives, every
stacked position it strictly exceeds has just been resolved: the inner `while`
pops those positions and writes `value` into their slots, after which the
current position joins the stack to wait for its own turn. The comparison must
stay strict, because equal values do not count as greater for each other.

Each position is pushed once and popped at most once, so all popping over the
entire run is bounded by the pushes and the algorithm stays linear. Whatever
survives on the stack at the end has nothing larger to its right and simply
keeps the zero it was given — no finishing pass required.

On `[3, 8, 5, 2, 6]`: the 8 immediately resolves the 3; then 8, 5, and 2 wait
together until the trailing 6 resolves the 5 and the 2, leaving 8 and 6 — the
two local maxima — with zeros.

**Complexity:** `O(n)` time, `O(n)` space for the values array, answer, and stack.
